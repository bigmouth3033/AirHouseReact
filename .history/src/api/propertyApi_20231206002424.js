import React from "react";
import axiosClient from "./axiosClient";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const filterById = async (query) => {
  const id = query.queryKey[1];
  const response = await axiosClient.get("filterByIdProperty?id=" + id);
  return response.data;
};
export const PropertyQueryId = (id) => {
  const propertyQuery = useQuery({
    queryKey: ["amenity", id],
    queryFn: filterById,
  });

  return propertyQuery;
};
