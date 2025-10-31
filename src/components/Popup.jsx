"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Popup({ isOpen, onClose, children }) {

  // Schließen bei ESC-Taste
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Background Overlay */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Popup Content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
            <div className="relative bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 max-w-lg w-full">
              
              {/* Close Button */}
              <button
              type="button"
                onClick={onClose}
                className="absolute top-2 right-2 text-gray-500 hover:text-white w-6 h-6 flex items-center justify-center transition"
              >
                ✕
              </button>

              {children}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
