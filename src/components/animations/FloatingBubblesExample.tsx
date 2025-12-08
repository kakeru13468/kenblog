import { motion } from 'motion/react';
import { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

export function FloatingBubblesExample() {
  const [isDark, setIsDark] = useState(false);

  return (
    <motion.div
      className="h-full flex flex-col items-center justify-center gap-4 rounded-xl overflow-hidden"
      animate={{
        backgroundColor: isDark ? '#1e293b' : '#f8fafc',
      }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="relative w-20 h-20 rounded-full flex items-center justify-center cursor-pointer"
        onClick={() => setIsDark(!isDark)}
        animate={{
          backgroundColor: isDark ? '#334155' : '#fbbf24',
        }}
        transition={{ duration: 0.5 }}
      >
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 0 : 360,
            scale: isDark ? 0 : 1,
          }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <Sun className="w-10 h-10 text-yellow-200" />
        </motion.div>
        <motion.div
          initial={false}
          animate={{
            rotate: isDark ? 360 : 0,
            scale: isDark ? 1 : 0,
          }}
          transition={{ duration: 0.5 }}
          className="absolute"
        >
          <Moon className="w-10 h-10 text-slate-200" />
        </motion.div>
      </motion.div>
      <motion.div
        className="text-sm"
        animate={{
          color: isDark ? '#e2e8f0' : '#475569',
          opacity: [0.7, 1, 0.7],
        }}
        transition={{
          color: { duration: 0.5 },
          opacity: {
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          },
        }}
      >
        {isDark ? 'Dark Mode' : 'Light Mode'}
      </motion.div>
    </motion.div>
  );
}

