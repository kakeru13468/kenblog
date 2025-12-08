import { motion, AnimatePresence } from 'motion/react';
import { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

export function AnimatePresenceExample() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { id: 'item1', label: 'Option 1' },
    { id: 'item2', label: 'Option 2' },
    { id: 'item3', label: 'Option 3' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="h-full flex items-center justify-center">
      <div ref={dropdownRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2 rounded-xl relative flex items-center gap-2 bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 text-neutral-600 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors"
        >
          <span>Dropdown</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
          {isOpen && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-cyan-50 dark:bg-cyan-950/50 rounded-xl -z-10"
              transition={{ type: 'spring', duration: 0.5 }}
            />
          )}
        </button>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-xl shadow-lg overflow-hidden z-50"
            >
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => setIsOpen(false)}
                  className="w-full px-4 py-3 text-left text-sm text-neutral-600 dark:text-neutral-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/50 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

