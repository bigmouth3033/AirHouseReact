import axiosClient from "./axiosClient";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

const getMessage = async (query) => {
  const user1 = query.queryKey[1];
  const user2 = query.queryKey[2];

  let response = await axiosClient.get("getMessage", {
    params: { user1: user1, user2: user2 },
  });

  return response.data;
};
export const GetMessageQuery = (user1, user2) => {
  const messageQuery = useQuery({
    queryKey: ["message", user1, user2],
    queryFn: getMessage,
  });

  return messageQuery;
};

const sendMessage = async (payload) => {
  let response = await axiosClient.get("sendMessage", {
    params: { user1: payload.user1, user2: payload.user2, message: payload.message },
  });
  return response.data;
};

const getAllUser = async (payload) => {
  let response = await axiosClient.get("getAllUser", {
    params: { email: payload },
  });

  return response.data;
};
