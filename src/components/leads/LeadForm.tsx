"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";

export default function LeadForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    service: "Website Design",
  });

  const services = [
    "Website Design",
    "AI Automation",
    "WhatsApp Automation",
    "E-commerce",
    "Custom Software",
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // Pre-calculate WhatsApp URL
    const message = `Hi NEXUS, I'm ${formData.name} from ${formData.businessName}. I'm interested in ${formData.service}. I just filled out your contact form.`;
    const whatsappUrl = `https://wa.me/254742727451?text=${encodeURIComponent(message)}`;

    try {
      // 1. Try to save to database (Local or External)
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      // Even if saving to DB fails (e.g. read-only filesystem on Vercel),
      // we proceed to WhatsApp so the business doesn't lose the lead.
      setStatus("success");
      
      // Open WhatsApp immediately to avoid popup blockers
      window.location.href = whatsappUrl;
      
    } catch (error) {
      console.error("Lead submission error:", error);
      // Fallback: Redirect to WhatsApp even on network failure
      setStatus("success");
      window.location.href = whatsappUrl;
    }
  };

  return (
    <div className="w-full max-w-xl mx-auto">
      <AnimatePresence mode="wait">
        {status === "success" ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="glass p-8 rounded-3xl text-center border border-green-500/30"
          >
            <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="text-green-500" size={32} />
            </div>
            <h3 className="text-2xl font-bold text-white mb-2">Connecting to NEXUS...</h3>
            <p className="text-gray-400 mb-6">Opening WhatsApp to connect you with our AI team.</p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Your Name</label>
                <input
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 text-white transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Business Name</label>
                <input
                  required
                  type="text"
                  placeholder="Acme Inc."
                  className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 text-white transition-all"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-400 ml-1">Service Interested In</label>
              <select
                className="w-full px-6 py-4 bg-white/5 border border-white/10 rounded-2xl focus:outline-none focus:border-purple-500/50 text-white transition-all appearance-none cursor-pointer"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                {services.map((s) => (
                  <option key={s} value={s} className="bg-gray-900">{s}</option>
                ))}
              </select>
            </div>

            <button
              disabled={status === "loading"}
              type="submit"
              className="w-full py-5 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 text-white rounded-2xl font-bold transition-all neon-border flex items-center justify-center gap-2 group shadow-[0_0_30px_rgba(139,92,246,0.3)] mt-8"
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  Initializing...
                </>
              ) : (
                <>
                  Get Started
                  <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
