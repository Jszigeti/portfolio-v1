"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import CollapseButton from "./CollapseButton";

export default function Collapse({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  // State managing the opening and closing of the collapse
  const [isOpen, setIsOpen] = useState(false);

  // Collapse opening and closing function
  const toggleCollapse = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className={className}>
      <div>
        {/* Collapse title and opening button */}
        <button
          onClick={toggleCollapse}
          className={`${
            isOpen && "bg-accent text-primary scale-105"
          } hover:scale-105 active:scale-95 transform transition-all duration-300 border-2 border-accent whitespace-nowrap h-16 rounded-md px-8 text-accent text-xl md:text-3xl font-bold w-full flex items-center justify-between shadow-lg`}
        >
          <p>{title}</p>
          <CollapseButton isOpen={isOpen} />
        </button>
      </div>
      {/* Collapse animation */}
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        {/* Collapse content */}
        {children}
      </motion.div>
    </div>
  );
}
