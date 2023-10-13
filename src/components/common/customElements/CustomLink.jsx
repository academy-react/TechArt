import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ message, to }) => {
  return (
    <>
      <Link to={to}>
        <div className="text-sm">
          <a
            href="#"
            className="font-medium text-indigo-600 hover:text-indigo-500"
          >
            {message}
          </a>
        </div>
      </Link>
    </>
  );
};

export { CustomLink };
