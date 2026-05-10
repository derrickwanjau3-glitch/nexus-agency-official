"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, MessageSquare, Database, BarChart3, Star, PhoneCall } from "lucide-react";
import StatsSection from "@/components/StatsSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import AIAutomationSection from "@/components/AIAutomationSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";

const AICard = () => {
  return (
    <motion.div
      animate={{ y: [0, -15, 0] }}
      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      className="glass-dark rounded-3xl p-6 border border-white/10 shadow-2xl w-72 backdrop-blur-2xl"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
          <Zap size={20} />
        </div>
        <div className="text-left">
          <p className="text-[10px] text-gray-500 uppercase tracking-widest">Nexus AI</p>
          <p className="text-sm font-bold text-white">System Active</p>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <PhoneCall size={14} className="text-green-400" />
            <span>AI Number Active</span>
          </div>
          <span className="text-xs font-bold text-white">+254 7...</span>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <MessageSquare size={14} className="text-blue-400" />
            <span>Customer Messages</span>
          </div>
          <span className="text-xs font-bold text-white">1,284</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Database size={14} className="text-purple-400" />
            <span>Stored Project Data</span>
          </div>
          <span className="text-xs font-bold text-white">45.8 GB</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <BarChart3 size={14} className="text-yellow-400" />
            <span>Website Analytics</span>
          </div>
          <span className="text-xs font-bold text-white">98% ↑</span>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs text-gray-400">
            <Star size={14} className="text-orange-400" />
            <span>Client Reviews</span>
          </div>
          <div className="flex gap-0.5 text-orange-400">
            <Star size={10} fill="currentColor" />
            <Star size={10} fill="currentColor" />
            <Star size={10} fill="currentColor" />
            <Star size={10} fill="currentColor" />
            <Star size={10} fill="currentColor" />
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-white/5">
        <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: "85%" }}
            transition={{ duration: 2, delay: 1 }}
            className="h-full bg-purple-500" 
          />
        </div>
      </div>
    </motion.div>
  );
};

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-start relative overflow-hidden bg-black">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative z-10 max-w-7xl w-full flex flex-col lg:flex-row items-center gap-12 mt-32 lg:mt-48 px-6 md:px-12">
        <div className="flex-1 text-center lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 text-purple-400 text-sm font-medium border border-purple-500/20"
          >
            <Zap size={16} />
            <span>The Future of Digital Business</span>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-white leading-tight"
          >
            We Design <br className="hidden lg:block" />
            Websites That <br />
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Build Businesses.
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 leading-relaxed mx-auto lg:mx-0"
          >
            NEXUS helps businesses grow with AI-powered websites, automation systems, 
            and modern digital experiences that turn visitors into customers.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-6 mb-12 justify-center lg:justify-start"
          >
            <a href="#contact" className="px-10 py-4 bg-purple-600 hover:bg-purple-700 text-white rounded-xl font-bold transition-all neon-border flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(139,92,246,0.3)]">
              Get Started
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#portfolio" className="px-10 py-4 glass hover:bg-white/10 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 border border-white/10 text-center">
              View Our Work
            </a>
          </motion.div>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ duration: 1, delay: 1 }}
             className="flex items-center gap-4 justify-center lg:justify-start"
          >
             <div className="flex -space-x-3">
                {[1,2,3,4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-black bg-gray-800 overflow-hidden">
                    <Image src={`/assets/testimonial-${i === 1 ? 'ceo' : 'entrepreneur'}.png`} alt="User" width={40} height={40} className="object-cover" />
                  </div>
                ))}
             </div>
             <div className="text-sm text-gray-400">
               <span className="text-white font-bold">250+</span> Businesses trust NEXUS
             </div>
          </motion.div>
        </div>

        <div className="flex-1 relative w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="relative"
          >
            <div className="relative z-10 w-full max-w-md mx-auto aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
              <Image 
                src="/assets/hero-founder.png" 
                alt="NEXUS Founder" 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
            </div>

            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-600/20 rounded-full blur-[100px] -z-10" />
            
            <div className="absolute -top-12 -right-12 lg:-right-20 z-20 hidden sm:block">
              <AICard />
            </div>

            <motion.div
               animate={{ y: [0, 20, 0] }}
               transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
               className="absolute -bottom-12 -left-12 z-20 hidden sm:block w-48"
            >
               <Image src="/assets/ui-card-messages.png" alt="UI Card" width={200} height={150} className="rounded-2xl border border-white/10 shadow-2xl" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="w-full max-w-7xl mx-auto mt-32 px-6">
        <div className="glass rounded-3xl p-2 border border-white/10 shadow-2xl overflow-hidden">
          <Image 
            src="/assets/dashboard-mockup.png" 
            alt="Nexus Dashboard" 
            width={1400} 
            height={900} 
            className="rounded-2xl w-full h-auto"
          />
        </div>
      </section>

      <StatsSection />
      
      <div id="services" className="w-full">
        <ServicesSection />
      </div>

      <div id="portfolio" className="w-full">
        <PortfolioSection />
      </div>

      <div id="ai-system" className="w-full">
        <AIAutomationSection />
      </div>

      <div id="testimonials" className="w-full">
        <TestimonialsSection />
      </div>

      <CTASection />
      
      <footer className="w-full py-12 px-6 border-t border-white/5 text-center">
        <div className="flex items-center justify-center gap-2 mb-6">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
            <Zap size={16} fill="white" />
          </div>
          <span className="text-xl font-black tracking-tighter text-white">NEXUS</span>
        </div>
        <p className="text-gray-500 text-sm mb-4">© 2026 NEXUS. Premium Kenyan Web Design & AI Automation.</p>
        <Link href="/admin" className="text-gray-600 hover:text-purple-400 text-xs transition-colors">
          Client Admin Access
        </Link>
      </footer>

      {/* Background Glows */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] -z-20 pointer-events-none" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] -z-20 pointer-events-none" />
    </main>
  );
}
