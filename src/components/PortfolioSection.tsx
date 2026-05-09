"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

const portfolioItems = [
  {
    title: "L'élégance Fashion",
    category: "Fashion Brand",
    image: "/assets/portfolio-fashion.png",
  },
  {
    title: "The Savory Grill",
    category: "Restaurant",
    image: "/assets/portfolio-restaurant.png",
  },
  {
    title: "Azure Heights",
    category: "Real Estate",
    image: "/assets/portfolio-fashion.png", // Placeholder
  },
  {
    title: "Serene Stays",
    category: "Hotel",
    image: "/assets/portfolio-restaurant.png", // Placeholder
  },
  {
    title: "Nexus Tech Lab",
    category: "Tech Startup",
    image: "/assets/portfolio-fashion.png", // Placeholder
  },
  {
    title: "Vitality Clinic",
    category: "Medical",
    image: "/assets/portfolio-restaurant.png", // Placeholder
  },
];

const PortfolioCard = ({ item, index }: { item: typeof portfolioItems[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="group relative rounded-3xl overflow-hidden glass border border-white/10"
    >
      <div className="relative h-80 w-full overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />
      </div>

      <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-2 group-hover:translate-y-0 transition-transform">
        <p className="text-purple-400 text-sm font-medium mb-2 uppercase tracking-widest">{item.category}</p>
        <div className="flex justify-between items-center">
          <h3 className="text-2xl font-bold text-white">{item.title}</h3>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="w-12 h-12 rounded-full glass flex items-center justify-center text-white border border-white/20 opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ExternalLink size={20} />
          </motion.div>
        </div>
      </div>
      
      {/* Decorative glow on hover */}
      <div className="absolute inset-0 bg-purple-600/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
    </motion.div>
  );
};

export default function PortfolioSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20">
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Elite <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Showcase</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-xl"
            >
              We don't just build websites; we create digital masterpieces that elevate brands and drive unprecedented growth.
            </motion.p>
          </div>
          <motion.button
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-8 md:mt-0 px-8 py-4 glass hover:bg-white/10 text-white rounded-xl font-bold transition-all border border-white/10"
          >
            View All Work
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioItems.map((item, index) => (
            <PortfolioCard key={index} item={item} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
