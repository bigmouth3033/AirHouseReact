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
    staleTime: 0,
    cacheTime: 0,
    retry: 1,
  });

  return bookingQuery;
};
//payment
const createSuccessBooking = async (payload) => {
  const response = await axiosClient.post("successBooking", payload);

  return response.data;
};

export const CreateSuccessBookingMutation = () => {
  const successMutation = useMutation({
    mutationFn: createSuccessBooking,
  });
  return successMutation;
};
//reading
const readSuccess = async (query) => {
  const id = query.queryKey[1];
  const response = await axiosClient.get("readSuccessBooking", {
    params: { payment_intent: id },
  });
  return response.data;
};
export const UserReadSuccess = (payment_id) => {
  const paymentSuccessQuery = useQuery({
    queryKey: ["paymentBooking", payment_id],
    queryFn: readSuccess,
    cacheTime: 0,
    retry: 1,
  });

  return paymentSuccessQuery;
};
//
const viewAllHostBooking = async (query) => {
  const status = query.queryKey[2];
  const page = query.queryKey[3];

  const response = await axiosClient.get("get-all-bookings-of-host", {
    params: { status: status, page: page },
  });
  return response.data;
};

export const AllHostBookingQuery = (status, page) => {
  const query = useQuery({
    queryKey: ["all", "bookings", status, page],
    queryFn: viewAllHostBooking,
    retry: 1,
  });

  return query;
};
//
const denyBooking = async (payload) => {
  const response = axiosClient.post("deny-booking", payload);
  return (await response).data;
};

export const DenyBookingMutation = () => {
  const mutation = useMutation({
    mutationFn: denyBooking,
  });

  return mutation;
};

const acceptBooking = async (payload) => {
  const response = await axiosClient.post("accept-booking", payload);
  return response.data;
};

export const AcceptBookingMutation = () => {
  const mutation = useMutation({
    mutationFn: acceptBooking,
  });

  return mutation;
};
