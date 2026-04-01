"use client";

import { useParams, notFound } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import { Download, ChevronLeft, ChevronRight, Star, ArrowLeft } from "lucide-react";
import { getModBySlug } from "../../../lib/mods";

export default function ModDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === "string" ? params.slug : "";
  const mod = getModBySlug(slug);

  const [activeImage, setActiveImage] = useState(0);

  if (!mod) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-center">
        <p className="text-2xl font-bold text-white">Mod not found</p>
        <p className="mt-2 text-sm text-slate-500">
          The mod you are looking for does not exist.
        </p>
        <Link
          href="/"
          className="mt-6 rounded-xl bg-brand-teal px-6 py-2.5 text-sm font-bold text-brand-dark"
        >
          Back to Gallery
        </Link>
      </div>
    );
  }

  const fullStars = Math.floor(mod.rating);
  const hasHalf = mod.rating - fullStars >= 0.5;

  function prevImage() {
    setActiveImage((i) => (i === 0 ? mod!.images.length - 1 : i - 1));
  }
  function nextImage() {
    setActiveImage((i) => (i === mod!.images.length - 1 ? 0 : i + 1));
  }

  const metaRows = [
    { label: "Updated Date", value: mod.updatedDate, label2: "Mod Name",      value2: mod.title },
    { label: "Latest Version", value: mod.version,   label2: "Category",      value2: mod.category },
    { label: "Author",         value: mod.author,    label2: "Compatible With",value2: mod.compatibleWith },
    { label: "Mod Features",   value: mod.modFeatures,label2: "File Size",    value2: mod.fileSize },
  ];

  return (
    <div className="mx-auto max-w-2xl space-y-6">

      {/* Back link */}
      <Link
        href="/"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-500 transition hover:text-brand-teal"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Gallery
      </Link>

      {/* Image Slider */}
      <div className="relative overflow-hidden rounded-2xl border border-brand-border bg-brand-card">
        <div className="relative aspect-video w-full overflow-hidden">
          <img
            src={mod.images[activeImage]}
            alt={`${mod.title} screenshot ${activeImage + 1}`}
            className="h-full w-full object-cover transition duration-300"
          />
          {/* Gradient overlay at bottom */}
          <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-brand-dark to-transparent" />
        </div>

        {/* Prev / Next arrows */}
        {mod.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full border border-brand-border bg-brand-dark/80 p-2 text-white backdrop-blur transition hover:border-brand-teal hover:text-brand-teal"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full border border-brand-border bg-brand-dark/80 p-2 text-white backdrop-blur transition hover:border-brand-teal hover:text-brand-teal"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </>
        )}

        {/* Dot indicators */}
        {mod.images.length > 1 && (
          <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-1.5">
            {mod.images.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveImage(i)}
                className={`h-1.5 rounded-full transition-all ${
                  i === activeImage
                    ? "w-5 bg-brand-teal"
                    : "w-1.5 bg-slate-600 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Mod icon + title */}
      <div className="flex items-center gap-4">
        <div className="h-16 w-16 shrink-0 overflow-hidden rounded-2xl border border-brand-border">
          <img
            src={mod.thumbnail}
            alt={mod.title}
            className="h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="text-xl font-extrabold text-white">{mod.title}</h1>
          <p className="text-sm text-slate-500">{mod.description}</p>
        </div>
      </div>

      {/* Download buttons — identical style to ModxNet */}
      <div className="space-y-3">
        <a
          href={mod.downloadUrl}
          className="flex w-full items-center justify-center gap-2 rounded-2xl bg-brand-teal py-3.5 text-sm font-bold text-brand-dark transition hover:brightness-110"
        >
          <Download className="h-4 w-4" />
          Download Mod
        </a>
        <a
          href={mod.mirrorUrl}
          className="flex w-full items-center justify-center gap-2 rounded-2xl border border-brand-teal bg-transparent py-3.5 text-sm font-bold text-brand-teal transition hover:bg-brand-teal hover:text-brand-dark"
        >
          <Download className="h-4 w-4" />
          Mirror Download
        </a>
      </div>

      {/* Mod Information card */}
      <div className="overflow-hidden rounded-2xl border border-brand-border bg-brand-card">
        {/* Header */}
        <div className="border-b border-brand-border px-5 py-4">
          <h2 className="text-base font-bold text-brand-teal">Mod Information</h2>
        </div>

        {/* Metadata grid */}
        <div className="divide-y divide-brand-border">
          {metaRows.map((row, i) => (
            <div key={i} className="grid grid-cols-2 divide-x divide-brand-border">
              <div className="px-5 py-4">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                  {row.label}
                </p>
                <p className="text-sm font-medium text-white">{row.value}</p>
              </div>
              <div className="px-5 py-4">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                  {row.label2}
                </p>
                <p className="text-sm font-medium text-white">{row.value2}</p>
              </div>
            </div>
          ))}

          {/* "Get it on" row */}
          <div className="grid grid-cols-2 divide-x divide-brand-border">
            <div className="px-5 py-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                Get it on
              </p>
              <p className="text-sm font-bold text-brand-teal">ModGallery</p>
            </div>
            <div className="px-5 py-4">
              <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-slate-600">
                Downloads
              </p>
              <p className="text-sm font-medium text-white">{mod.downloads}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Rating section */}
      <div className="flex flex-col items-center gap-2 rounded-2xl border border-brand-border bg-brand-card py-8">
        <div className="flex items-center gap-1.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-7 w-7 ${
                i < fullStars
                  ? "fill-yellow-400 text-yellow-400"
                  : i === fullStars && hasHalf
                  ? "fill-yellow-400/50 text-yellow-400"
                  : "fill-transparent text-slate-700"
              }`}
            />
          ))}
        </div>
        <p className="text-3xl font-extrabold text-white">{mod.rating}</p>
        <p className="text-sm text-slate-500">
          {mod.votes.toLocaleString()} votes
        </p>
      </div>

    </div>
  );
}
