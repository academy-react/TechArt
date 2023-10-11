import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import { signFormVariant } from "../../core/utils/auth";

const FormWrapper = ({ children }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          className="bg-white pb-8 pt-1 px-4 shadow-xl sm:rounded-lg sm:px-10 
          md:[--x-from:300px] md:[--scale-from:1]
          md:[--x-to:0px] md:[--scale-to:1]
          md:[--x-exit:-300px]
          "
          variants={signFormVariant()}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export { FormWrapper };
