"use client";

import { motion } from "framer-motion";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-32 relative overflow-hidden">
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
            className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl mb-12"
          >
            Join the elite circle of businesses leveraging AI and world-class design to dominate their markets.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <button className="px-10 py-5 bg-purple-600 hover:bg-purple-700 text-white rounded-2xl font-bold transition-all neon-border flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(139,92,246,0.3)]">
              Start Your Project
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 glass hover:bg-white/10 text-white rounded-2xl font-bold transition-all flex items-center justify-center gap-2 border border-white/10">
              <MessageSquare size={20} />
              Talk To Our AI
            </button>
          </motion.div>
          
          {/* Decorative floating elements */}
          <div className="absolute top-10 left-10 w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          <div className="absolute bottom-10 right-10 w-3 h-3 rounded-full bg-blue-400 animate-pulse" />
          <div className="absolute top-1/4 right-20 w-1 h-1 rounded-full bg-white opacity-50" />
        </motion.div>
      </div>
    </section>
  );
}
