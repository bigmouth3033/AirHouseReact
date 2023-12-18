import React, { useEffect, useState } from "react";
import DialogBox from "./DialogBox";
import styled from "styled-components";
import Message from "./Message";
import axiosClient from "api/axiosClient";
import { UserQuery } from "api/userApi";

const StyledBox = styled.div`
  & .containerChat {
    display: grid;
    grid-template-columns: 1fr 3fr;
    height: 100%;
  }
  & .sidebar {
  }
  &.content {
  }
`;

export default function Chat(props) {
  const userQuery = UserQuery();

  const fromEmail = userQuery.data.user.email;
  const [selectedUser, setSelectedUser] = useState(false);
  const [allUser, setAllUser] = useState([]);
  const [newUser, setNewUser] = useState("");

  useEffect(() => {
    getAllUser({ fromEmail });
  }, []);

  const handleUserClick = (item) => {
    setSelectedUser(item);
    // console.log(item);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(allUser)
    const isIncluded = allUser.some((item) => item.to_email == newUser);
    if (!isIncluded) {
      let data = {
        from_email: fromEmail,
        to_email: newUser,
        body: " ",
      };
      console.log(data);
      setAllUser((pre) => [...pre, data]);
    }
  };

  const getAllUser = async (payload) => {
    let response = await axiosClient.get("getAllUser", {
      params: { fromEmail: payload },
    });

    setAllUser(response.data);
    return response.data;
  };

  return (
    <StyledBox>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          type="text"
          value={newUser}
          onChange={(e) => setNewUser(e.target.value)}
        />
      </form>
      <div className="containerChat">
        <div className="sidebar">
          <ul>
            {allUser.map((item, index) => {
              return (
                <li key={index} onClick={() => handleUserClick(item)}>
                  <DialogBox userInfor={item} />
                </li>
              );
            })}
          </ul>
        </div>
        <div className="content">
          {selectedUser && <Message info={selectedUser} />}
        </div>
      </div>
    </StyledBox>
  );
}
