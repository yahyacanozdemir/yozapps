import type { ShowcaseConfig } from "@/components/AppShowcase";

export const holesConfig: ShowcaseConfig = {
  id: "holes",
  prefix: "holes",
  letters: "HOLES",
  icon: "/holes/icon.png",
  introPhone: "/holes/raw/1.png",
  featureImages: [
    "/holes/raw/2.png",
    "/holes/raw/4.png",
    "/holes/raw/5.png",
    "/holes/raw/6.png",
  ],
  gallery: [
    "/holes/screen-1.png",
    "/holes/screen-2.png",
    "/holes/screen-3.png",
    "/holes/screen-4.png",
    "/holes/screen-5.png",
    "/holes/screen-6.png",
  ],
  keywords: [
    "balance", "tilt", "escape", "arcade", "reflex", "physics",
    "relax", "one hand", "gyro", "casual", "skill", "levels",
  ],
  stats: [
    { v: 500, s: "+", labelKey: "holes.stat1" },
    { v: 150, s: "+", labelKey: "holes.stat2" },
    { v: 5, s: "", labelKey: "holes.stat3" },
    { v: 100, s: "%", labelKey: "holes.stat4" },
  ],
};

export const safeotoConfig: ShowcaseConfig = {
  id: "safeoto",
  prefix: "safeoto",
  letters: "SAFE OTO",
  icon: "/safeoto/icon.jpg",
  introPhone: "/safeoto/ss/splash.jpg",
  featureImages: [
    "/safeoto/ss/1.jpg",
    "/safeoto/ss/3.jpg",
    "/safeoto/ss/5.jpg",
    "/safeoto/ss/2.jpg",
  ],
  gallery: [
    "/safeoto/store/cover.jpg",
    "/safeoto/store/1.jpg",
    "/safeoto/store/2.jpg",
    "/safeoto/store/3.jpg",
    "/safeoto/store/4.jpg",
    "/safeoto/store/5.jpg",
    "/safeoto/store/6.jpg",
    "/safeoto/store/7.jpg",
    "/safeoto/store/8.jpg",
    "/safeoto/store/9.jpg",
  ],
  keywords: [
    "ikinci el", "kurumsal", "güvenilir", "karşılaştır", "ekspertiz",
    "favoriler", "fiyat takibi", "tek platform", "safe oto",
  ],
  storeUrl: "https://apps.apple.com/tr/app/safe-oto/id6763045878",
};
