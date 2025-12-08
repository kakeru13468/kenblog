import { motion } from 'motion/react';

export function PathMorphingExample() {
  const path1 = "M0,30 C50,50 100,10 150,30 C175,40 200,20 200,30 L200,60 L0,60 Z";
  const path2 = "M0,20 C50,40 100,0 150,20 C175,30 200,10 200,20 L200,60 L0,60 Z";
  const path3 = "M0,30 C50,50 100,10 150,30 C175,40 200,20 200,30 L200,60 L0,60 Z";

  return (
    <div className="h-full flex items-center justify-center">
      <svg
        className="w-full h-24"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ d: path1 }}
          animate={{
            d: [path1, path2, path3],
          }}
          fill="rgb(6, 182, 212)"
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </svg>
    </div>
  );
}

