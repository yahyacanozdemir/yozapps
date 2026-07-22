"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type Lang = "tr" | "en";

const dict = {
  tr: {
    "nav.home": "Ana Sayfa",
    "nav.apps": "Uygulamalar",
    "nav.projects": "Projeler",
    "nav.about": "Hakkında",
    "nav.contact": "İletişim",

    slogan: "Yenilikçi, Özgün, Zarif uygulamalar.",

    "home.kicker": "Mobil Uygulama Stüdyosu",
    "home.h1a": "Yenilikçi.",
    "home.h1b": "Özgün.",
    "home.h1c": "Zarif.",
    "home.sub":
      "Yozapps, mobil odaklı bağımsız bir uygulama stüdyosu. Kurumsallaşma yolunda ilerleyen genç bir girişimiz; fikirleri özenle, uçtan uca ürüne dönüştürüyoruz.",
    "home.cta1": "Uygulamalarımız",
    "home.cta2": "Projelerimiz",
    "home.scroll": "Kaydır",
    "home.stat1": "Uygulama",
    "home.stat2": "Mobil Proje",
    "home.stat3": "Yıl Deneyim",
    "home.stat4": "Platform",
    "home.apps.title": "Uygulamalarımız",
    "home.apps.desc":
      "Tasarımından koduna her detayına emek verdiğimiz, mağazadaki işlerimiz.",
    "home.values.title": "Değerlerimiz",
    "home.values.desc":
      "İsmimiz, değerlerimizin baş harflerinden geliyor.",
    "values.y.t": "Yenilikçi",
    "values.y.d":
      "Her üründe yeni bir fikrin, taze bir yaklaşımın peşindeyiz. Denenmişi tekrar etmek yerine kendi yolumuzu çiziyoruz.",
    "values.o.t": "Özgün",
    "values.o.d":
      "Tasarımdan etkileşime her detayı kendimiz kurguluyoruz. Şablon değil, karakter sahibi ürünler geliştiriyoruz.",
    "values.z.t": "Zarif",
    "values.z.d":
      "Sadelik bizim için bir tercih değil, ilke. Az ama öz; akıcı, dengeli ve göze huzur veren deneyimler sunuyoruz.",

    "teaser.holes.line": "Minimalist denge oyunu: eğ, dengede tut, kaç.",
    "teaser.safeoto.line":
      "Kurumsal ikinci el ilanları tek platformda: incele, karşılaştır, güvenle al.",
    "teaser.cta": "Detayları Gör",
    "teaser.soon.title": "Sırada ne var?",
    "teaser.soon.desc": "Yeni uygulamalarımız mutfakta. İpucu yok, sürpriz bol.",
    "teaser.soon.card": "Çok Yakında",

    "gallery.title": "App Store'dan kareler",

    "holes.badge": "İlk Oyunumuz",
    "holes.tagline": "Tilt · Balance · Escape",
    "holes.headline1": "Eğ.",
    "holes.headline2": "Dengede tut.",
    "holes.headline3": "Kaç.",
    "holes.intro":
      "Holes, tek bir basit ve bağımlılık yapan fikir üzerine kurduğumuz minimalist bir denge oyunu: telefonunu eğerek topu çubuk üzerinde yuvarla, dengeni koru ve deliklerden kaç.",
    "holes.desc":
      "Kulağa kolay mı geliyor? Çubuk eğilir, delikler yer değiştirir ve tek bir yanlış hareket topu boşluğa yuvarlar. Fiziğe hükmedin, ritminizi bulun ve saf refleks testi seviyeleri birer birer geçin.",
    "holes.f1.title": "Saniyeler içinde öğrenin",
    "holes.f1.desc":
      "Herkesin saniyeler içinde kapabileceği eğ-ve-oyna kontroller. Tilt, joystick, gyro ve ekran tuşları dahil birden çok kontrol stili.",
    "holes.f2.title": "500+ el yapımı seviye",
    "holes.f2.desc":
      "İlerledikçe zorlaşan, tek tek elle tasarladığımız yüzlerce seviye. Hızlı bir meydan okuma ya da sakinleşmek için birebir.",
    "holes.f3.title": "150+ top stili",
    "holes.f3.desc":
      "Klasikler, degradeler, mücevherler, emoji, bayraklar, spor, uzay, rünler ve dahası. Kazandıkça elmas toplayın, yeni stillerin kilidini açın.",
    "holes.f4.title": "Her yerde, çevrimdışı",
    "holes.f4.desc":
      "Tek el modu ile her yerde rahat oynayın. İnternet gerekmez; rahatlatıcı ses tasarımı ve tatmin edici dokunsal his her an sizinle.",
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
      "Farklı kaynaklardaki araç ilanlarını inceleyin, karşılaştırın; detaylı araç bilgilerine ve firma üzerinden ekspertiz raporlarına tek noktadan ulaşın.",
    "safeoto.f1.title": "Tüm ilanlar tek platformda",
    "safeoto.f1.desc":
      "Kurumsal ve güvenilir firmaların ikinci el ilanları tek bir akışta. Aradığınız aracı bulmak için onlarca site gezmenize gerek yok.",
    "safeoto.f2.title": "Marka marka, model model",
    "safeoto.f2.desc":
      "Kategoriler, popüler markalar ve tüm modeller parmaklarınızın ucunda. Bütçenize ve zevkinize göre hızlı keşif.",
    "safeoto.f3.title": "Karşılaştırın, ekspertize bakın",
    "safeoto.f3.desc":
      "Farklı kaynaklardaki araçları yan yana karşılaştırın; detaylı araç bilgileri ve ekspertiz raporlarıyla kararınızı güvenle verin.",
    "safeoto.f4.title": "Favoriler ve fiyat takibi",
    "safeoto.f4.desc":
      "İlginizi çeken araçları favorilere ekleyin, fiyat değişimlerini takip edin, kaydedilmiş aramalarla güncel ilanları kaçırmayın.",
    "safeoto.status": "App Store'da yayında",
    "safeoto.download": "App Store'dan İndir",

    "app.copyright": "© 2026 Yozapps",
    "detail.back": "Tüm Uygulamalar",
    "detail.next": "Diğer uygulamamız",

    "projects.kicker": "Yolculuğumuz",
    "projects.title": "Yıllara Göre Projeler",
    "projects.desc":
      "Yozapps'e uzanan yolda geliştirdiğimiz mobil projeler. Her satır kod, bugünkü ürün anlayışımızın bir tuğlası oldu.",
    "projects.github": "GitHub'da İncele",
    "projects.appstore": "App Store'da Gör",
    "projects.soon": "Yayına hazırlanıyor",
    "projects.count": "proje",
    "projects.cta.title": "Bir sonraki projeyi birlikte konuşalım",
    "projects.cta.btn": "Bize Ulaşın",

    "about.title": "Hakkında",
    "about.p1":
      "Yozapps, mobil odaklı bağımsız bir uygulama stüdyosu. Kurumsallaşma yolunda ilerleyen genç bir girişim olarak, kullanıcıların her gün severek açacağı ürünler geliştiriyoruz.",
    "about.p2":
      "2020'den bu yana Android, iOS ve Flutter ekosistemlerinde ürettiğimiz projelerin birikimiyle, bugün uygulamalarımızı App Store'da dünyayla buluşturuyoruz. Küçük bir ekibin özeniyle, büyük bir stüdyonun disipliniyle çalışıyoruz.",
    "about.founder": "Kurucu",
    "about.end": "Özümüz, ismimizde saklı:",

    "contact.title": "Bize Ulaşın",
    "contact.desc":
      "İş birliği, öneri ya da sadece merhaba — mesajınız doğrudan ekibimize ulaşır.",
    "social.title": "Bizi takip edin",

    "form.name": "Adınız",
    "form.email": "E-posta adresiniz",
    "form.message": "Mesajınız",
    "form.send": "Gönder",
    "form.sending": "Gönderiliyor…",
    "form.sent": "Mesajınız ulaştı, teşekkürler!",
    "form.error": "Bir şeyler ters gitti — tekrar dener misiniz?",
  },
  en: {
    "nav.home": "Home",
    "nav.apps": "Apps",
    "nav.projects": "Projects",
    "nav.about": "About",
    "nav.contact": "Contact",

    slogan: "Innovative, Original, Elegant apps.",

    "home.kicker": "Mobile App Studio",
    "home.h1a": "Innovative.",
    "home.h1b": "Original.",
    "home.h1c": "Elegant.",
    "home.sub":
      "Yozapps is an independent, mobile-first app studio. We are a young venture on the road to becoming an established company — turning ideas into polished products, end to end.",
    "home.cta1": "Our Apps",
    "home.cta2": "Our Projects",
    "home.scroll": "Scroll",
    "home.stat1": "Apps",
    "home.stat2": "Mobile Projects",
    "home.stat3": "Years of Craft",
    "home.stat4": "Platforms",
    "home.apps.title": "Our Apps",
    "home.apps.desc":
      "The work we ship to the store — crafted down to the last detail, from design to code.",
    "home.values.title": "Our Values",
    "home.values.desc": "Our name comes from the initials of our values.",
    "values.y.t": "Yenilikçi — Innovative",
    "values.y.d":
      "We chase a fresh idea in every product. Instead of repeating the proven, we draw our own path.",
    "values.o.t": "Özgün — Original",
    "values.o.d":
      "We craft every detail ourselves, from design to interaction. Products with character — not templates.",
    "values.z.t": "Zarif — Elegant",
    "values.z.d":
      "Simplicity is a principle, not a preference. Less but better; fluid, balanced, easy on the eye.",

    "teaser.holes.line": "A minimalist balance game: tilt, balance, escape.",
    "teaser.safeoto.line":
      "Corporate second-hand car listings on one platform: browse, compare, buy with confidence.",
    "teaser.cta": "View Details",
    "teaser.soon.title": "What's next?",
    "teaser.soon.desc": "New apps are in the kitchen. No hints — plenty of surprise.",
    "teaser.soon.card": "Coming Soon",

    "gallery.title": "Scenes from the App Store",

    "holes.badge": "Our First Game",
    "holes.tagline": "Tilt · Balance · Escape",
    "holes.headline1": "Tilt.",
    "holes.headline2": "Balance.",
    "holes.headline3": "Escape.",
    "holes.intro":
      "Holes is a minimalist balance game we built around one simple, addictive idea: tilt your device to roll the ball along the bar, keep your balance, and escape the holes.",
    "holes.desc":
      "Sounds easy? The bar tilts, the holes shift, and a single slip sends the ball tumbling. Master the physics, find your rhythm, and clear level after level of pure, reflex-testing fun.",
    "holes.f1.title": "Learn in seconds",
    "holes.f1.desc":
      "Simple tilt-to-play controls anyone can pick up in seconds. Multiple control styles: tilt, joystick, gyro and on-screen buttons.",
    "holes.f2.title": "500+ handcrafted levels",
    "holes.f2.desc":
      "Hundreds of levels we designed by hand, getting trickier as you go. Perfect for a quick challenge or a calm way to unwind.",
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

    "app.copyright": "© 2026 Yozapps",
    "detail.back": "All Apps",
    "detail.next": "Our other app",

    "projects.kicker": "Our Journey",
    "projects.title": "Projects by Year",
    "projects.desc":
      "The mobile projects we built on the road to Yozapps. Every line of code became a brick in the product mindset we have today.",
    "projects.github": "View on GitHub",
    "projects.appstore": "See on the App Store",
    "projects.soon": "Preparing for release",
    "projects.count": "projects",
    "projects.cta.title": "Let's talk about the next project together",
    "projects.cta.btn": "Get in Touch",

    "about.title": "About",
    "about.p1":
      "Yozapps is an independent, mobile-first app studio. As a young venture on the road to becoming an established company, we build products people love opening every day.",
    "about.p2":
      "Since 2020 we have been shipping projects across the Android, iOS and Flutter ecosystems — and today that experience meets the world through our apps on the App Store. We work with the care of a small team and the discipline of a big studio.",
    "about.founder": "Founder",
    "about.end": "Our essence is hidden in our name:",

    "contact.title": "Get in Touch",
    "contact.desc":
      "Collaboration, feedback or just a hello — your message reaches our team directly.",
    "social.title": "Follow us",

    "form.name": "Your name",
    "form.email": "Your email",
    "form.message": "Your message",
    "form.send": "Send",
    "form.sending": "Sending…",
    "form.sent": "Message received — thank you!",
    "form.error": "Something went wrong — mind trying again?",
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
    let initial: Lang = "tr";
    if (saved === "tr" || saved === "en") initial = saved;
    else if (!navigator.language.toLowerCase().startsWith("tr")) initial = "en";
    setLangState(initial);
    document.documentElement.lang = initial;
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
