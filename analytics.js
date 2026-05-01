(function () {
  const GA_ID = "G-TDCDLKYHWV";

  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = "https://www.googletagmanager.com/gtag/js?id=" + GA_ID;
  document.head.appendChild(script);

  gtag("js", new Date());
  gtag("config", GA_ID);
})();
