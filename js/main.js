// Dil
let currentLang = detectLang();
applyLang(currentLang);

document.getElementById("lang-toggle").addEventListener("click", () => {
  currentLang = currentLang === "tr" ? "en" : "tr";
  applyLang(currentLang);
});

// Tema
document.getElementById("theme-toggle").addEventListener("click", () => {
  const root = document.documentElement;
  const next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
  root.setAttribute("data-theme", next);
  localStorage.setItem("yoz-theme", next);
});

// Mobil menü
const menuBtn = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuBtn.addEventListener("click", () => {
  const open = navLinks.classList.toggle("open");
  menuBtn.setAttribute("aria-expanded", String(open));
});

navLinks.querySelectorAll("a").forEach((a) =>
  a.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtn.setAttribute("aria-expanded", "false");
  })
);

// Footer yılı
document.getElementById("year").textContent = new Date().getFullYear();
