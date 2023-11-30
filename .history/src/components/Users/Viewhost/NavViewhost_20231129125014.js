import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const NavViewhost = () => {
  return (
    <div>
      <h2>Title</h2>
      <div>
        <span>
          <FontAwesomeIcon icon={faArrowUpFromBracket} />
        </span>
        <span>Share</span>
      </div>
      <div></div>
    </div>
  );
};

export default NavViewhost;
