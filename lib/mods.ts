// lib/mods.ts — single source of truth for all mod data

export type Mod = {
  slug: string;
  title: string;
  category: string;
  thumbnail: string;
  downloadUrl: string;
  mirrorUrl: string;
  rating: number;
  votes: number;
  downloads: string;
  version: string;
  // Detail page
  description: string;
  updatedDate: string;
  author: string;
  compatibleWith: string;
  fileSize: string;
  modFeatures: string;
  images: string[];
};

export const mods: Mod[] = [
  {
    slug: "volvo-fh16-ultimate",
    title: "Volvo FH16 Ultimate",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    mirrorUrl: "#",
    rating: 4.8,
    votes: 8320,
    downloads: "12.4k",
    version: "2.1.0",
    description: "The most detailed Volvo FH16 mod available, featuring custom interior, engine sounds, and realistic suspension.",
    updatedDate: "March 10, 2026",
    author: "TruckModder_EU",
    compatibleWith: "ETS2 1.49+",
    fileSize: "87 MB",
    modFeatures: "Custom Interior, Realistic Sounds, All Variants Unlocked",
    images: [
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "nordic-expansion-map",
    title: "Nordic Expansion Map",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    mirrorUrl: "#",
    rating: 4.5,
    votes: 5140,
    downloads: "8.7k",
    version: "1.3.2",
    description: "Explore a massive Nordic region with snowy roads, fjords, and new cities across 3 new countries.",
    updatedDate: "February 28, 2026",
    author: "NordicMapCrew",
    compatibleWith: "ETS2 1.48+",
    fileSize: "430 MB",
    modFeatures: "3 New Countries, 15 Cities, Custom Weather",
    images: [
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "fleet-manager-pro",
    title: "Fleet Manager Pro",
    category: "Software",
    thumbnail:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    mirrorUrl: "#",
    rating: 4.2,
    votes: 2870,
    downloads: "5.1k",
    version: "3.0.1",
    description: "Advanced fleet management tool with real-time tracking, profit analytics, and driver assignment.",
    updatedDate: "January 20, 2026",
    author: "DevStudio_RO",
    compatibleWith: "Windows 10/11",
    fileSize: "22 MB",
    modFeatures: "Real-time Analytics, Driver Management, Export Reports",
    images: [
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "scania-rs-pack",
    title: "Scania RS Pack",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    mirrorUrl: "#",
    rating: 4.9,
    votes: 14500,
    downloads: "21.0k",
    version: "1.8.0",
    description: "Complete Scania R & S series pack with all cabin types, chassis variants, and paintjob support.",
    updatedDate: "March 18, 2026",
    author: "ScaniaFans_DE",
    compatibleWith: "ETS2 1.49+",
    fileSize: "195 MB",
    modFeatures: "All Cabin Types, Custom Paint, Tuning Parts Unlocked",
    images: [
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "desert-roads-map",
    title: "Desert Roads Map",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    mirrorUrl: "#",
    rating: 4.3,
    votes: 3210,
    downloads: "6.2k",
    version: "1.1.0",
    description: "Vast desert expansion with long highway stretches, remote outposts, and intense heat haze effects.",
    updatedDate: "February 5, 2026",
    author: "SandstormMaps",
    compatibleWith: "ATS 1.49+",
    fileSize: "310 MB",
    modFeatures: "Custom Terrain, Heat Effects, 8 New Cities",
    images: [
      "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "physics-tuner-x",
    title: "Physics Tuner X",
    category: "Software",
    thumbnail:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    mirrorUrl: "#",
    rating: 4.6,
    votes: 4980,
    downloads: "9.3k",
    version: "4.2.1",
    description: "Fine-tune your truck physics with a real-time editor for suspension, weight distribution, and brake force.",
    updatedDate: "March 1, 2026",
    author: "PhysX_Labs",
    compatibleWith: "ETS2 / ATS 1.47+",
    fileSize: "14 MB",
    modFeatures: "Real-time Editor, Preset Profiles, One-click Reset",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "man-tgx-evo",
    title: "MAN TGX EVO",
    category: "Trucks",
    thumbnail:
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    mirrorUrl: "#",
    rating: 4.7,
    votes: 9100,
    downloads: "14.8k",
    version: "2.5.0",
    description: "The next-generation MAN TGX EVO with fully modeled cab, animated parts, and premium sound pack.",
    updatedDate: "March 22, 2026",
    author: "MAN_Modworks",
    compatibleWith: "ETS2 1.49+",
    fileSize: "120 MB",
    modFeatures: "Animated Mirrors, Custom Sounds, Interior Lights",
    images: [
      "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1494412519320-aa613dfb7738?auto=format&fit=crop&w=1600&q=80",
    ],
  },
  {
    slug: "alpine-routes-pack",
    title: "Alpine Routes Pack",
    category: "Maps",
    thumbnail:
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80",
    downloadUrl: "#",
    mirrorUrl: "#",
    rating: 4.4,
    votes: 4120,
    downloads: "7.5k",
    version: "1.0.3",
    description: "Breathtaking Alpine routes with hairpin bends, mountain passes, and realistic seasonal weather.",
    updatedDate: "February 14, 2026",
    author: "AlpineModTeam",
    compatibleWith: "ETS2 1.48+",
    fileSize: "275 MB",
    modFeatures: "Seasonal Weather, Hairpin Roads, Scenic Viewpoints",
    images: [
      "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=80",
      "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80",
    ],
  },
];

export function getModBySlug(slug: string): Mod | undefined {
  return mods.find((m) => m.slug === slug);
}
