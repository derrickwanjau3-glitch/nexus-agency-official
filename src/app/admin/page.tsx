"use client";

import { motion } from "framer-motion";
import { Zap, Lock, Mail, ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Link from "next/link";

export default function AdminLogin() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate login
    setTimeout(() => {
      router.push("/admin/dashboard");
    }, 1500);
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-black relative overflow-hidden px-6">
      {/* Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-purple-600/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[120px] -z-10" />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-10">
          <Link href="/" className="inline-flex items-center gap-2 group mb-8">
            <div className="w-12 h-12 rounded-xl bg-purple-600 flex items-center justify-center text-white shadow-[0_0_20px_rgba(139,92,246,0.4)] group-hover:scale-110 transition-transform">
              <Zap size={24} fill="white" />
            </div>
            <span className="text-3xl font-black tracking-tighter text-white">NEXUS</span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">AI System Login</h1>
          <p className="text-gray-500">Access your automated business dashboard</p>
        </div>

        <div className="glass-dark p-8 rounded-[32px] border border-white/10 shadow-2xl backdrop-blur-2xl">
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Business Email</label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="email" 
                  required
                  placeholder="name@business.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-400 mb-2 ml-1">Access Key</label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                <input 
                  type="password" 
                  required
                  placeholder="••••••••"
                  className="w-full bg-white/5 border border-white/10 rounded-xl py-3.5 pl-12 pr-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-purple-500/50 transition-colors"
                />
              </div>
            </div>

            <button 
              disabled={isLoading}
              className="w-full py-4 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white rounded-xl font-bold transition-all neon-border flex items-center justify-center gap-2 group shadow-[0_0_20px_rgba(139,92,246,0.3)] mt-8"
            >
              {isLoading ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  Enter AI Dashboard
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </>
              )}
            </button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-500">
              Don't have an AI number yet? {" "}
              <Link href="/#contact" className="text-purple-400 font-bold hover:underline">Get Started</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
