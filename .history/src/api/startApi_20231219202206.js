import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";
//create start
const createStart = async (payload) => {
  const response = await axiosClient.post("createStart", payload);
  return response.data;
};

export const CreateStart = () => {
  const createStartVote = useMutation({
    mutationFn: createStart,
  });
  return createStartVote;
};
//read start
const readStart = async (query) => {
  const id = query.queryKey[1];
  const response = await axiosClient.get("/readStart?property_id=" + id);
  return response.data;
};

export const ReadStart = (property_id) => {
  const readStartVote = useQuery({
    queryKey: ["start", property_id],
    queryFn: readStart,
    retry: 1,
  });
  return readStartVote;
};

//read average start
const readAverageStart = async (query) => {
  const property_id = query.queryKey[1];
  const response = await axiosClient.get("/readAverageStart" + property_id);
  return response.data;
};
