"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const stats = [
  { label: "Websites Built", value: 250, suffix: "+" },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
  { label: "Day Delivery", value: 5, prefix: "2–", suffix: "" },
  { label: "AI Automation", value: 24, prefix: "", suffix: "/7" },
  { label: "Businesses Automated", value: 100, suffix: "+" },
];

const StatCard = ({ stat, index }: { stat: typeof stats[0]; index: number }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = end / (duration / 16);
      
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [isInView, stat.value]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="flex flex-col items-center justify-center p-8 glass rounded-2xl border border-white/5 hover:border-purple-500/30 transition-colors group"
    >
      <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-white to-purple-400 bg-clip-text text-transparent">
        {stat.prefix}{count}{stat.suffix}
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-widest text-center">
        {stat.label}
      </div>
      <div className="absolute inset-0 bg-purple-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
    </motion.div>
  );
};

export default function StatsSection() {
  return (
    <section className="py-24 relative w-full">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {stats.map((stat, index) => (
            <StatCard key={index} stat={stat} index={index} />
          ))}
        </div>
      </div>
      
      {/* Decorative line */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
    </section>
  );
}
