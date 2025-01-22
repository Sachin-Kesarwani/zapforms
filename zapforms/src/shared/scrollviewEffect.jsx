// components/ScrollEffectComponent.jsx
"use client";
import React from 'react';
import { motion, useInView } from 'framer-motion';

const ScrollEffectComponent = ({children}) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: inView ? 1 : 0, x: inView ? 0 : -100 }}
      transition={{ duration: 1 }}
      className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-4 py-10"
    >
    {children}
    </motion.div>
  );
};

export default ScrollEffectComponent;
