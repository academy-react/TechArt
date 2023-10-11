import React from "react";
import { motion } from "framer-motion";
import { signFormChildrenVariant } from "../../../core/utils/auth";

const AuthLink = ({ message, handlePageChange, to }) => {
  return (
    <>
      <motion.div className="text-sm" variants={signFormChildrenVariant()}>
        <a
          onClick={() => handlePageChange(to)}
          href="#"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          {message}
        </a>
      </motion.div>
    </>
  );
};

export { AuthLink };
