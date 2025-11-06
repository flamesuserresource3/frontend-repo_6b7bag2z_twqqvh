import { useState } from "react";
import { Play, RefreshCw } from "lucide-react";

const sampleVideos = [
  {
    title: "Highlight Mix 1",
    url: "https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4",
  },
  {
    title: "Highlight Mix 2",
    url: "https://media.w3.org/2010/05/sintel/trailer_hd.mp4",
  },
  {
    title: "Gameplay Brawl Stars",
    url: "https://media.w3.org/2010/05/video/movie_300.mp4",
  },
  {
    title: "Clash Royale Intense",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
  {
    title: "Montage 5",
    url: "https://media.w3.org/2010/05/bunny/movie.mp4",
  },
  {
    title: "Montage 6",
    url: "https://media.w3.org/2010/05/sintel/trailer.mp4",
  },
];

export default function ResultsGallery({ onRestart }) {
  const [selected, setSelected] = useState(0);

  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      <div className="mb-4 flex items-center justify-between">
        <h3 className="text-xl font-semibold text-white">Scegli il risultato</h3>
        <button
          onClick={onRestart}
          className="inline-flex items-center gap-2 rounded-md border border-white/15 bg-white/10 px-3 py-2 text-sm text-white hover:bg-white/20"
        >
          <RefreshCw size={16} /> Ricomincia
        </button>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="aspect-video overflow-hidden rounded-xl border border-white/10 bg-black">
            <video key={selected} src={sampleVideos[selected].url} controls className="h-full w-full object-cover" />
          </div>
          <p className="mt-2 text-sm text-white/70">{sampleVideos[selected].title}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {sampleVideos.map((v, i) => (
            <button
              key={i}
              onClick={() => setSelected(i)}
              className={`group overflow-hidden rounded-lg border ${
                selected === i ? "border-indigo-500" : "border-white/10"
              } bg-white/5`}
            >
              <div className="relative aspect-video">
                <video src={v.url} className="h-full w-full object-cover opacity-80 group-hover:opacity-100" />
                <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition-opacity group-hover:opacity-100">
                  <Play className="text-white" />
                </div>
              </div>
              <div className="p-2 text-left text-xs text-white/80">{v.title}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
