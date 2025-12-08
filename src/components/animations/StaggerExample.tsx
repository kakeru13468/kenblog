import { motion } from 'motion/react';
import { useState } from 'react';

export function StaggerExample() {
  const [key, setKey] = useState(0);

  const items = [1, 2, 3, 4, 5];

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="flex gap-2">
        {items.map((item, index) => (
          <motion.div
            key={`${key}-${item}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="w-12 h-12 bg-cyan-600 dark:bg-cyan-500 rounded-xl"
          />
        ))}
      </div>
      <button
        onClick={() => setKey((k) => k + 1)}
        className="px-4 py-2 bg-cyan-600 dark:bg-cyan-500 text-white rounded-lg hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors text-sm"
      >
        Replay
      </button>
    </div>
  );
}

