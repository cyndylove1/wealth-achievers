import React, { useState } from "react";
import { FiArrowUpRight, FiArrowRight } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

interface CustomButtonProps {
  text: string;
  className?: string;
  bgColor?: string;
  spanBgColor?: string;
  iconColor?: string;
  onClick?: () => void;
}

const Button: React.FC<CustomButtonProps> = ({
  text,
  bgColor = "bg-[#0DA9A4]",
  spanBgColor = "bg-[#F5A623]",
  iconColor = "text-[#153B5E]",
  onClick,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${bgColor} px-6 py-3 font-semibold text-sm tracking-wide flex items-center gap-3 shadow-md transition-colors duration-300 hover:shadow-lg ${className}`}
    >
      <span className="whitespace-nowrap">{text}</span>

      <motion.span
        animate={{ scale: isHovered ? 1.1 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`${spanBgColor} ${iconColor} w-7 h-7 flex items-center justify-center overflow-hidden shrink-0`}
      >
        <AnimatePresence mode="wait">
          {isHovered ? (
            <motion.div
              key="arrow-right"
              initial={{ x: -15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 15, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <FiArrowRight size={18} />
            </motion.div>
          ) : (
            <motion.div
              key="arrow-up"
              initial={{ x: 15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -15, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <FiArrowUpRight size={18} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.button>
  );
};

export default Button;
