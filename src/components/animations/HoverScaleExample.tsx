import { motion } from 'motion/react';

export function HoverScaleExample() {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        whileHover={{ scale: 1.2 }}
        transition={{ duration: 0.2 }}
        className="w-24 h-24 bg-cyan-600 dark:bg-cyan-500 rounded-2xl cursor-pointer"
      />
    </div>
  );
}

