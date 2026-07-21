"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "tr" | "en";

const dict = {
  tr: {
    "nav.apps": "Uygulamalar",
    "nav.about": "Hakkında",
    "nav.contact": "İletişim",
    "hero.kicker": "Yahya Özdemir Apps",
    "hero.title1": "Fikirden",
    "hero.title2": "uygulamaya.",
    "hero.subtitle":
      "Mobil için özenle geliştirilen, oynaması keyifli, tasarımı sade uygulamalar.",
    "hero.cta": "Uygulamaları Keşfet",
    "hero.scroll": "Kaydır",

    "holes.badge": "İlk Uygulama",
    "holes.name": "HOLES",
    "holes.tagline": "Tilt · Balance · Escape",
    "holes.headline1": "Eğ.",
    "holes.headline2": "Dengede tut.",
    "holes.headline3": "Kaç.",
    "holes.intro":
      "Holes, tek bir basit ve bağımlılık yapan fikir üzerine kurulu minimalist bir denge oyunu: telefonunu eğerek topu çubuk üzerinde yuvarla, dengeni koru ve deliklerden kaç.",
    "holes.desc":
      "Kulağa kolay mı geliyor? Çubuk eğilir, delikler yer değiştirir ve tek bir yanlış hareket topunu boşluğa yuvarlar. Fiziğe hükmet, ritmini bul ve saf refleks testi seviyeleri birer birer geç.",
    "holes.f1.title": "Saniyeler içinde öğren",
    "holes.f1.desc":
      "Herkesin saniyeler içinde kapabileceği eğ-ve-oyna kontroller. Tilt, joystick, gyro ve ekran tuşları dahil birden çok kontrol stili.",
    "holes.f2.title": "Ustalık isteyen seviyeler",
    "holes.f2.desc":
      "İlerledikçe zorlaşan onlarca el yapımı seviye. Hızlı bir meydan okuma ya da sakinleşmek için birebir.",
    "holes.f3.title": "Yüzlerce top stili",
    "holes.f3.desc":
      "Klasikler, degradeler, mücevherler, emoji, bayraklar, spor, uzay, rünler ve dahası. Kazandıkça elmas topla, yeni stillerin kilidini aç.",
    "holes.f4.title": "Her yerde, çevrimdışı",
    "holes.f4.desc":
      "Tek el modu ile her yerde rahat oyna. İnternet gerekmez; rahatlatıcı ses tasarımı ve tatmin edici dokunsal his her an seninle.",
    "holes.gallery.title": "Oyundan kareler",
    "holes.stat1": "Seviye",
    "holes.stat2": "Top Stili",
    "holes.stat3": "Kontrol Stili",
    "holes.stat4": "Çevrimdışı",
    "holes.status": "App Store'da çok yakında",
    "holes.copyright": "© 2026 YOZ Apps",

    "soon.title": "Sırada ne var?",
    "soon.desc":
      "Yeni uygulamalar mutfakta. İpucu yok, sürpriz bol.",
    "soon.card": "Çok Yakında",
    "soon.hint": "Sürpriz",

    "about.title": "Hakkında",
    "about.desc":
      "yozapps, Yahya Özdemir tarafından geliştirilen uygulamaların çatısı. Az ama öz: sade tasarım, akıcı deneyim, keyifli detaylar.",
    "contact.title": "İletişim",
    "footer.made": "İstanbul'da sevgiyle geliştirildi.",
  },
  en: {
    "nav.apps": "Apps",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.kicker": "Yahya Ozdemir Apps",
    "hero.title1": "From idea",
    "hero.title2": "to app.",
    "hero.subtitle":
      "Carefully crafted mobile apps — delightful to play, minimal by design.",
    "hero.cta": "Explore the Apps",
    "hero.scroll": "Scroll",

    "holes.badge": "First App",
    "holes.name": "HOLES",
    "holes.tagline": "Tilt · Balance · Escape",
    "holes.headline1": "Tilt.",
    "holes.headline2": "Balance.",
    "holes.headline3": "Escape.",
    "holes.intro":
      "Holes is a minimalist balance game built around one simple, addictive idea: tilt your device to roll the ball along the bar, keep your balance, and escape the holes.",
    "holes.desc":
      "Sounds easy? The bar tilts, the holes shift, and a single slip sends your ball tumbling. Master the physics, find your rhythm, and clear level after level of pure, reflex-testing fun.",
    "holes.f1.title": "Learn in seconds",
    "holes.f1.desc":
      "Simple tilt-to-play controls anyone can pick up in seconds. Multiple control styles: tilt, joystick, gyro and on-screen buttons.",
    "holes.f2.title": "Levels that demand mastery",
    "holes.f2.desc":
      "Dozens of handcrafted levels that get trickier as you go. Perfect for a quick challenge or a calm way to unwind.",
    "holes.f3.title": "Hundreds of ball skins",
    "holes.f3.desc":
      "Classics, gradients, gems, emoji, flags, sports, space, runes and more. Earn diamonds as you win and unlock new styles.",
    "holes.f4.title": "Anywhere, offline",
    "holes.f4.desc":
      "One-hand mode for comfortable play anywhere. No internet required — with relaxing sound design and a satisfying, tactile feel.",
    "holes.gallery.title": "Scenes from the game",
    "holes.stat1": "Levels",
    "holes.stat2": "Ball Skins",
    "holes.stat3": "Control Styles",
    "holes.stat4": "Offline",
    "holes.status": "Coming soon to the App Store",
    "holes.copyright": "© 2026 YOZ Apps",

    "soon.title": "What's next?",
    "soon.desc": "New apps are in the kitchen. No hints — plenty of surprise.",
    "soon.card": "Coming Soon",
    "soon.hint": "Surprise",

    "about.title": "About",
    "about.desc":
      "yozapps is the home of apps built by Yahya Ozdemir. Less but better: minimal design, fluid experience, delightful details.",
    "contact.title": "Contact",
    "footer.made": "Built with love in Istanbul.",
  },
} as const;

export type DictKey = keyof (typeof dict)["tr"];

const LangContext = createContext<{
  lang: Lang;
  setLang: (l: Lang) => void;
  t: (k: DictKey) => string;
}>({ lang: "tr", setLang: () => {}, t: (k) => k });

export function LangProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = useState<Lang>("tr");

  useEffect(() => {
    const saved = localStorage.getItem("yoz-lang") as Lang | null;
    if (saved === "tr" || saved === "en") setLangState(saved);
    else if (!navigator.language.toLowerCase().startsWith("tr"))
      setLangState("en");
  }, []);

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("yoz-lang", l);
    document.documentElement.lang = l;
  };

  const t = (k: DictKey) => dict[lang][k] ?? k;

  return (
    <LangContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LangContext.Provider>
  );
}

export const useLang = () => useContext(LangContext);
