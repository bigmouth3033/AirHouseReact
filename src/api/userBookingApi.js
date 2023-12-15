import axiosClient from "./axiosClient";
import { useMutation } from "@tanstack/react-query";
import { useQuery } from "@tanstack/react-query";

const createBooking = async (payload) => {
  const response = await axiosClient.post("user-booking", payload);
  return response.data;
};

export const CreateBookingMutation = () => {
  const createMutation = useMutation({
    mutationFn: createBooking,
  });
  return createMutation;
};

export const getBookingByUser = async (payload) => {
  // const page = query.queryKey[3];
  const response = await axiosClient.get("getBookingByUser", payload);
  return response.data;
};

export const StatusBookingQuery = (userTitle) => {
  const titleQuery = useQuery({
    queryKey: ["booking", "title", userTitle,2],
    queryFn: getBookingByUser,
    keepPreviousData: true,
    retry: 1,
  });
  return titleQuery;
};

export const fethCurrentPage = async () =>{
  const response = await axiosClient.get('readCurrentPage');
  return response.data;
}

export const CurrentPagebyUserQuery = (userTitle,page) => {
  const titleQuery = useQuery({
    queryKey: ["booking", "title", userTitle,page],
    queryFn: fethCurrentPage,
    keepPreviousData: true,
    retry: 1,
  });
  return titleQuery;
};