import { motion } from 'motion/react';

export function CardHoverExample() {
  return (
    <div className="h-full flex items-center justify-center">
      <motion.div
        whileHover={{
          scale: 1.05,
        }}
        className="w-32 h-32 bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-2xl p-6 cursor-pointer group relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-linear-to-br from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"
        />
        <div className="relative z-10">
          <div className="w-8 h-8 bg-cyan-600 dark:bg-neutral-700ㄤ rounded-lg mb-2" />
          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded w-16 mb-1" />
          <div className="h-2 bg-neutral-200 dark:bg-neutral-700 rounded w-12" />
        </div>
      </motion.div>
    </div>
  );
}

