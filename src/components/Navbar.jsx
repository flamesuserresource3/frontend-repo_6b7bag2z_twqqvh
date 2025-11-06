import { Rocket, Settings } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-20 w-full border-b border-white/10 bg-black/60 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 text-white">
            <Rocket size={20} />
          </div>
          <div>
            <p className="text-lg font-semibold text-white">ClipForge AI</p>
            <p className="text-xs text-white/60">Edita video lunghi in highlight perfetti</p>
          </div>
        </div>
        <div className="flex items-center gap-2 text-white/70">
          <Settings size={18} />
          <span className="hidden text-sm md:inline">Impostazioni</span>
        </div>
      </div>
    </header>
  );
}
