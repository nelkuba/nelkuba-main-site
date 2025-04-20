// src/components/About.jsx
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const About = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = `Welcome to Nelkuba — your digital partner for powerful and inspiring web experiences. We are a passionate, diverse, and dedicated team of developers, designers, strategists, and creators committed to delivering value through technology. Our journey began with a simple mission: to create meaningful digital products that solve real-world problems. Since then, we've grown into a multidisciplinary team that brings creativity and technical excellence to every project we touch.`;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) => prev + fullText.charAt(i));
      i++;
      if (i === fullText.length) clearInterval(interval);
    }, 15);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="about"
      className="py-20 px-4 w-full bg-gradient-to-r from-indigo-50 to-blue-100 transition-all duration-500"
    >
      <div className="w-full max-w-5xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold text-blue-700 mb-6">About Us</h2>

        {/* Typewriter effect part */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-gray-800 text-lg mb-8 font-mono min-h-[150px] whitespace-pre-wrap"
        >
          {displayText}
        </motion.p>
      </div>
    </section>
  );
};

export default About;
