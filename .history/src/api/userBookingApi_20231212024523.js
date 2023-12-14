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

const readBooking = async () => {
  const response = await axiosClient.get("readBooking");
  return response.data;
};
export const UserReadBooking = () => {
  const amenityQuery = useQuery({
    queryKey: ["booking"],
    queryFn: readBooking,
  });

  return amenityQuery;
};
