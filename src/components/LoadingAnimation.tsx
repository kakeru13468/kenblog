import { motion } from 'motion/react';

export function LoadingAnimation() {
  return (
    <div className="fixed inset-0 bg-gradient-to-b from-sky-100 to-blue-50 overflow-hidden">
      {/* Rising water container */}
      <motion.div
        className="absolute bottom-0 left-0 right-0"
        initial={{ height: '0%' }}
        animate={{ height: '100%' }}
        transition={{
          duration: 2.5,
          ease: [0.45, 0.05, 0.55, 0.95],
        }}
      >
        {/* Base water color */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-600 via-blue-500 to-blue-400" />
        
        {/* Animated wave layers */}
        <motion.div
          className="absolute inset-x-0 top-0 h-40"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(59, 130, 246, 0.5) 0%, transparent 70%)',
          }}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />

        {/* Wave 1 - Large waves */}
        <svg
          className="absolute top-0 left-0 w-full h-32"
          style={{ transform: 'translateY(-50%)' }}
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z"
            fill="rgba(96, 165, 250, 0.6)"
            animate={{
              d: [
                "M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z",
                "M0,40 C200,80 400,0 600,40 C800,80 1000,0 1200,40 L1200,120 L0,120 Z",
                "M0,60 C200,100 400,20 600,60 C800,100 1000,20 1200,60 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </svg>

        {/* Wave 2 - Medium waves */}
        <svg
          className="absolute top-0 left-0 w-full h-32"
          style={{ transform: 'translateY(-50%)' }}
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,80 C300,120 500,40 600,80 C700,120 900,40 1200,80 L1200,120 L0,120 Z"
            fill="rgba(147, 197, 253, 0.5)"
            animate={{
              d: [
                "M0,80 C300,120 500,40 600,80 C700,120 900,40 1200,80 L1200,120 L0,120 Z",
                "M0,60 C300,100 500,20 600,60 C700,100 900,20 1200,60 L1200,120 L0,120 Z",
                "M0,80 C300,120 500,40 600,80 C700,120 900,40 1200,80 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.3,
            }}
          />
        </svg>

        {/* Wave 3 - Small waves */}
        <svg
          className="absolute top-0 left-0 w-full h-32"
          style={{ transform: 'translateY(-50%)' }}
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
          xmlns="http://www.w3.org/2000/svg"
        >
          <motion.path
            d="M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z"
            fill="rgba(191, 219, 254, 0.4)"
            animate={{
              d: [
                "M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z",
                "M0,50 C250,90 450,10 600,50 C750,90 950,10 1200,50 L1200,120 L0,120 Z",
                "M0,70 C250,110 450,30 600,70 C750,110 950,30 1200,70 L1200,120 L0,120 Z",
              ],
            }}
            transition={{
              duration: 2.2,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 0.6,
            }}
          />
        </svg>
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-center"
        >
          <motion.h2
            className="mb-4"
            animate={{
              color: ['#0369a1', '#0369a1', '#ffffff'],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.5, 1],
            }}
          >
            Welcome
          </motion.h2>
          <motion.p
            animate={{
              color: ['#0c4a6e', '#0c4a6e', '#e0f2fe'],
            }}
            transition={{
              duration: 2.5,
              times: [0, 0.5, 1],
            }}
          >
            Riding the waves...
          </motion.p>
        </motion.div>
      </div>

      {/* Floating bubbles */}
      {[...Array(12)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            width: `${Math.random() * 10 + 5}px`,
            height: `${Math.random() * 10 + 5}px`,
            left: `${Math.random() * 100}%`,
            bottom: 0,
            background: 'rgba(255, 255, 255, 0.3)',
          }}
          animate={{
            y: ['0vh', '-110vh'],
            x: [0, (Math.random() - 0.5) * 100],
            opacity: [0, 0.8, 0],
            scale: [0.5, 1.2, 0.8],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: 'easeOut',
          }}
        />
      ))}
    </div>
  );
}

