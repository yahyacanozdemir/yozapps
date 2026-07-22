// GitHub (github.com/yahyacanozdemir) mobil repoları + App Store uygulamaları.
// Veri 21 Temmuz 2026'da GitHub API'sinden alındı; yeni repo eklenirse bu liste güncellenmeli.

export interface Project {
  year: number;
  name: string;
  tr: string;
  en: string;
  tech: string[];
  url?: string;
  store?: boolean; // App Store işi (repo değil)
  flagship?: boolean;
}

export const projects: Project[] = [
  {
    year: 2026,
    name: "Holes",
    tr: "Stüdyomuzun ilk oyunu: eğ-dengede tut-kaç fikri üzerine kurulu, 500+ seviyeli minimalist denge oyunu. App Store'da yayına hazırlanıyor.",
    en: "Our studio's first game: a minimalist balance game built on tilt-balance-escape, with 500+ levels. Preparing for its App Store release.",
    tech: ["iOS", "Swift", "SpriteKit", "AdMob"],
    url: "/apps/holes",
    store: true,
    flagship: true,
  },
  {
    year: 2025,
    name: "Safe Oto",
    tr: "Kurumsal ikinci el otomobil ilanlarını tek platformda toplayan yeni nesil karşılaştırma uygulaması. App Store'da yayında.",
    en: "A new-generation comparison app gathering corporate second-hand car listings on one platform. Live on the App Store.",
    tech: ["iOS", "Swift", "Firebase", "Push"],
    url: "/apps/safeoto",
    store: true,
    flagship: true,
  },
  {
    year: 2024,
    name: "BTCTrader101",
    tr: "Kripto borsası arayüz çalışması: canlı fiyat akışı, grafikler ve alım-satım deneyimi üzerine bir iOS vaka projesi.",
    en: "A crypto exchange interface study: an iOS case project on live price feeds, charts and the trading experience.",
    tech: ["iOS", "Swift", "UIKit", "WebSocket"],
    url: "https://github.com/yahyacanozdemir/BTCTrader101",
  },
  {
    year: 2024,
    name: "AI Sound Generator",
    tr: "Yapay zekâ ile ses üretimi üzerine bir iOS uygulaması: metinden sese akış, oynatma ve paylaşım deneyimi.",
    en: "An iOS app on AI-powered sound generation: text-to-audio flow, playback and sharing experience.",
    tech: ["iOS", "Swift", "AI", "AVFoundation"],
    url: "https://github.com/yahyacanozdemir/AISoundGeneratorApp",
  },
  {
    year: 2023,
    name: "Beraber",
    tr: "Sosyal yardımlaşma ve dayanışmanın yeni medyası: ihtiyaçları ve iyiliği buluşturan topluluk odaklı bir iOS uygulaması.",
    en: "A new medium for social solidarity: a community-driven iOS app connecting needs with goodwill.",
    tech: ["iOS", "Swift", "Firebase"],
    url: "https://github.com/yahyacanozdemir/beraberApp",
  },
  {
    year: 2022,
    name: "Algoritma Ustası",
    tr: "Algoritma pratiği için interaktif bir eğitim uygulaması: soru setleri, seviyeler ve öğrenme akışı.",
    en: "An interactive learning app for algorithm practice: question sets, levels and a guided learning flow.",
    tech: ["Flutter", "Dart", "Material"],
    url: "https://github.com/yahyacanozdemir/AlgoritmaUstasiFlutterApp",
  },
  {
    year: 2021,
    name: "Boğazdan Gelir",
    tr: "Dünyanın her yerinden yemek tariflerini bir araya getiren, keşif odaklı bir Flutter uygulaması.",
    en: "A discovery-driven Flutter app bringing together recipes from all around the world.",
    tech: ["Flutter", "Dart", "REST API"],
    url: "https://github.com/yahyacanozdemir/RecipesCanBogazdanGelir",
  },
  {
    year: 2021,
    name: "Credit Card Recognizer",
    tr: "Kredi kartı numarasını akıllı biçimde alan ve doğrulayan form deneyimi üzerine bir Flutter çalışması.",
    en: "A Flutter study on a smart credit card number input and validation experience.",
    tech: ["Flutter", "Dart", "Validation"],
    url: "https://github.com/yahyacanozdemir/FlutterCreditCard-NumberRecipient",
  },
  {
    year: 2020,
    name: "Döviz Kuşu",
    tr: "Yeni nesil altın ve döviz takip uygulaması: canlı kurlar, sade arayüz, hızlı erişim.",
    en: "A new-generation gold & currency tracker: live rates, clean interface, quick access.",
    tech: ["Android", "Java", "REST API"],
    url: "https://github.com/yahyacanozdemir/DovizKusuApp",
  },
  {
    year: 2020,
    name: "Quiet Place",
    tr: "Google Solution Challenge 2020 için geliştirdiğimiz sosyal fayda odaklı Android projesi.",
    en: "Our social-impact Android project built for Google Solution Challenge 2020.",
    tech: ["Android", "Java", "Firebase"],
    url: "https://github.com/yahyacanozdemir/QuietPlaceApp",
  },
  {
    year: 2020,
    name: "Trendyol Clone",
    tr: "Flutter widget mimarisini derinlemesine çalışmak için geliştirilen kapsamlı bir e-ticaret arayüz klonu.",
    en: "A comprehensive e-commerce interface clone built to master Flutter's widget architecture.",
    tech: ["Flutter", "Dart", "Material"],
    url: "https://github.com/yahyacanozdemir/TrendyolCloneFlutterApp",
  },
  {
    year: 2020,
    name: "Hızlı Balon",
    tr: "Refleks odaklı, eğlenceli bir Android mobil oyun denemesi: hız, zamanlama ve skor.",
    en: "A fun, reflex-driven Android mobile game experiment: speed, timing and score.",
    tech: ["Android", "Java", "Game"],
    url: "https://github.com/yahyacanozdemir/HizliBalonMobileGame",
  },
  {
    year: 2020,
    name: "İstatistikçim",
    tr: "Günlük verileri kaydedip görselleştiren, istatistik odaklı bir Android uygulaması.",
    en: "A statistics-focused Android app for logging and visualizing everyday data.",
    tech: ["Android", "Java", "Charts"],
    url: "https://github.com/yahyacanozdemir/Istatiskcim",
  },
];

export const projectYears = [...new Set(projects.map((p) => p.year))].sort(
  (a, b) => b - a
);
