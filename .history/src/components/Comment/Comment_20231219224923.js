import React, { useRef } from "react";

const Comment = () => {
  const comment = useRef;
  return (
    <div>
      <input ref={comment} type="text" />
    </div>
  );
};

export default Comment;
