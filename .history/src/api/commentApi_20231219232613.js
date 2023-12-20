import { useMutation, useQuery } from "@tanstack/react-query";
import axiosClient from "./axiosClient";

//create comment
const createComment = async (payload) => {
  const response = await axiosClient.post("/createComment", payload);
  return response.data;
};

export const CreateComment = () => {
  const CreateCommentRequest = useMutation({
    mutationFn: createComment,
  });
  return CreateCommentRequest;
};

//readcomments
const readComments = async (query) => {
  const property_id = query.queryKey[1];
  const response = await axiosClient.get(
    "/readCommentPage?property_id=" + property_id
  );
  return response.data;
};
export const ReadComment = (property_id) => {
  const readCommentPage = useQuery({
    queryKey: ["commentPage", property_id],
    queryFn: readComments,
    retry: 1,
  });
  return readCommentPage;
};
