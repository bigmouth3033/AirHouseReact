import React, { useRef } from "react";

const Comment = () => {
  const comment = useRef;

  return (
    <div>
      <input ref={comment} type="text" />
      <button></button>
    </div>
  );
};

export default Comment;
