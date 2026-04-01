"use client";

// app/page.tsx
import { useState } from "react";
import ModCard from "../components/ModCard";
import { mods } from "../lib/mods";

const CATEGORIES = ["All", "Trucks", "Maps", "Software"];

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
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/70 to-transparent" />
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
