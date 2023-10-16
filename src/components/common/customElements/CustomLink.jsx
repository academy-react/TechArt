import React from "react";
import { Link } from "react-router-dom";

const CustomLink = ({ message, to }) => {
  return (
    <>
      <div className="text-sm">
        <Link
          to={to}
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {message}
        </Link>
      </div>
    </>
  );
};

export { CustomLink };
