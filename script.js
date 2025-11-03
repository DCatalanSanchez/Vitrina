(function () {
  try {
    // ==== Asegura visibilidad ====
    function mostrarBody() {
      document.body.classList.add('visible');
    }

    // ==== Fade-in con scroll ====
    function activarFadeUp() {
      const secciones = document.querySelectorAll(".fade-up");
      const mostrar = () => {
        secciones.forEach(sec => {
          const rect = sec.getBoundingClientRect();
          if (rect.top < window.innerHeight - 100) sec.classList.add("visible");
        });
      };
      window.addEventListener("scroll", mostrar);
      mostrar();
    }

    // ==== Header scroll ====
    function activarHeaderScrolled() {
      const header = document.querySelector("header");
      const revisar = () => {
        if (window.scrollY > 50) header.classList.add("scrolled");
        else header.classList.remove("scrolled");
      };
      revisar();
      window.addEventListener("scroll", revisar);
    }

    // ==== Transición entre páginas ====
    function transicionesSuaves() {
      const enlaces = document.querySelectorAll("a[href$='.html']");
      enlaces.forEach(link => {
        link.addEventListener("click", e => {
          const destino = link.getAttribute("href");
          if (!destino || link.target === "_blank" || destino.startsWith("#")) return;
          e.preventDefault();
          document.body.classList.remove("visible");
          setTimeout(() => window.location.href = destino, 400);
        });
      });
    }

    // ==== Inicialización ====
    document.addEventListener("DOMContentLoaded", () => {
      mostrarBody();
      activarFadeUp();
      activarHeaderScrolled();
      transicionesSuaves();
    });
  } catch (err) {
    console.error("Error general:", err);
    document.body.style.opacity = "1";
  }
})();
