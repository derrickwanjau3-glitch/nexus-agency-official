"use client";

import { motion } from "framer-motion";
import {
  Zap,
  LayoutDashboard,
  MessageSquare,
  Users,
  BarChart3,
  Settings,
  Bell,
  Search,
  ArrowUpRight,
  TrendingUp,
  Cpu,
  Bot,
  Clock
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface Lead {
  id: string;
  name: string;
  businessName: string;
  service: string;
  timestamp: string;
}

export default function AdminDashboard() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchLeads() {
      try {
        const response = await fetch("/api/leads");
        if (response.ok) {
          const data = await response.json();
          // Sort by timestamp descending
          data.sort((a: Lead, b: Lead) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime());
          setLeads(data);
        }
      } catch (error) {
        console.error("Failed to fetch leads:", error);
      } finally {
        setLoading(false);
      }
    }
    fetchLeads();
  }, []);

  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
    { icon: <MessageSquare size={20} />, label: "Inquiries", count: leads.length },
    { icon: <Users size={20} />, label: "Customers" },
    { icon: <BarChart3 size={20} />, label: "Analytics" },
    { icon: <Settings size={20} />, label: "AI Settings" },
  ];

  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMins = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInMins < 1) return "Just now";
    if (diffInMins < 60) return `${diffInMins}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return `${diffInDays}d ago`;
  };

  return (
    <div className="min-h-screen bg-[#050505] flex text-white font-sans overflow-hidden">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/5 bg-black/40 backdrop-blur-3xl p-6 hidden lg:flex flex-col">
        <Link href="/" className="flex items-center gap-2 mb-12">
          <div className="w-8 h-8 rounded-lg bg-purple-600 flex items-center justify-center text-white">
            <Zap size={16} fill="white" />
          </div>
          <span className="text-xl font-black tracking-tighter">NEXUS</span>
        </Link>

        <nav className="flex-1 space-y-2">
          {sidebarItems.map((item) => (
            <div
              key={item.label}
              className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all ${
                item.active ? "bg-purple-600/10 text-purple-400 border border-purple-500/20" : "text-gray-500 hover:text-white hover:bg-white/5"
              }`}
            >
              <div className="flex items-center gap-3">
                {item.icon}
                <span className="text-sm font-medium">{item.label}</span>
              </div>
              {item.count !== undefined && (
                <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-full">{item.count}</span>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
           <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-purple-600 to-blue-600 flex items-center justify-center font-bold text-sm">
                JD
              </div>
              <div>
                <p className="text-sm font-bold">Admin User</p>
                <p className="text-[10px] text-gray-500">Super Administrator</p>
              </div>
           </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-black/20 backdrop-blur-xl sticky top-0 z-10">
          <div className="flex items-center gap-4 bg-white/5 px-4 py-2 rounded-xl border border-white/5 w-96">
            <Search size={18} className="text-gray-500" />
            <input type="text" placeholder="Search systems..." className="bg-transparent border-none outline-none text-sm w-full" />
          </div>
          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell size={20} className="text-gray-400 hover:text-white transition-colors" />
              <div className="absolute top-0 right-0 w-2 h-2 bg-purple-500 rounded-full border-2 border-[#050505]" />
            </div>
            <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
               <Bot size={20} className="text-purple-400" />
            </div>
          </div>
        </header>

        <div className="p-8">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h1 className="text-3xl font-black mb-2 tracking-tight">NEXUS AI SYSTEM</h1>
              <p className="text-gray-500 text-sm">Monitor and manage your business automation in real-time.</p>
            </div>
            <div className="flex gap-4">
               <button className="px-6 py-2.5 bg-white/5 border border-white/10 rounded-xl text-sm font-bold hover:bg-white/10 transition-all flex items-center gap-2">
                 <Clock size={16} />
                 System Logs
               </button>
               <button className="px-6 py-2.5 bg-purple-600 rounded-xl text-sm font-bold shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:bg-purple-700 transition-all">
                 Generate Report
               </button>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            {[
              { label: "Active Chat", value: "142", icon: <MessageSquare size={20} />, trend: "+12%", color: "text-blue-400" },
              { label: "Automation Level", value: "98.2%", icon: <Cpu size={20} />, trend: "Stable", color: "text-purple-400" },
              { label: "Revenue Generated", value: "$12,450", icon: <TrendingUp size={20} />, trend: "+8.4%", color: "text-green-400" },
              { label: "Client Projects", value: "24", icon: <Zap size={20} />, trend: "+2", color: "text-yellow-400" },
            ].map((stat, i) => (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                key={stat.label}
                className="p-6 glass rounded-[32px] border border-white/5 relative overflow-hidden group"
              >
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className={`w-12 h-12 rounded-2xl bg-white/5 flex items-center justify-center ${stat.color}`}>
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-green-400 bg-green-400/10 px-2 py-1 rounded-lg">{stat.trend}</span>
                </div>
                <div className="relative z-10">
                  <p className="text-gray-500 text-xs font-bold uppercase tracking-widest mb-1">{stat.label}</p>
                  <p className="text-3xl font-black">{stat.value}</p>
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-white/5 rounded-full blur-2xl group-hover:bg-purple-500/10 transition-all" />
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="p-8 glass rounded-[40px] border border-white/5 relative overflow-hidden">
                 <div className="flex items-center justify-between mb-8">
                    <h2 className="text-xl font-bold">AI Performance Analytics</h2>
                    <div className="flex gap-2">
                       <span className="px-3 py-1 bg-purple-600/20 text-purple-400 text-[10px] font-bold rounded-lg border border-purple-500/20">7D</span>
                       <span className="px-3 py-1 bg-white/5 text-gray-500 text-[10px] font-bold rounded-lg">30D</span>
                    </div>
                 </div>
                 <div className="h-64 w-full flex items-end gap-2 px-2">
                    {[40, 70, 45, 90, 65, 80, 55, 95, 75, 85, 60, 100].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        animate={{ height: `${h}%` }}
                        transition={{ delay: i * 0.05, duration: 1 }}
                        className="flex-1 bg-gradient-to-t from-purple-600 to-blue-500 rounded-t-sm opacity-60 hover:opacity-100 transition-all"
                      />
                    ))}
                 </div>
                 <div className="flex justify-between mt-4 text-[10px] text-gray-500 font-bold px-2 uppercase tracking-widest">
                    <span>Mon</span>
                    <span>Tue</span>
                    <span>Wed</span>
                    <span>Thu</span>
                    <span>Fri</span>
                    <span>Sat</span>
                    <span>Sun</span>
                 </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="p-8 glass rounded-[32px] border border-white/5">
                   <h3 className="font-bold mb-6">Project Tracking</h3>
                   <div className="space-y-6">
                      {[
                        { step: "Discovery Call", date: "May 10", status: "Completed" },
                        { step: "Design Phase", date: "May 14", status: "Active" },
                        { step: "AI Integration", date: "May 18", status: "Pending" },
                      ].map((s, i) => (
                        <div key={i} className="flex items-center gap-4">
                           <div className={`w-3 h-3 rounded-full ${s.status === 'Completed' ? 'bg-purple-500' : s.status === 'Active' ? 'bg-blue-500 animate-pulse' : 'bg-gray-800'}`} />
                           <div className="flex-1">
                              <p className="text-sm font-bold">{s.step}</p>
                              <p className="text-xs text-gray-500">{s.date}</p>
                           </div>
                           <span className="text-[10px] font-mono text-gray-600">{s.status}</span>
                        </div>
                      ))}
                   </div>
                 </div>
                 <div className="p-8 glass rounded-[32px] border border-white/5">
                   <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold">Recent Inquiries</h3>
                      <span className="text-xs text-purple-400 font-bold cursor-pointer hover:underline">View All</span>
                   </div>
                   <div className="space-y-6">
                      {loading ? (
                        <div className="flex justify-center py-4">
                          <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-purple-500"></div>
                        </div>
                      ) : leads.length === 0 ? (
                        <p className="text-xs text-gray-500 text-center py-4">No recent inquiries.</p>
                      ) : (
                        leads.slice(0, 5).map((lead) => (
                          <div key={lead.id} className="flex items-center gap-3">
                             <div className="w-8 h-8 rounded-full bg-purple-600/20 flex items-center justify-center text-purple-400 font-bold text-[10px]">
                                {lead.name.charAt(0)}
                             </div>
                             <div className="flex-1">
                                <p className="text-xs font-bold">{lead.name}</p>
                                <p className="text-[10px] text-gray-500 truncate">{lead.service} - {lead.businessName}</p>
                             </div>
                             <span className="text-[10px] text-gray-700">{formatTime(lead.timestamp)}</span>
                          </div>
                        ))
                      )}
                   </div>
                 </div>
              </div>
            </div>

            <div className="space-y-8">
               <div className="p-8 glass rounded-[32px] border border-purple-500/20 bg-purple-500/5 relative overflow-hidden">
                  <div className="relative z-10">
                    <h3 className="text-xl font-bold mb-4">NEXUS AI Number</h3>
                    <div className="p-4 bg-black/40 rounded-2xl border border-white/10 mb-6 text-center">
                       <p className="text-gray-500 text-[10px] uppercase tracking-widest mb-1">Your Virtual Line</p>
                       <p className="text-xl font-mono text-purple-400 font-bold">+254 742 727 451</p>
                    </div>
                    <ul className="space-y-4 mb-8">
                       {[
                         "Automated Voice Response",
                         "WhatsApp Concierge",
                         "24/7 Availability",
                         "Instant Data Logging"
                       ].map(f => (
                         <li key={f} className="flex items-center gap-2 text-xs text-gray-400">
                           <div className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                           {f}
                         </li>
                       ))}
                    </ul>
                    <button className="w-full py-4 bg-purple-600 rounded-xl font-bold text-sm shadow-[0_0_20px_rgba(139,92,246,0.3)]">
                       Configure AI Voice
                    </button>
                  </div>
                  <Zap className="absolute -bottom-10 -right-10 w-40 h-40 text-purple-600/10 -rotate-12" />
               </div>

               <div className="p-8 glass rounded-[32px] border border-white/5">
                  <h3 className="font-bold mb-6 text-center uppercase tracking-tighter text-gray-500 text-sm">System Health</h3>
                  <div className="flex justify-center mb-6">
                    <div className="w-48 h-48 rounded-full border-8 border-gray-900 flex items-center justify-center relative">
                       <div className="absolute inset-0 rounded-full border-t-8 border-l-8 border-purple-500 -rotate-45" />
                       <div className="text-center">
                          <p className="text-4xl font-black">98.2%</p>
                          <p className="text-[10px] text-gray-500 font-bold">ACCURACY</p>
                       </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                     <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase">Uptime</p>
                        <p className="font-bold">99.9%</p>
                     </div>
                     <div className="text-center p-3 rounded-xl bg-white/5 border border-white/5">
                        <p className="text-[10px] text-gray-500 uppercase">Latency</p>
                        <p className="font-bold">24ms</p>
                     </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
