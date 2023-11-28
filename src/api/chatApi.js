import axiosClient from "./axiosClient";

const sendMessage = async (payload) => {
  const response = await axiosClient.post("sendMessage");
  return response.data;
};



