import { motion } from 'motion/react';
import { useState } from 'react';
import { Moon, Sun } from 'lucide-react';

export function ColorInterpolationExample() {
  const [activeTab, setActiveTab] = useState('home');
  const [isDark, setIsDark] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
  ];

  return (
    <motion.div
      className="h-full flex flex-col rounded-xl overflow-hidden"
      animate={{
        backgroundColor: isDark ? 'rgba(23, 23, 23, 0.8)' : 'rgba(255, 255, 255, 0.8)',
        borderColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(6, 182, 212, 0.2)',
      }}
      style={{
        backdropFilter: 'blur(12px)',
        borderBottom: '1px solid',
      }}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex gap-2">
          {navItems.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="px-4 py-2 rounded-xl relative text-sm"
              animate={{
                color: activeTab === item.id
                  ? isDark ? '#67e8f9' : '#0891b2'
                  : isDark ? '#9ca3af' : '#6b7280',
              }}
              transition={{ duration: 0.3 }}
            >
              {item.label}
              {activeTab === item.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 rounded-xl -z-10"
                  animate={{
                    backgroundColor: isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(207, 250, 254, 1)',
                  }}
                  transition={{ type: 'spring', duration: 0.5 }}
                />
              )}
            </motion.button>
          ))}
        </div>

        <motion.button
          onClick={() => setIsDark(!isDark)}
          className="w-10 h-10 rounded-xl flex items-center justify-center transition-colors"
          animate={{
            backgroundColor: isDark ? 'rgba(6, 182, 212, 0.1)' : 'rgba(207, 250, 254, 1)',
            color: isDark ? '#67e8f9' : '#0891b2',
          }}
          whileHover={{
            backgroundColor: isDark ? 'rgba(6, 182, 212, 0.2)' : 'rgba(207, 250, 254, 0.8)',
          }}
          transition={{ duration: 0.3 }}
          aria-label="Toggle theme"
        >
          {isDark ? (
            <Sun className="w-5 h-5" />
          ) : (
            <Moon className="w-5 h-5" />
          )}
        </motion.button>
      </div>
    </motion.div>
  );
}

