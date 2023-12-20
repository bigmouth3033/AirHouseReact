import { useQueryClient } from "@tanstack/react-query";
import { CreateComment, ReadComment } from "api/commentApi";
import Loading from "components/Loading";
import React, { useRef, useState } from "react";

const Comment = () => {
  const comment = useRef();
  const queryClient = useQueryClient();
  const [page, setPage] = useState(1);
  const property_id = 1940;
  const createComment = CreateComment();
  const readCommentPage = ReadComment(property_id);
  if (readCommentPage.isLoading) {
    <Loading />;
  }
  const handleSubmit = () => {
    const formData = new FormData();
    if (comment.current && comment.current.value.trim() !== "") {
      formData.append("property_id", property_id);
      formData.append("page", page);
      formData.append("comment", comment.current.value.trim());
      createComment.mutate(formData, {
        onSuccess: () => {
          queryClient.invalidateQueries({
            queryKey: ["commentPage", property_id],
          });
          alert("success");
        },
      });
    }
  };
  const handleAdd = () => {
    const currentPage = page + 1;
    setPage(currentPage);
  };
  return (
    <div>
      <input ref={comment} type="text" />
      <button onClick={handleSubmit}>Submit</button>
      {readCommentPage.isSuccess && (
        <div>
          {readCommentPage.data.data.map((comment) => (
            <div key={comment.id}>{comment.comment}</div>
          ))}
        </div>
      )}
      <button onClick={handleAdd}>Add page</button>
    </div>
  );
};

export default Comment;
