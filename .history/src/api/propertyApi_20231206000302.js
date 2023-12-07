import axiosClient from "./axiosClient";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const filterById = async (query) => {
  const id = query.queryKey[1];
  const response = await axiosClient.get("filterByIdAmenity?id=" + id);
  return response.data;
};
