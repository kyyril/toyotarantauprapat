"use client";

import { motion } from "framer-motion";
import ContactDialog from "./FormContact";

const FloatingContact = () => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 20,
        delay: 0.5,
      }}
      className="fixed bottom-14 left-4 z-[100]"
    >
      <ContactDialog />
    </motion.div>
  );
};

export default FloatingContact;
