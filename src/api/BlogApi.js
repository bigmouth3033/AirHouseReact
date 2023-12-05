import axiosClient from "./axiosClient";
import { useQuery } from "@tanstack/react-query";
import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

export const uploadImage = async (payload) => {
  const response = await axiosClient.post("blog/uploadImage", payload);
  return response.data;
};

export const UploadImageMutation = () => {
  const uploadMutation = useMutation({
    mutationFn: uploadImage,
  });

  return uploadMutation;
};
