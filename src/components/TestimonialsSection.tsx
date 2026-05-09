"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "John Kamau",
    role: "CEO, Rift Valley Logistics",
    content: "NEXUS transformed our business. Within weeks of launching our new site and AI automation, we saw a 40% increase in lead conversion.",
    image: "/assets/testimonial-ceo.png",
  },
  {
    name: "Sarah Wanjiku",
    role: "Founder, Bloom Fashion",
    content: "We started getting customers immediately. The AI system handles inquiries flawlessly, allowing me to focus on growth instead of answering messages.",
    image: "/assets/testimonial-entrepreneur.png",
  },
  {
    name: "David Omondi",
    role: "Director, Savanna Real Estate",
    content: "The AI system changed how we handle clients. Our responses are instant, and the automatic project tracking keeps everyone in the loop.",
    image: "/assets/testimonial-ceo.png", // Reuse for now
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Trusted by <span className="text-purple-400">Industry Leaders</span>
          </motion.h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how NEXUS is empowering Kenyan businesses with cutting-edge technology and world-class design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="p-8 glass rounded-3xl border border-white/10 relative"
            >
              <Quote className="absolute top-6 right-8 text-purple-500/20 w-12 h-12" />
              
              <div className="flex gap-1 mb-6">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} size={16} fill="#A855F7" className="text-purple-500" />
                ))}
              </div>
              
              <p className="text-gray-300 text-lg mb-8 relative z-10">"{testimonial.content}"</p>
              
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-purple-500/30">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-white font-bold">{testimonial.name}</h4>
                  <p className="text-gray-500 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
