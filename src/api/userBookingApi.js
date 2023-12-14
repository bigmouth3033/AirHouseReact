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

export const getBookingByUser = async (query) => {
  const page = query.queryKey[3];

  const response = await axiosClient.get("getBookingByUser", { params: { page: page } });
  return response.data;
};

export const StatusBookingQuery = (userTitle) => {
  const titleQuery = useQuery({
    queryKey: ["booking", "title", userTitle],
    queryFn: getBookingByUser,
    keepPreviousData: true,
    retry: 1,
  });
  return titleQuery;
};
