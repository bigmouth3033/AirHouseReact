import { CreateComment } from "api/commentApi";
import React, { useRef } from "react";

const Comment = () => {
  const comment = useRef();
  const property_id = 1940;
  const createComment = CreateComment();
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
    alert(comment.current.value);
  };
  return (
    <div>
      <input ref={comment} type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Comment;
