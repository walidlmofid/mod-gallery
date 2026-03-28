// app/page.tsx
import ModCard from "../components/ModCard";

const mods = [
  {
    slug: "volvo-fh16-ultimate",
    title: "Volvo FH16 Ultimate",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
  },
  {
    slug: "nordic-expansion-map",
    title: "Nordic Expansion Map",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
  },
  {
    slug: "fleet-manager-pro",
    title: "Fleet Manager Pro",
    category: "Software",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
  },
  {
    slug: "scania-rs-pack",
    title: "Scania RS Pack",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
  },
  {
    slug: "desert-roads-map",
    title: "Desert Roads Map",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
  },
  {
    slug: "physics-tuner-x",
    title: "Physics Tuner X",
    category: "Software",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
  },
  {
    slug: "man-tgx-evo",
    title: "MAN TGX EVO",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
  },
  {
    slug: "alpine-routes-pack",
    title: "Alpine Routes Pack",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
  },
];

export default function HomePage() {
  return (
    <section className="space-y-8">
      <div className="space-y-3">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-cyan-400">
          Mod Hub
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Industrial-grade gallery for game modifications
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-400 sm:text-base">
          Browse premium-quality trucks, maps, and utility software in a dark,
          high-performance catalog experience designed for fast discovery.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-4">
        {mods.map((mod) => (
          <ModCard
            key={mod.slug}
            slug={mod.slug}
            title={mod.title}
            category={mod.category}
            thumbnail={mod.thumbnail}
            downloadUrl={mod.downloadUrl}
          />
        ))}
      </div>
    </section>
  );
}
