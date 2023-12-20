import { CreateComment, ReadComment } from "api/commentApi";
import Loading from "components/Loading";
import { forEach } from "core-js/core/array";
import React, { useRef } from "react";

const Comment = () => {
  const comment = useRef();
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
      formData.append("comment", comment.current.value.trim());
      createComment.mutate(formData, {
        onSuccess: () => {
          alert("success");
        },
      });
    }
  };
  return (
    <div>
      <input ref={comment} type="text" />
      <button onClick={handleSubmit}>Submit</button>
      {readCommentPage.isSuccess && (
        
          {readCommentPage.data.data.map((comment) => (
            <div key={comment.id}>{comment.comment}</div>
          ))}
 
      )}
    </div>
  );
};

export default Comment;
