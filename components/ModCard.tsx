// components/ModCard.tsx
import Link from "next/link";
import { Download } from "lucide-react";

type ModCardProps = {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  downloadUrl: string;
};

export default function ModCard({
  slug,
  title,
  category,
  thumbnail,
  downloadUrl,
}: ModCardProps) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-slate-700">
      <Link href={`/mods/${slug}`} className="block">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
        </div>
      </Link>

      <div className="space-y-4 p-4">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <Link href={`/mods/${slug}`}>
              <h2 className="truncate text-base font-semibold text-white transition group-hover:text-cyan-400">
                {title}
              </h2>
            </Link>
          </div>

          <span className="shrink-0 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-2.5 py-1 text-xs font-medium text-cyan-300">
            {category}
          </span>
        </div>

        <a
          href={downloadUrl}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:bg-cyan-500 hover:text-slate-950"
        >
          <Download className="h-4 w-4" />
          Download
        </a>
      </div>
    </article>
  );
}
