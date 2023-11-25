import React, { useState } from "react";

import "react-quill/dist/quill.snow.css";
import ReactQuill, { Quill } from "react-quill";
import "quill-mention";

// const modules = {
//   toolbar: [
//     [{ header: [1, 2, 3, 4, 5, 6, false] }],
//     [{ font: [] }],
//     ["bold", "italic", "underline", "strike", "blockquote"],
//     [{ size: ["12px", "14px", "16px", "18px", "20px"] }],
//     [{ list: "order" }, { list: "bullet" }, { indent: "-1" }, { indent: "1" }],
//     ["link", "image", "video"],
//   ],
// };

// export default function BlogList() {
//   const [value, setValue] = useState("");
//   return (
//     <>
//       <ReactQuill
//         theme="snow"
//         placeholder="Write today blog..."
//         value={value}
//         onChange={setValue}
//         modules={modules}
//         style={{ height: "40vh" }}
//       />
//       {/* <div>{value}</div> */}
//       <div dangerouslySetInnerHTML={{ __html: value }} />
//     </>
//   );
// }

var Font = Quill.import("formats/font");
// We do not add Aref Ruqaa since it is the default
Font.whitelist = [
  "arial",
  "roboto",
  "raleway",
  "lato",
  "rubik",
  "Arial Narrow",
  "Verdana",
  "Tahoma",
  "Century Gothic",
  "Calibri",
  "Garamond",
  "Baskerville",
  "Trebuchet MS",
  "Futura",
  "Droid Sans",
  "Helvetica",
  "Times New Roman",
  "Georgia",
  "Courier New",
  "Open Sans",
  "Montserrat",
  "Source Sans Pro",
  "Poppins",
  "Playfair Display",
];
Quill.register(Font, true);

var Size = Quill.import("formats/size");
Size.whitelist = [
  "9",
  "10",
  "11",
  "12",
  "14",
  "16",
  "18",
  "20",
  "22",
  "24",
  "26",
  "28",
  "36",
  "48",
  "72",
];
Quill.register(Size, true);

const Parchment = Quill.import("parchment");
const boxAttributor = new Parchment.Attributor.Class("box", "line", {
  scope: Parchment.Scope.INLINE,
  whitelist: ["solid", "double", "dotted"],
});
Quill.register(boxAttributor);

const atValues = [
  { id: 0, value: "barcode" },
  { id: 1, value: "customername" },
  { id: 2, value: "licensenumber" },
  { id: 3, value: "netweight" },
  { id: 4, value: "packageid" },
  { id: 5, value: "price" },
  { id: 6, value: "productname" },
  { id: 7, value: "supplierid" },
];

const CustomToolbar = () => (
  <div id="toolbar">
    <button className="ql-bold" />
    <button className="ql-underline" />
    <button className="ql-italic" />
    <select className="ql-font">
      {Font.whitelist.map((font, index) => (
        <option value={font} selected={!index}>
          {font[0].toUpperCase() + font.substr(1)}
        </option>
      ))}
    </select>
    <select className="ql-size">
      {Size.whitelist.map((size, index) => (
        <option value={size} selected={size.includes("12")}>
          {size}
        </option>
      ))}
    </select>
    <button className="ql-align" value="" />
    <button className="ql-align" value="center" />
    <button className="ql-align" value="right" />
    {/* <select className="ql-box">
      <option selected>None</option>
      <option value="solid">Solid</option>
    </select> */}
    <button className="ql-indent" value="-1" />
    <button className="ql-indent" value="+1" />
    <button className="ql-link" />
    <button className="ql-image" />
    <button className="ql-video" />
  </div>
);

Bloglist.modules = {
  toolbar: {
    container: "#toolbar",
  },
  mention: {
    allowedChars: /^[A-Za-z\sÅÄÖåäö]*$/,
    mentionDenotationChars: ["@", "#"],
    source: function (searchTerm, renderList, mentionChar) {
      if (searchTerm.length === 0) {
        renderList(atValues, searchTerm);
      } else {
        const matches = [];
        for (let i = 0; i < atValues.length; i++)
          if (
            ~atValues[i].value.toLowerCase().indexOf(searchTerm.toLowerCase())
          )
            matches.push(atValues[i]);
        renderList(matches, searchTerm);
      }
    },
  },
};

Bloglist.formats = [
  "bold",
  "underline",
  "italic",
  "font",
  "size",
  "align",
  "list",
  "indent",
  "box",
  "mention",
  "link",
  "image",
  "video",
];

export default function Bloglist() {
  const [value, setValue] = useState("");

  return (
    <div className="text-editor">
      <CustomToolbar />
      <ReactQuill
        theme="snow"
        modules={Bloglist.modules}
        formats={Bloglist.formats}
        value={value}
        onChange={setValue}
        placeholder="Create today blog \^0^/"
        style={{ height: "15rem" }}
      />
      <div className="ql-editor" dangerouslySetInnerHTML={{ __html: value }} />
      <button
        onClick={() => {
          console.log(value);
        }}
      >
        Submit
      </button>
    </div>
  );
}
