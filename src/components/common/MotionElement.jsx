import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const MotionElement = ({ children, variants }) => {
  return (
    <>
      <AnimatePresence>
        <motion.div
          variants={variants}
          initial="enter"
          animate="show"
          exit="exit"
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
};

export { MotionElement };
