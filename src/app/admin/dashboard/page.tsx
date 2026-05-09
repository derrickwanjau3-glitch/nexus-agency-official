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
  Bot
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AdminDashboard() {
  const sidebarItems = [
    { icon: <LayoutDashboard size={20} />, label: "Dashboard", active: true },
    { icon: <MessageSquare size={20} />, label: "AI Chats", count: 12 },
    { icon: <Users size={20} />, label: "Customers" },
    { icon: <BarChart3 size={20} />, label: "Analytics" },
    { icon: <Settings size={20} />, label: "AI Settings" },
  ];

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
              {item.count && (
                <span className="text-[10px] bg-purple-600 text-white px-2 py-0.5 rounded-full font-bold">
                  {item.count}
                </span>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-auto pt-6 border-t border-white/5">
          <div className="flex items-center gap-3 p-2">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
            <div>
              <p className="text-xs font-bold">Kenyan Biz Owner</p>
              <p className="text-[10px] text-gray-500">Premium Account</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto">
        {/* Header */}
        <header className="h-20 border-b border-white/5 flex items-center justify-between px-8 bg-black/20 backdrop-blur-md sticky top-0 z-30">
          <div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-xl w-96">
            <Search size={18} className="text-gray-500" />
            <input 
              type="text" 
              placeholder="Search projects or messages..." 
              className="bg-transparent border-none focus:outline-none text-sm w-full"
            />
          </div>

          <div className="flex items-center gap-6">
            <div className="relative cursor-pointer">
              <Bell size={20} className="text-gray-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-black" />
            </div>
            <div className="px-4 py-2 bg-purple-600 rounded-lg text-sm font-bold cursor-pointer hover:bg-purple-700 transition-colors">
              New Project
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-8 space-y-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">Welcome back, John!</h1>
              <p className="text-gray-500">Your AI Assistant has handled 12 new inquiries today.</p>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 glass rounded-xl border border-green-500/20 text-green-400 text-xs font-bold">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              SYSTEM_OPTIMIZED
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { label: "Active AI Chats", value: "1,284", growth: "+12%", icon: <MessageSquare size={20} className="text-blue-400" /> },
              { label: "Project Progress", value: "92%", growth: "Phase 4", icon: <TrendingUp size={20} className="text-purple-400" /> },
              { label: "Automation Level", value: "98.2%", growth: "Optimal", icon: <Cpu size={20} className="text-cyan-400" /> },
              { label: "Total Revenue", value: "KES 4.2M", growth: "+24%", icon: <BarChart3 size={20} className="text-green-400" /> },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-6 glass rounded-2xl border border-white/5"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    {stat.icon}
                  </div>
                  <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{stat.growth}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{stat.label}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
              </motion.div>
            ))}
          </div>

          {/* Main Visual Section */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="glass rounded-[32px] border border-white/10 p-1 overflow-hidden relative group">
                <Image 
                  src="/assets/dashboard-mockup.png" 
                  alt="AI Analytics" 
                  width={1200} 
                  height={800}
                  className="w-full h-auto rounded-[31px]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                   <div className="flex items-center gap-4">
                      <div className="w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center">
                        <Bot size={24} />
                      </div>
                      <div>
                        <p className="font-bold">AI Insight</p>
                        <p className="text-sm text-gray-400">Increase WhatsApp response speed by 4s to boost retention.</p>
                      </div>
                   </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="p-8 glass rounded-[32px] border border-white/5">
                   <div className="flex items-center justify-between mb-6">
                      <h3 className="font-bold">Project Timeline</h3>
                      <ArrowUpRight size={20} className="text-gray-500" />
                   </div>
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
                      {[
                        { user: "Alice M.", msg: "Quotation for logistics app...", time: "2m ago" },
                        { user: "Brian O.", msg: "Schedule a demo for Monday.", time: "15m ago" },
                        { user: "Sarah W.", msg: "Thank you for the update!", time: "1h ago" },
                      ].map((m, i) => (
                        <div key={i} className="flex items-center gap-3">
                           <div className="w-8 h-8 rounded-full bg-gray-800" />
                           <div className="flex-1">
                              <p className="text-xs font-bold">{m.user}</p>
                              <p className="text-[10px] text-gray-500 truncate">{m.msg}</p>
                           </div>
                           <span className="text-[10px] text-gray-700">{m.time}</span>
                        </div>
                      ))}
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
                       <p className="text-xl font-mono text-purple-400 font-bold">+254 700 000 000</p>
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
