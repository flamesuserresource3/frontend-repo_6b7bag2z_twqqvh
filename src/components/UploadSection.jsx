import { useRef, useState } from "react";
import { UploadCloud, Scissors, Film, Plus } from "lucide-react";

export default function UploadSection({ onSubmit }) {
  const videoRef = useRef(null);
  const assetsRef = useRef(null);
  const [instructions, setInstructions] = useState("");
  const [format, setFormat] = useState("16:9");

  const handleSubmit = (e) => {
    e.preventDefault();
    const videos = Array.from(videoRef.current.files || []);
    const assets = Array.from(assetsRef.current.files || []);
    if (!videos.length) return;
    onSubmit({ videos, assets, instructions, format });
  };

  return (
    <section className="mx-auto max-w-5xl px-4 py-8">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <div className="mb-6 flex items-start justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold text-white">Carica le clip</h2>
            <p className="text-sm text-white/60">
              Carica più clip (anche 1 ora di girato). Le uniremo in un video di ~15
              minuti con highlight, censura parolacce e formato adatto a YouTube.
            </p>
          </div>
          <Scissors className="text-white/60" />
        </div>

        <form onSubmit={handleSubmit} className="grid gap-6 md:grid-cols-2">
          <label className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/15 bg-black/20 p-6 text-white hover:border-white/30">
            <UploadCloud />
            <div className="text-center">
              <p className="font-medium">Video principali</p>
              <p className="text-xs text-white/60">MP4, MOV • multipli</p>
            </div>
            <input ref={videoRef} type="file" multiple accept="video/*" className="hidden" />
          </label>

          <label className="flex flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-white/15 bg-black/20 p-6 text-white hover:border-white/30">
            <Plus />
            <div className="text-center">
              <p className="font-medium">Asset extra</p>
              <p className="text-xs text-white/60">Immagini o clip aggiuntive</p>
            </div>
            <input ref={assetsRef} type="file" multiple accept="video/*,image/*" className="hidden" />
          </label>

          <div className="md:col-span-2 grid gap-4">
            <div>
              <label className="mb-2 block text-sm text-white/80">Istruzioni per l'AI</label>
              <textarea
                value={instructions}
                onChange={(e) => setInstructions(e.target.value)}
                placeholder="Es: taglia momenti morti, metti sottotitoli, enfatizza clutch in Clash Royale e Brawl Stars, censura bestemmie."
                className="h-28 w-full rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder-white/40 focus:border-indigo-400 focus:outline-none"
              />
            </div>

            <div className="flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
              <div className="flex items-center gap-3 text-white/80">
                <Film size={18} />
                <span className="text-sm">Formato</span>
                <div className="flex gap-2">
                  {[
                    { label: "16:9", value: "16:9" },
                    { label: "9:16", value: "9:16" },
                    { label: "1:1", value: "1:1" },
                  ].map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => setFormat(opt.value)}
                      className={`rounded-md px-3 py-1 text-sm ${
                        format === opt.value
                          ? "bg-indigo-600 text-white"
                          : "bg-white/10 text-white/70 hover:bg-white/20"
                      }`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-5 py-2 font-medium text-white shadow-lg shadow-indigo-500/20 hover:opacity-95"
              >
                <UploadCloud size={18} /> Avvia editing AI
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
