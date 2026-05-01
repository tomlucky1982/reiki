(function () {
  const GA_ID = "G-TDCDLKYHWV";

  window.dataLayer = window.dataLayer || [];
  window.gtag = function () {
    window.dataLayer.push(arguments);
  };

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(script);

  gtag("js", new Date());

  gtag("config", GA_ID, {
    send_page_view: true
  });
})();
