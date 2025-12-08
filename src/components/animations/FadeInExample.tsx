import { motion } from 'motion/react';
import { useState } from 'react';

export function FadeInExample() {
  const [key, setKey] = useState(0);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <motion.div
        key={key}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-20 h-20 bg-cyan-600 dark:bg-cyan-500 rounded-2xl"
      />
      <button
        onClick={() => setKey((k) => k + 1)}
        className="px-4 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors text-sm"
      >
        Replay
      </button>
    </div>
  );
}

