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

    "gallery.title": "Mağazadan kareler",

    "holes.badge": "İlk Uygulama",
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
    "holes.f2.title": "500+ el yapımı seviye",
    "holes.f2.desc":
      "İlerledikçe zorlaşan yüzlerce el yapımı seviye. Hızlı bir meydan okuma ya da sakinleşmek için birebir.",
    "holes.f3.title": "150+ top stili",
    "holes.f3.desc":
      "Klasikler, degradeler, mücevherler, emoji, bayraklar, spor, uzay, rünler ve dahası. Kazandıkça elmas topla, yeni stillerin kilidini aç.",
    "holes.f4.title": "Her yerde, çevrimdışı",
    "holes.f4.desc":
      "Tek el modu ile her yerde rahat oyna. İnternet gerekmez; rahatlatıcı ses tasarımı ve tatmin edici dokunsal his her an seninle.",
    "holes.stat1": "Seviye",
    "holes.stat2": "Top Stili",
    "holes.stat3": "Kontrol Stili",
    "holes.stat4": "Çevrimdışı",
    "holes.status": "App Store'da çok yakında",

    "safeoto.badge": "App Store'da Yayında",
    "safeoto.tagline": "Güvenli · Hızlı · Kolay",
    "safeoto.headline1": "İncele.",
    "safeoto.headline2": "Karşılaştır.",
    "safeoto.headline3": "Güvenle al.",
    "safeoto.intro":
      "Safe Oto, ikinci el otomobil satışı yapan kurumsal ve güvenilir firmaların ilanlarını tek bir platformda toplayarak araç satın alma sürecini daha güvenli, hızlı ve kolay hale getiren yeni nesil bir dijital platform.",
    "safeoto.desc":
      "Farklı kaynaklardaki araç ilanlarını incele, karşılaştır; detaylı araç bilgilerine ve firma üzerinden ekspertiz raporlarına tek noktadan ulaş.",
    "safeoto.f1.title": "Tüm ilanlar tek platformda",
    "safeoto.f1.desc":
      "Kurumsal ve güvenilir firmaların ikinci el ilanları tek bir akışta. Aradığın aracı bulmak için onlarca site gezmene gerek yok.",
    "safeoto.f2.title": "Marka marka, model model",
    "safeoto.f2.desc":
      "Kategoriler, popüler markalar ve tüm modeller parmaklarının ucunda. Bütçene ve zevkine göre hızlı keşif.",
    "safeoto.f3.title": "Karşılaştır, ekspertize bak",
    "safeoto.f3.desc":
      "Farklı kaynaklardaki araçları yan yana karşılaştır, detaylı araç bilgileri ve ekspertiz raporlarıyla kararını güvenle ver.",
    "safeoto.f4.title": "Favoriler ve fiyat takibi",
    "safeoto.f4.desc":
      "İlgini çeken araçları favorilere ekle, fiyat değişimlerini takip et, kaydedilmiş aramalarla güncel ilanları kaçırma.",
    "safeoto.status": "App Store'da yayında",
    "safeoto.download": "App Store'dan İndir",

    "app.copyright": "© 2026 YOZ Apps",

    "soon.title": "Sırada ne var?",
    "soon.desc": "Yeni uygulamalar mutfakta. İpucu yok, sürpriz bol.",
    "soon.card": "Çok Yakında",

    "about.title": "Hakkında",
    "about.desc":
      "Yozapps, Yahya Can Özdemir tarafından geliştirilen uygulamalar için çatı. Öz: sade tasarım, akıcı deneyim, keyifli detaylar.",
    "contact.title": "İletişim",

    "social.title": "Beni takip et",
    "social.appstore": "App Store",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",

    "form.title": "Bana yaz",
    "form.desc": "Soru, fikir ya da sadece selam — mesajın doğrudan mailime düşer.",
    "form.name": "Adın",
    "form.email": "E-posta adresin",
    "form.message": "Mesajın",
    "form.send": "Gönder",
    "form.sending": "Gönderiliyor…",
    "form.sent": "Mesajın ulaştı, teşekkürler!",
    "form.error": "Bir şeyler ters gitti — tekrar dener misin?",

    "footer.made": "eğlenceli, yalın, kullanışlı uygulamalar.",
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

    "gallery.title": "Scenes from the store",

    "holes.badge": "First App",
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
    "holes.f2.title": "500+ handcrafted levels",
    "holes.f2.desc":
      "Hundreds of handcrafted levels that get trickier as you go. Perfect for a quick challenge or a calm way to unwind.",
    "holes.f3.title": "150+ ball skins",
    "holes.f3.desc":
      "Classics, gradients, gems, emoji, flags, sports, space, runes and more. Earn diamonds as you win and unlock new styles.",
    "holes.f4.title": "Anywhere, offline",
    "holes.f4.desc":
      "One-hand mode for comfortable play anywhere. No internet required — with relaxing sound design and a satisfying, tactile feel.",
    "holes.stat1": "Levels",
    "holes.stat2": "Ball Skins",
    "holes.stat3": "Control Styles",
    "holes.stat4": "Offline",
    "holes.status": "Coming soon to the App Store",

    "safeoto.badge": "Live on the App Store",
    "safeoto.tagline": "Safe · Fast · Easy",
    "safeoto.headline1": "Browse.",
    "safeoto.headline2": "Compare.",
    "safeoto.headline3": "Buy with confidence.",
    "safeoto.intro":
      "Safe Oto is a new-generation digital platform that gathers listings from trusted, corporate second-hand car dealers in one place — making car buying safer, faster and easier.",
    "safeoto.desc":
      "Browse and compare listings from different sources, and reach detailed car info and dealer expertise reports from a single point.",
    "safeoto.f1.title": "Every listing, one platform",
    "safeoto.f1.desc":
      "Second-hand listings from trusted corporate dealers in a single feed. No more hopping between dozens of sites to find your car.",
    "safeoto.f2.title": "Brand by brand, model by model",
    "safeoto.f2.desc":
      "Categories, popular brands and every model at your fingertips. Discover fast, by budget and taste.",
    "safeoto.f3.title": "Compare with expert reports",
    "safeoto.f3.desc":
      "Compare cars from different sources side by side, and decide with confidence using detailed car info and expertise reports.",
    "safeoto.f4.title": "Favorites & price tracking",
    "safeoto.f4.desc":
      "Add cars to favorites, track price changes, and never miss fresh listings with saved searches.",
    "safeoto.status": "Now on the App Store",
    "safeoto.download": "Download on the App Store",

    "app.copyright": "© 2026 YOZ Apps",

    "soon.title": "What's next?",
    "soon.desc": "New apps are in the kitchen. No hints — plenty of surprise.",
    "soon.card": "Coming Soon",

    "about.title": "About",
    "about.desc":
      "Yozapps is the home of apps built by Yahya Can Özdemir. In short: minimal design, fluid experience, delightful details.",
    "contact.title": "Contact",

    "social.title": "Follow me",
    "social.appstore": "App Store",
    "social.linkedin": "LinkedIn",
    "social.github": "GitHub",

    "form.title": "Write to me",
    "form.desc":
      "A question, an idea or just a hello — your message lands straight in my inbox.",
    "form.name": "Your name",
    "form.email": "Your email",
    "form.message": "Your message",
    "form.send": "Send",
    "form.sending": "Sending…",
    "form.sent": "Message received — thank you!",
    "form.error": "Something went wrong — mind trying again?",

    "footer.made": "fun, simple, useful apps.",
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
