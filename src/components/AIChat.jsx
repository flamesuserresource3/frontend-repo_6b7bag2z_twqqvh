import { useRef, useState } from "react";
import { Send, ImagePlus, Video, Wand2 } from "lucide-react";

export default function AIChat({ onUpload }) {
  const [messages, setMessages] = useState([
    { role: "ai", content: "Ciao! Dimmi come vuoi modificare il video e carica eventuali clip o immagini." },
  ]);
  const [input, setInput] = useState("");
  const fileRef = useRef(null);

  const sendMessage = () => {
    if (!input.trim()) return;
    const userMsg = { role: "user", content: input };
    const aiMsg = {
      role: "ai",
      content:
        "Perfetto! Applico i cambi richiesti. Posso tagliare parti lente, aggiungere sottotitoli, musica royalty-free e censurare parole offensive.",
    };
    setMessages((m) => [...m, userMsg, aiMsg]);
    setInput("");
  };

  const handleFiles = (e) => {
    const files = Array.from(e.target.files || []);
    if (!files.length) return;
    onUpload?.(files);
    setMessages((m) => [
      ...m,
      { role: "user", content: `Caricati ${files.length} file multimediali per ulteriori modifiche.` },
      { role: "ai", content: "Ricevuti! Li userò per migliorare il montaggio finale." },
    ]);
  };

  return (
    <section className="mx-auto max-w-5xl px-4 pb-12">
      <div className="rounded-2xl border border-white/10 bg-white/5 p-6 shadow-xl">
        <div className="mb-4 flex items-center gap-2 text-white">
          <Wand2 />
          <h3 className="text-lg font-medium">Chat AI di rifinitura</h3>
        </div>
        <div className="mb-4 h-64 overflow-y-auto rounded-lg border border-white/10 bg-black/40 p-4">
          {messages.map((m, i) => (
            <div key={i} className={`mb-3 flex ${m.role === "user" ? "justify-end" : "justify-start"}`}>
              <div
                className={`max-w-[80%] rounded-lg p-3 text-sm ${
                  m.role === "user"
                    ? "bg-indigo-600 text-white"
                    : "bg-white/10 text-white/90"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 rounded-lg border border-white/10 bg-black/40 p-3 text-white placeholder-white/40 focus:border-indigo-400 focus:outline-none"
            placeholder="Es: aumenta ritmo, tagli precisi ai momenti clou, formato 9:16 per Shorts"
          />
          <button
            onClick={sendMessage}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 font-medium text-white hover:bg-indigo-500"
          >
            <Send size={16} />
          </button>
          <button
            onClick={() => fileRef.current?.click()}
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/10 px-3 py-2 text-white hover:bg-white/20"
          >
            <ImagePlus size={16} />
            <Video size={16} />
          </button>
          <input ref={fileRef} type="file" multiple accept="image/*,video/*" onChange={handleFiles} className="hidden" />
        </div>
      </div>
    </section>
  );
}
