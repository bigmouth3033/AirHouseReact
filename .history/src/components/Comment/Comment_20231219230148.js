import { CreateComment } from "api/commentApi";
import React, { useRef } from "react";

const Comment = () => {
  const comment = useRef();
  const property_id = 1940;
  const handleSubmit = () => {
    if (comment.current && comment.current.value.trim() !== "") {
      const formData = new FormData();
      const createComment = CreateComment();
      formData.append("property_id", property_id);
      createComment.mutate();
      //  alert(comment.current.value);
    }
    alert("cl");
  };
  return (
    <div>
      <input ref={comment} type="text" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
};

export default Comment;
