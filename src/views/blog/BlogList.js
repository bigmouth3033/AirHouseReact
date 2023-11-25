import React, { useState } from "react";
import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import "quill-mention";

const modules = {
  toolbar: [
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    [{ font: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ size: ["12", "18"] }],
    [{ list: "order" }, { list: "bullet" }, { indent: "-1" }, { indent: "1" }],
    ["link", "image", "video"],
  ],
};

export default function BlogList() {
  const [value, setValue] = useState("");
  return (
    <>
      <ReactQuill
        theme="snow"
        placeholder="Write today blog..."
        value={value}
        onChange={setValue}
        modules={modules}
        style={{ height: "40vh" }}
      />
      <div>{value}</div>
      <div dangerouslySetInnerHTML={{ __html: value }} />
    </>
  );
}
