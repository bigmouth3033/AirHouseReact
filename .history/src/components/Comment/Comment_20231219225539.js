import React, { useRef } from "react";

const Comment = () => {
  const comment = useRef();
  const handleSubmit = () => {
    if (comment.current && comment.current.value.trim() !== "") {
      alert(comment.current.value);
    }
  };
  return (
    <div>
      <input ref={comment} type="text" />
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default Comment;
