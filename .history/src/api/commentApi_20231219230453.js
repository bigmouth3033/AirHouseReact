import axiosClient from "./axiosClient";

const { useMutation, useQuery } = require("@tanstack/react-query");

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
    queryKey: ["property_id", property_id],
    queryFn: readComments,
    retry: 1,
  });
  return readCommentPage;
};
