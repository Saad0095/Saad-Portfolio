import { motion } from "framer-motion";
import { FaLaptop, FaServer, FaDatabase, FaArrowRight } from "react-icons/fa";
import { useState } from "react";

const nodes = [
  { id: "client", label: "Client App", sub: "React / Next.js", icon: FaLaptop, status: "Active" },
  { id: "api", label: "REST / Socket API", sub: "Gateway", icon: FaArrowRight, status: "Connected" },
  { id: "server", label: "Node / Express", sub: "Core Server", icon: FaServer, status: "Running" },
  { id: "db", label: "MongoDB & AI", sub: "Persistence / LLM", icon: FaDatabase, status: "Synced" },
];

const SystemVisual = () => {
  const [activeNode, setActiveNode] = useState<string | null>("api");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="relative w-full max-w-lg mx-auto bg-[#121215]/90 border border-zinc-800/90 rounded-2xl p-5 sm:p-6 shadow-2xl backdrop-blur-md"
    >
      {/* Top Window Control Bar */}
      <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-800/80">
        <div className="flex items-center gap-1.5">
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-zinc-700/80 inline-block"></span>
        </div>
        <span className="font-mono text-xs text-zinc-500 font-medium">system_flow.ts</span>
        <div className="flex items-center gap-1.5 text-[11px] font-mono text-emerald-400">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
          <span>LIVE FLOW</span>
        </div>
      </div>

      {/* System Node Flow */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 relative my-2">
        {nodes.map((node, index) => {
          const Icon = node.icon;
          const isSelected = activeNode === node.id;
          return (
            <div
              key={node.id}
              onMouseEnter={() => setActiveNode(node.id)}
              className={`relative flex flex-col items-center justify-center p-3 rounded-xl border transition-all duration-300 cursor-pointer ${
                isSelected
                  ? "bg-[#18181c] border-emerald-500/50 text-white shadow-lg shadow-emerald-500/10"
                  : "bg-[#09090b]/80 border-zinc-800/90 text-zinc-400 hover:border-zinc-700"
              }`}
            >
              <div
                className={`w-9 h-9 rounded-lg flex items-center justify-center mb-2 transition-colors ${
                  isSelected ? "bg-emerald-500/20 text-emerald-400" : "bg-zinc-800/60 text-zinc-400"
                }`}
              >
                <Icon size={16} />
              </div>
              <span className="text-xs font-bold text-center leading-tight">{node.label}</span>
              <span className="text-[10px] font-mono text-zinc-500 mt-0.5">{node.sub}</span>

              {/* Connecting animated dot indicator for desktop */}
              {index < nodes.length - 1 && (
                <div className="hidden sm:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400/70 animate-ping inline-block" />
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Animated Stream Status Bar */}
      <div className="mt-4 p-3 bg-[#09090b] rounded-xl border border-zinc-800/80 font-mono text-[11px] space-y-1.5">
        <div className="flex items-center justify-between text-zinc-400">
          <span className="text-zinc-500">EVENT LOG</span>
          <span className="text-emerald-400 font-semibold">200 OK — 12ms</span>
        </div>
        <div className="text-zinc-300 flex items-center justify-between">
          <span className="text-zinc-400 truncate">
            {activeNode === "client" && "REQ: GET /api/v1/dashboard"}
            {activeNode === "api" && "GATEWAY: JWT Auth & RBAC Check"}
            {activeNode === "server" && "PROCESS: Socket.IO Broadcast"}
            {activeNode === "db" && "QUERY: Mongo Replica & OpenAI"}
            {!activeNode && "SYSTEM: Operational"}
          </span>
          <span className="text-emerald-400 shrink-0 ml-2">STREAMING</span>
        </div>
      </div>
    </motion.div>
  );
};

export default SystemVisual;
