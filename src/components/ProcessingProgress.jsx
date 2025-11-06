import { useEffect, useState } from "react";
import { Loader2, Cpu } from "lucide-react";

export default function ProcessingProgress({ job }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!job) return;
    setProgress(10);
    const t = setInterval(() => {
      setProgress((p) => (p >= 95 ? 95 : p + 7));
    }, 1000);
    return () => clearInterval(t);
  }, [job]);

  if (!job) return null;

  return (
    <section className="mx-auto max-w-5xl px-4 py-6">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <div className="mb-4 flex items-center gap-3">
          <Cpu className="text-indigo-400" />
          <h3 className="text-lg font-medium text-white">Elaborazione AI in corso</h3>
        </div>
        <div className="flex items-center gap-3">
          <div className="h-2 w-full overflow-hidden rounded bg-white/10">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <span className="w-12 text-right text-sm text-white/70">{progress}%</span>
          <Loader2 className="animate-spin text-white/60" />
        </div>
        <p className="mt-3 text-xs text-white/60">
          Stiamo unendo le clip, rimuovendo tempi morti, censurando linguaggio offensivo e producendo un highlight di ~15 minuti.
        </p>
      </div>
    </section>
  );
}
