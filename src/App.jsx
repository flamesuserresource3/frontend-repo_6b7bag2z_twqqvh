import { useState } from "react";
import Navbar from "./components/Navbar";
import UploadSection from "./components/UploadSection";
import ProcessingProgress from "./components/ProcessingProgress";
import ResultsGallery from "./components/ResultsGallery";
import AIChat from "./components/AIChat";
import { Rocket, Gamepad2, Shield, Timer } from "lucide-react";

function App() {
  const [job, setJob] = useState(null);
  const [showResults, setShowResults] = useState(false);

  const startJob = ({ videos, assets, instructions, format }) => {
    // Simulazione invio a backend: avvia stato job e dopo un po' mostra risultati
    const fakeJob = {
      id: Math.random().toString(36).slice(2),
      instructions,
      format,
      files: [...videos, ...assets],
    };
    setJob(fakeJob);
    setShowResults(false);
    // Finta elaborazione di ~12s
    setTimeout(() => setShowResults(true), 12000);
  };

  const restart = () => {
    setJob(null);
    setShowResults(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="relative mx-auto max-w-7xl px-4 pt-10">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div>
            <h1 className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-4xl font-extrabold text-transparent md:text-5xl">
              Montaggi AI per YouTube da ore di gameplay
            </h1>
            <p className="mt-4 text-white/70">
              Carica fino a 1 ora di clip e ottieni un highlight di circa 15 minuti, ottimizzato per YouTube, con censura automatica di parolacce e bestemmie.
              Supporto specifico per Brawl Stars, Clash Royale e altri giochi.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                <Gamepad2 size={16} /> Brawl Stars, Clash Royale, + altri
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                <Timer size={16} /> Da 60min a ~15min
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                <Shield size={16} /> Censura linguaggio
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1">
                <Rocket size={16} /> Performance ottimizzata
              </span>
            </div>
          </div>
          <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 p-6">
            <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black/60">
              <video
                src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4"
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mt-2 text-xs text-white/60">Preview del risultato tipico di un highlight AI.</p>
          </div>
        </div>
      </section>

      <UploadSection onSubmit={startJob} />
      <ProcessingProgress job={job} />

      {showResults && (
        <>
          <ResultsGallery onRestart={restart} />
          <AIChat onUpload={() => {}} />
        </>
      )}

      <footer className="mt-10 border-t border-white/10 py-8 text-center text-xs text-white/50">
        ClipForge AI — velocità, qualità e controllo creativo
      </footer>
    </div>
  );
}

export default App;
