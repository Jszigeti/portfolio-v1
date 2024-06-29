"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Button from "./Button";

export default function Collapse({
  children,
  title,
  className,
}: {
  children: React.ReactNode;
  title: string;
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((isOpen) => !isOpen);
  };
  return (
    <div className={className}>
      <div>
        <button
          onClick={toggleCollapse}
          className={`${
            isOpen && "bg-accent text-primary scale-105"
          } hover:scale-105 active:scale-95 transform transition-transform duration-150 border-2 border-accent whitespace-nowrap h-16 rounded-md px-8 text-foreground text-xl md:text-3xl font-bold w-full flex items-center justify-between hover:bg-accent hover:text-primary shadow-lg`}
        >
          <p>{title}</p>
          <p className="text-3xl font-bold">{isOpen ? "-" : "+"}</p>
        </button>
      </div>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0 }}
        className="overflow-hidden"
      >
        <div>{children}</div>
      </motion.div>
    </div>
  );
}
