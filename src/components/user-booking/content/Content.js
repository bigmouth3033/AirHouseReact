import React, { useState } from "react";
import BookingItem from "./BookingItem";
import styled from "styled-components";
import { Link } from "react-router-dom";
import axiosClient from "api/axiosClient";
import { useQuery } from "@tanstack/react-query";


const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  & .PageNumber{
    border: solid thin black;
    padding: 10px;
  }
  & .PageNumberContainer{
    display: flex;
    gap: 10px;
  }
`;

export default function Content(props) {
  const [page, setPage] = useState([]);
  const [secletedPage,setSecletedPage] = useState();
  const fethCurrentPage = async (secletedPage) => {
    const response = await axiosClient.get(`readCurrentPage?page=${secletedPage}`);
    return response.data;
  }

  const CurrentPageByUserQuery = (secletedPage) => {
    const titleQuery = useQuery({
      queryKey: ["booking", "title",'page',secletedPage],
      queryFn: () => fethCurrentPage(secletedPage),
      keepPreviousData: true,
      retry: 1,
    });
    return titleQuery;
  };
  const handlePagination = (pageNumber) =>{
    setSecletedPage(pageNumber)
  }
  const currentPageByUserQuery = CurrentPageByUserQuery(secletedPage);
  console.log(currentPageByUserQuery.data);

  let totalPage = null;
  if (currentPageByUserQuery.isSuccess) {
    totalPage = Math.ceil(currentPageByUserQuery.data.total / 10);  
  }
  
  // const totalPage = 2

  return (
    <StyledContainer>
      {
        currentPageByUserQuery.isLoading ? <div>Loading</div> :
          <div>
            {currentPageByUserQuery.data.data.map((item, index) => {
              return <BookingItem key={index} BookingItem={item} />;
            })}
          </div>
      }
      <div className="PageNumberContainer">
        {Array(totalPage).fill(0).map((_,index) => {
          const pageNumber = index + 1
          return (
            <span key={pageNumber} onClick={() => handlePagination(pageNumber)} className="PageNumber">
              <Link to={`/user/booking-list?page=${pageNumber}`}>{pageNumber}</Link>
            </span>
          )
        })}
      </div>

    </StyledContainer>
  );
}
