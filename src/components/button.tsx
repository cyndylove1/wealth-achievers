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
  bgColor = "bg-[#32b291]", // Matches Insurea green
  spanBgColor = "bg-white",
  iconColor = "text-[#32b291]",
  onClick,
  className,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.button
      onClick={onClick}
      // Triggering hover state for the entire button area
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.05 }} // Scales the entire button on hover
      whileTap={{ scale: 0.98 }} // Slight shrink when clicked
      className={`${bgColor} px-8 py-2 font-bold rounded-lg flex items-center justify-between gap-4 shadow-lg transition-colors duration-300 hover:shadow-xl ${className}`}
    >
      <span className="whitespace-nowrap">{text}</span>

      <motion.span
        // Inner circle scales independently when the parent button is hovered
        animate={{ scale: isHovered ? 1.15 : 1 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        className={`${spanBgColor} ${iconColor} w-7 h-7 flex items-center justify-center rounded-full overflow-hidden shrink-0`}
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
              <FiArrowRight size={20} />
            </motion.div>
          ) : (
            <motion.div
              key="arrow-up"
              initial={{ x: 15, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: -15, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
            >
              <FiArrowUpRight size={20} />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.span>
    </motion.button>
  );
};

export default Button;
