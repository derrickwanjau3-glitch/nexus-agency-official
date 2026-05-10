"use client";

import { motion } from "framer-motion";
import { Zap, Bot, MessageSquare, Database, Cpu, TrendingUp } from "lucide-react";
import Image from "next/image";
import OpenModalButton from "./OpenModalButton";

const features = [
  {
    title: "AI Business Number",
    description: "Every client gets an automatic AI business number for instant customer handling.",
    icon: <Bot className="text-purple-400" />
  },
  {
    title: "Smart Storage",
    description: "AI stores all customer messages and project files automatically in your dashboard.",
    icon: <Database className="text-blue-400" />
  },
  {
    title: "Auto Inquiries",
    description: "AI handles inquiries automatically, qualifying leads while you sleep.",
    icon: <MessageSquare className="text-green-400" />
  },
  {
    title: "Live Tracking",
    description: "Track your website development progress live with automatic AI updates.",
    icon: <TrendingUp className="text-yellow-400" />
  }
];

export default function AIAutomationSection() {
  return (
    <section id="ai-system" className="py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6 text-purple-400 text-sm font-medium border border-purple-500/20"
          >
            <Cpu size={16} />
            <span>NEXUS AI SYSTEM</span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold text-white mb-6"
          >
            Intelligent <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Automation</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg mb-8"
          >
            A revolutionary intelligent ecosystem that powers your business, 
            manages your clients, and automates your entire digital presence.
          </motion.p>
          <OpenModalButton className="px-8 py-4 bg-purple-600 rounded-xl font-bold text-white hover:bg-purple-700 transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)]">
            Deploy AI Now
          </OpenModalButton>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Side: Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 glass rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Right Side: Dashboard Mockup / Interface */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="glass rounded-3xl p-4 border border-white/10 shadow-2xl overflow-hidden backdrop-blur-3xl bg-white/5">
              <div className="flex items-center justify-between mb-4 px-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/50" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                  <div className="w-3 h-3 rounded-full bg-green-500/50" />
                </div>
                <div className="text-[10px] text-gray-500 font-mono tracking-tighter">NEXUS_OS_V2.0</div>
              </div>
              <div className="relative rounded-xl overflow-hidden aspect-[16/10]">
                <Image
                  src="/assets/dashboard-mockup.png"
                  alt="Nexus AI Dashboard"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay Elements to make it feel "Live" */}
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  <motion.div
                    animate={{ x: [0, 5, 0], opacity: [0.8, 1, 0.8] }}
                    transition={{ duration: 3, repeat: Infinity }}
                    className="px-3 py-1.5 rounded-lg glass-dark text-[10px] text-green-400 font-bold border border-green-400/20 flex items-center gap-2"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    LIVE_ANALYTICS
                  </motion.div>
                </div>

                <div className="absolute bottom-4 right-4 max-w-[150px]">
                   <motion.div
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     className="p-3 glass-dark rounded-xl border border-white/10"
                   >
                     <div className="flex items-center gap-2 mb-2">
                        <div className="w-6 h-6 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                          <Bot size={12} />
                        </div>
                        <span className="text-[10px] font-bold text-white uppercase">Nexus AI</span>
                     </div>
                     <p className="text-[9px] text-gray-400 leading-tight">Optimizing customer response pathways for 24.3% higher conversion.</p>
                   </motion.div>
                </div>
              </div>
            </div>

            {/* Floating Glow */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-600/30 rounded-full blur-[60px] -z-10" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-600/20 rounded-full blur-[60px] -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
