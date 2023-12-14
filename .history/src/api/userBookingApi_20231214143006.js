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

const createSuccessBooking = async (payload) => {
  const response = await axiosClient.post("successBooking", payload);
  return response.data;
};

export const CreateSuccessBookingMutation = () => {
  const successMutation = useMutation({
    mutationFn: createSuccessBooking,
    onSuccess: () => {},
  });
  return successMutation;
};
//reading
const readSuccess = async (query) => {
  const id = query.queryKey[1];
  const pics = query.queryKey[2];
  const rs = query.queryKey[3];
  const response = await axiosClient.get(
    "successBooking?payment_intent=" +
      id +
      "&payment_intent_client_secret=" +
      pics +
      "&redirect_status=" +
      rs
  );
  return response.data;
};
export const UserReadSuccess = (payment_id, pics, rs) => {
  const paymentSuccessQuery = useQuery({
    queryKey: ["paymentBooking", payment_id, pics, rs],
    queryFn: readSuccess,
    retry: 1,
  });

  return paymentSuccessQuery;
};
