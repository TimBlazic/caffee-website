"use client";

import { useContactModalStore } from "@/lib/zustand/stores";
import { motion } from "motion/react";

export default function PhysicsContactButtons() {
  const toggleModal = useContactModalStore((state) => state.toggleModal);

  const coffeeButtons = [
    { text: "Fresh Coffee", delay: 0.1 },
    { text: "Visit Today", delay: 0.2 },
    { text: "Book Table", delay: 0.3 },
    { text: "Try Pastries", delay: 0.4 },
  ];

  return (
    <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-4 p-8">
      {coffeeButtons.map((button) => (
        <motion.button
          key={button.text}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{
            duration: 0.6,
            delay: button.delay,
            ease: [0.22, 1, 0.36, 1],
          }}
          whileHover={{
            scale: 1.05,
            backgroundColor: "#3C2415",
            color: "#F7E7CE",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={toggleModal}
          className="px-6 py-3 bg-[#D2B48C] text-[#3C2415] font-semibold text-lg rounded-full border-2 border-[#3C2415] hover:bg-[#3C2415] hover:text-[#F7E7CE] transition-all duration-300 cursor-pointer shadow-lg"
        >
          {button.text}
        </motion.button>
      ))}

      {/* Coffee emojis */}
      <motion.div
        initial={{ opacity: 0, rotate: -180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="absolute top-4 right-4 text-3xl"
      >
        ☕
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 180 }}
        animate={{ opacity: 1, rotate: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="absolute bottom-4 left-4 text-3xl"
      >
        🥐
      </motion.div>
    </div>
  );
}
