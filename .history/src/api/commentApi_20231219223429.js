const { useMutation } = require("@tanstack/react-query");
const { default: axiosClient } = require("./axiosClient");
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
