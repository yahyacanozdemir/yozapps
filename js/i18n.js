// TR / EN çeviri sözlükleri
const I18N = {
  tr: {
    "nav.home": "Ana Sayfa",
    "nav.apps": "Uygulamalar",
    "nav.about": "Hakkında",
    "nav.contact": "İletişim",
    "hero.kicker": "Yahya Özdemir Apps",
    "hero.title": "Fikirden uygulamaya.",
    "hero.subtitle": "Mobil ve web için özenle geliştirilen uygulamalar. Yakında burada.",
    "hero.cta": "Uygulamaları Gör",
    "hero.cta2": "İletişime Geç",
    "apps.title": "Uygulamalar",
    "apps.desc": "Çok yakında burada listelenecek.",
    "apps.soon": "Yakında",
    "apps.soonDesc": "İlk uygulama üzerinde çalışılıyor.",
    "about.title": "Hakkında",
    "about.desc": "yozapps, Yahya Özdemir tarafından geliştirilen uygulamaların çatısıdır.",
    "contact.title": "İletişim",
    "footer.made": "Sevgiyle geliştirildi.",
    "meta.description": "yozapps — Yahya Özdemir tarafından geliştirilen uygulamalar."
  },
  en: {
    "nav.home": "Home",
    "nav.apps": "Apps",
    "nav.about": "About",
    "nav.contact": "Contact",
    "hero.kicker": "Yahya Ozdemir Apps",
    "hero.title": "From idea to app.",
    "hero.subtitle": "Carefully crafted apps for mobile and web. Coming soon.",
    "hero.cta": "See the Apps",
    "hero.cta2": "Get in Touch",
    "apps.title": "Apps",
    "apps.desc": "Coming here very soon.",
    "apps.soon": "Coming Soon",
    "apps.soonDesc": "The first app is in the works.",
    "about.title": "About",
    "about.desc": "yozapps is the home of apps built by Yahya Ozdemir.",
    "contact.title": "Contact",
    "footer.made": "Built with care.",
    "meta.description": "yozapps — apps built by Yahya Ozdemir."
  }
};

function detectLang() {
  const saved = localStorage.getItem("yoz-lang");
  if (saved && I18N[saved]) return saved;
  return (navigator.language || "tr").toLowerCase().startsWith("tr") ? "tr" : "en";
}

function applyLang(lang) {
  const dict = I18N[lang];
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (dict[key]) el.textContent = dict[key];
  });
  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute("content", dict["meta.description"]);
  // Buton diğer dili gösterir
  const label = document.getElementById("lang-label");
  if (label) label.textContent = lang === "tr" ? "EN" : "TR";
  localStorage.setItem("yoz-lang", lang);
}
