const { useMutation } = require("@tanstack/react-query");
const { default: axiosClient } = require("./axiosClient");

const createComment = async (payload) => {
  const response = await axiosClient.post("/createComment", payload);
  return response.data;
};

export const CreateComment = (query) => {
  const CreateCommentRequest = useMutation({
    mutationFn: createComment,
  });
  return CreateCommentRequest;
};
