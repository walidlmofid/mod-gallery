"use client";

// app/page.tsx
import { useState } from "react";
import ModCard from "../components/ModCard";

const CATEGORIES = ["All", "Trucks", "Maps", "Software"];

const mods = [
  {
    slug: "volvo-fh16-ultimate",
    title: "Volvo FH16 Ultimate",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    rating: 4.8,
    downloads: "12.4k",
    version: "2.1.0",
  },
  {
    slug: "nordic-expansion-map",
    title: "Nordic Expansion Map",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    rating: 4.5,
    downloads: "8.7k",
    version: "1.3.2",
  },
  {
    slug: "fleet-manager-pro",
    title: "Fleet Manager Pro",
    category: "Software",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    rating: 4.2,
    downloads: "5.1k",
    version: "3.0.1",
  },
  {
    slug: "scania-rs-pack",
    title: "Scania RS Pack",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    rating: 4.9,
    downloads: "21.0k",
    version: "1.8.0",
  },
  {
    slug: "desert-roads-map",
    title: "Desert Roads Map",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    rating: 4.3,
    downloads: "6.2k",
    version: "1.1.0",
  },
  {
    slug: "physics-tuner-x",
    title: "Physics Tuner X",
    category: "Software",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    rating: 4.6,
    downloads: "9.3k",
    version: "4.2.1",
  },
  {
    slug: "man-tgx-evo",
    title: "MAN TGX EVO",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    rating: 4.7,
    downloads: "14.8k",
    version: "2.5.0",
  },
  {
    slug: "alpine-routes-pack",
    title: "Alpine Routes Pack",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    rating: 4.4,
    downloads: "7.5k",
    version: "1.0.3",
  },
];

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? mods
      : mods.filter((m) => m.category === activeCategory);

  return (
    <section className="space-y-8">

      {/* Hero Banner */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-border">
        <img
          src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80"
          alt="Hero"
          className="h-64 w-full object-cover sm:h-80"
        />
        {/* dark gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
        {/* hero text */}
        <div className="absolute inset-0 flex flex-col justify-center px-8">
          <p className="mb-2 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-brand-teal">
            <span className="inline-block h-1.5 w-1.5 rounded-full bg-orange-400" />
            Make your favorite mods easy to find
          </p>
          <h1 className="max-w-md text-2xl font-extrabold leading-tight text-white sm:text-3xl">
            Industrial-grade gallery for game modifications
          </h1>
          <p className="mt-2 max-w-sm text-sm text-slate-400">
            Browse premium trucks, maps, and tools built for serious players.
          </p>
        </div>
      </div>

      {/* Category Filter Tabs */}
      <div className="flex flex-wrap gap-2">
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              activeCategory === cat
                ? "bg-brand-teal text-brand-dark"
                : "border border-brand-border bg-brand-card text-slate-400 hover:border-brand-teal/40 hover:text-brand-teal"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Mod Grid */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {filtered.map((mod) => (
          <ModCard
            key={mod.slug}
            slug={mod.slug}
            title={mod.title}
            category={mod.category}
            thumbnail={mod.thumbnail}
            downloadUrl={mod.downloadUrl}
            rating={mod.rating}
            downloads={mod.downloads}
            version={mod.version}
          />
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="py-16 text-center text-sm text-slate-600">
          No mods found in this category.
        </p>
      )}

    </section>
  );
}
