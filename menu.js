document.addEventListener("DOMContentLoaded", function () {
  const target = document.getElementById("site-menu");
  if (!target) return;

  const items = [
  {
    "label": "Start",
    "url": "index.html"
  },
  {
    "label": "Reiki",
    "url": "reiki.html"
  },
  {
    "label": "Mistrz",
    "url": "mistrz.html"
  },
  {
    "label": "MATERIAŁY",
    "url": "materialy.html"
  },
  {
    "label": "Kontakt",
    "url": "kontakt.html"
  }
];

  target.innerHTML = `
    <header class="site-header">
      <div class="site-header-inner">
        <div class="site-brand">
          <div class="site-brand-kanji">霊気</div>
          <div class="site-brand-name">Reiki</div>
        </div>
        <nav class="top-menu">
          ${items.map(item => `<a href="${item.url}">${item.label}</a>`).join("")}
        </nav>
      </div>
    </header>
  `;
});
