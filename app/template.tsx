"use client";

import { motion } from "framer-motion";

export default function PageTransition({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ ease: "easeInOut", duration: 1 }}
      // exit={{ opacity: 0, transition: { duration: 1 } }}
      // transition={{ duration: 1 }}
      //   className="flex-grow"
    >
      {children}
    </motion.div>
  );
}
