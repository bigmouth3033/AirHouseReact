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

const readBooking = async (query) => {
  const id = query.queryKey[1];
  const response = await axiosClient.get("/readBooking?booking_id=" + id);
  return response.data;
};
export const UserReadBooking = (booking_id) => {
  const bookingQuery = useQuery({
    queryKey: ["booking", booking_id],
    queryFn: readBooking,
    retry: 1,
  });

  return bookingQuery;
};

const createSuccessBooking = async (query) => {
  const transactionID = query.queryKey[1];
  const response = await axiosClient.post(
    "/successBooking?transactionID=" + transactionID
  );
  return response.data;
};

export const readUserBooking = (transactionID) => {
  const successQuery = useQuery({
    queryKey: ["booking", transactionID],
    queryFn: successBooking,
    retry: 1,
  });
  return successQuery;
};
