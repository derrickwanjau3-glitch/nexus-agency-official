"use client";

import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import LeadForm from "./leads/LeadForm";

export default function CTASection() {
  const openWhatsApp = () => {
    window.open("https://wa.me/254742727451", "_blank");
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-purple-600/5 -z-10" />
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative rounded-[40px] overflow-hidden glass p-12 md:p-24 border border-white/10 text-center"
        >
          {/* Background Glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-purple-600/20 rounded-full blur-[120px] -z-10" />
          
          <div className="max-w-3xl mx-auto">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-7xl font-bold text-white mb-8 tracking-tight"
            >
              Ready To <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Transform</span> Your Business?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl mb-12"
            >
              Fill out the form below to start your journey with NEXUS. Our AI team will get back to you instantly.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-left mb-12"
            >
              <LeadForm />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="flex justify-center"
            >
              <button
                onClick={openWhatsApp}
                className="px-8 py-4 glass hover:bg-white/10 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 border border-white/10 cursor-pointer"
              >
                <MessageSquare size={20} />
                Talk To Our AI Directly
              </button>
            </motion.div>
          </div>

          {/* Decorative floating elements */}
          <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
          <div className="absolute top-1/4 right-20 w-1 h-1 rounded-full bg-white opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
