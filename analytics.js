(function () {
  const GA_ID = "G-TDCDLKYHWV";

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  // najpierw kolejkujemy eventy
  gtag("js", new Date());

  // ładujemy skrypt
  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;

  script.onload = function () {
    // dopiero po załadowaniu konfigurujemy GA
    gtag("config", GA_ID, {
      send_page_view: true
    });
  };

  document.head.appendChild(script);
})();
