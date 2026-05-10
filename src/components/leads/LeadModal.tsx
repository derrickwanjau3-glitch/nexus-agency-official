"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import LeadForm from "./LeadForm";
import { useEffect, useState } from "react";

export default function LeadModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsOpen(true);
    window.addEventListener("open-lead-modal", handleOpen);
    return () => window.removeEventListener("open-lead-modal", handleOpen);
  }, []);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-2xl glass p-8 md:p-12 rounded-[40px] border border-white/10 shadow-2xl overflow-hidden"
          >
            {/* Background Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/20 rounded-full blur-[100px] -z-10" />
            
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors"
            >
              <X size={24} />
            </button>

            <div className="text-center mb-10">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 tracking-tight">
                Start Your <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Journey</span>
              </h2>
              <p className="text-gray-400">
                Fill out the details below and our AI team will contact you instantly.
              </p>
            </div>

            <LeadForm />
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
