// components/ModCard.tsx
import Link from "next/link";
import { Download, Star } from "lucide-react";

type ModCardProps = {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  downloadUrl: string;
  rating: number;
  downloads: string;
  version: string;
};

export default function ModCard({
  slug,
  title,
  category,
  thumbnail,
  downloadUrl,
  rating,
  downloads,
  version,
}: ModCardProps) {
  const fullStars = Math.floor(rating);
  const hasHalf = rating - fullStars >= 0.5;

  return (
    <article className="group overflow-hidden rounded-2xl border border-brand-border bg-brand-card shadow-lg shadow-black/30 transition duration-300 hover:-translate-y-1 hover:border-brand-teal/30">

      {/* Thumbnail */}
      <Link href={`/mods/${slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/20 to-transparent" />
          {/* Version badge */}
          <span className="absolute right-3 top-3 rounded-lg border border-brand-teal/20 bg-brand-dark/80 px-2 py-0.5 text-[10px] font-bold tracking-widest text-brand-teal backdrop-blur-sm">
            v{version}
          </span>
        </div>
      </Link>

      <div className="space-y-3 p-4">
        {/* Title + category */}
        <div className="flex items-start justify-between gap-3">
          <Link href={`/mods/${slug}`} className="min-w-0">
            <h2 className="truncate text-sm font-bold text-white transition group-hover:text-brand-teal">
              {title}
            </h2>
          </Link>
          <span className="shrink-0 rounded-full border border-brand-teal/20 bg-brand-teal/10 px-2.5 py-0.5 text-[10px] font-semibold text-brand-teal">
            {category}
          </span>
        </div>

        {/* Rating + downloads */}
        <div className="flex items-center justify-between text-xs text-slate-500">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={`h-3 w-3 ${
                  i < fullStars
                    ? "fill-yellow-400 text-yellow-400"
                    : i === fullStars && hasHalf
                    ? "fill-yellow-400/50 text-yellow-400"
                    : "fill-transparent text-slate-700"
                }`}
              />
            ))}
            <span className="ml-1 font-medium text-slate-400">{rating}</span>
          </div>
          <span>{downloads} downloads</span>
        </div>

        {/* Download button */}
        <a
          href={downloadUrl}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-brand-border bg-brand-dark px-4 py-2.5 text-sm font-bold text-slate-200 transition hover:border-brand-teal hover:bg-brand-teal hover:text-brand-dark"
        >
          <Download className="h-4 w-4" />
          Download
        </a>
      </div>
    </article>
  );
}
