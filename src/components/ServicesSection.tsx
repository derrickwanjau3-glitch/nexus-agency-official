"use client";

import { motion } from "framer-motion";
import { 
  Globe, 
  Cpu, 
  MessageSquare, 
  Phone, 
  ShieldCheck, 
  Search, 
  ShoppingCart, 
  Calendar, 
  Bot, 
  Database 
} from "lucide-react";
import Image from "next/image";

const services = [
  {
    title: "Website Design",
    description: "Premium, high-conversion websites tailored to your brand's unique identity.",
    icon: <Globe className="w-6 h-6" />,
    iconPath: null
  },
  {
    title: "AI Website Generation",
    description: "Lightning-fast website creation powered by advanced artificial intelligence.",
    icon: null,
    iconPath: "/assets/ai-website-icon.png"
  },
  {
    title: "WhatsApp Automation",
    description: "Automate your customer engagement on the world's most popular messaging app.",
    icon: null,
    iconPath: "/assets/whatsapp-automation-icon.png"
  },
  {
    title: "AI Call Automation",
    description: "Smart voice systems that handle inquiries and bookings 24/7.",
    icon: null,
    iconPath: "/assets/ai-call-automation-icon.png"
  },
  {
    title: "Business Branding",
    description: "Elite visual identities that make your business stand out in the digital age.",
    icon: <ShieldCheck className="w-6 h-6" />,
    iconPath: null
  },
  {
    title: "SEO Optimization",
    description: "Dominating search results to ensure your customers find you first.",
    icon: <Search className="w-6 h-6" />,
    iconPath: null
  },
  {
    title: "E-commerce Websites",
    description: "Powerful online stores built for scale and seamless shopping experiences.",
    icon: <ShoppingCart className="w-6 h-6" />,
    iconPath: null
  },
  {
    title: "Booking Systems",
    description: "Automatic appointment scheduling systems for clinics, salons, and more.",
    icon: <Calendar className="w-6 h-6" />,
    iconPath: null
  },
  {
    title: "AI Chatbots",
    description: "Intelligent assistants that handle customer service and lead generation.",
    icon: <Bot className="w-6 h-6" />,
    iconPath: null
  },
  {
    title: "Automatic Data Storage",
    description: "Secure, automated project file and customer data management systems.",
    icon: <Database className="w-6 h-6" />,
    iconPath: null
  }
];

const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5 }}
      className="group relative p-8 glass rounded-3xl border border-white/5 hover:border-purple-500/50 transition-all duration-300"
    >
      <div className="mb-6 relative w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform duration-300 overflow-hidden">
        {service.iconPath ? (
          <Image src={service.iconPath} alt={service.title} fill className="object-contain p-2" />
        ) : (
          service.icon
        )}
        <div className="absolute inset-0 bg-purple-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      
      <h3 className="text-xl font-bold mb-4 text-white group-hover:text-purple-400 transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-400 text-sm leading-relaxed">
        {service.description}
      </p>

      {/* Decorative corner glow */}
      <div className="absolute -bottom-2 -right-2 w-24 h-24 bg-purple-600/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
    </motion.div>
  );
};

export default function ServicesSection() {
  return (
    <section className="py-32 relative w-full bg-black/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-6 text-white"
          >
            Elite Solutions for the <br />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Modern Enterprise
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            NEXUS provides a comprehensive suite of AI and web services designed to 
            automate your growth and redefine your digital presence.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
