import { motion } from "framer-motion";

function AuthLayout({ children }) {
  return (
    <>
      <motion.div
        className="md:grid lg:grid-cols-5 md:grid-cols-6 md:gap-6"
        dir="ltr"
        initial="hidden"
        animate="visible"
        exit="exit"
        whileHover="hover"
      >
        {children}
      </motion.div>
    </>
  );
}
export { AuthLayout };
