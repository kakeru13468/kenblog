import { motion } from 'motion/react';
import { useState } from 'react';

export function LayoutAnimationExample() {
  const [active, setActive] = useState(0);

  return (
    <div className="h-full flex flex-col items-center justify-center gap-4">
      <div className="flex gap-2 relative bg-neutral-100 dark:bg-neutral-800 p-1 rounded-xl">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            onClick={() => setActive(index)}
            className={`relative px-4 py-2 rounded-lg text-sm transition-colors z-10 ${
              active === index
                ? 'text-white'
                : 'text-neutral-600 dark:text-neutral-400'
            }`}
          >
            {index === 0 ? 'Tab 1' : index === 1 ? 'Tab 2' : 'Tab 3'}
            {active === index && (
              <motion.div
                layoutId="activeTab"
                className="absolute inset-0 bg-cyan-600 dark:bg-cyan-500 rounded-lg -z-10"
                transition={{ type: 'spring', duration: 0.5 }}
              />
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

