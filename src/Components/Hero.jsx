// src/components/Hero.jsx

import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600 text-white py-32 px-6 text-center">
      {/* floating shapes or stars can go here later */}
      <div className="max-w-5xl mx-auto z-10 relative">
        {/* Animated Title */}
        <motion.h1
          className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-yellow-300 to-pink-400 animate-gradient drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: 'easeOut' }}
        >
          Welcome to Nelkuba
        </motion.h1>

        {/* Typewriter Text */}
        {/* <motion.p
          className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto font-light font-mono min-h-[200px]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 1 }}
        >
          {typedText}
        </motion.p> */}
      </div>

      {/* Optional soft gradient glow */}
      <div className="absolute top-[-100px] left-1/2 w-[600px] h-[600px] bg-white opacity-10 rounded-full blur-3xl pointer-events-none -translate-x-1/2"></div>
    </header>
  );
};

export default Hero;
