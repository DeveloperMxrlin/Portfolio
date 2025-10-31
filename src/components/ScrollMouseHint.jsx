'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function ScrollMouseHint({ currentIndex, totalSections, onClick }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const timer = setTimeout(() => setVisible(true), 5000);
    return () => clearTimeout(timer);
  }, [currentIndex]);

  const isLast = currentIndex === totalSections - 1;

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          key={currentIndex}
          className="fixed bottom-8 right-8 flex flex-col items-center cursor-pointer z-50"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          onClick={onClick}
        >
          {!isLast && (
            <div className="w-6 h-10 rounded-full border-2 border-gray-400 flex justify-center items-start p-1">
              <motion.div
                className="w-2 h-2 rounded-full bg-gray-400"
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          )}

          <span className="mt-2 text-gray-400 text-sm select-none">
            {!isLast && 'Scroll'}
          </span>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
