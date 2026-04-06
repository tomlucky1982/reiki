document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("site-menu");
  if (!menu) return;

  const items = [
  {
    "label": "START",
    "url": "index.html"
  },
  {
    "label": "REIKI",
    "url": "reiki.html"
  },
  {
    "label": "MISTRZ",
    "url": "mistrz.html"
  },
  {
    "label": "MATERIAŁY",
    "url": "materialy.html"
  },
  {
    "label": "KONTAKT",
    "url": "kontakt.html"
  }
];
  const currentPage = window.location.pathname.split("/").pop() || "index.html";

  menu.innerHTML = items.map(item => {
    const active = currentPage === item.url ? "active" : "";
    return `<a href="${item.url}" class="${active}">${item.label}</a>`;
  }).join("");
});
