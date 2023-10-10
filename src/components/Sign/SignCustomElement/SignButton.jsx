import React from "react";
import { motion } from "framer-motion";
import { signFormChildrenVariant } from "../../../core/utils/signFormChildrenVariant";

const SignButton = ({ message }) => {
  return (
    <>
      <motion.div variants={signFormChildrenVariant()}>
        <button
          type="submit"
          className="flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          {message}
        </button>
      </motion.div>
    </>
  );
};

export { SignButton };
