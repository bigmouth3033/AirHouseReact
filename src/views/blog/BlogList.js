import React from "react";
import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.css";

const StyledTable = styled.div`
  color: red;

  &.colspan-2 {
    grid-column: span 2;
  }
`;

export default function BlogList() {
  return (
    <StyledTable>
      <table className="table table-hover table-striped text-center">
        <thead>
          <tr>
            <td>
              <b>ID</b>
            </td>
            <td>
              <b>Title</b>
            </td>
            <td>
              <b>Created Date</b>
            </td>
            <td colSpan={2}>
              <b>Action</b>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>hello</td>
            <td>hey</td>
            <td>heyheyhey</td>
            <td>
              <button className="btn btn-secondary ">Update</button>
            </td>
            <td >
              <button className="btn btn-danger">Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </StyledTable>
  );
}
