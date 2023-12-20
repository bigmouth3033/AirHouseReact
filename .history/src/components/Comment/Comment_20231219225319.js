import React, { useRef } from "react";

const Comment = () => {
  const comment = useRef;
  const handleSubmit = () => {
    if (comment.current.value != "") {
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
