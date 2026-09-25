(function () {
  "use strict";

  var header = document.getElementById("mainHeader");
  var footer = document.getElementById("mainFooter");
  var menuToggle = document.getElementById("menuToggle");
  var mainNav = document.getElementById("mainNav");
  var navItems = document.querySelectorAll(".nav-item");
  var ticking = false;

  function updateScrollState() {
    if (header) {
      header.classList.toggle("small", window.scrollY > 50);
    }
    if (footer) {
      var position = window.scrollY + window.innerHeight;
      var pageHeight = document.documentElement.scrollHeight;
      footer.classList.toggle("show", position >= pageHeight - 100);
    }
    ticking = false;
  }

  window.addEventListener(
    "scroll",
    function () {
      if (!ticking) {
        ticking = true;
        window.requestAnimationFrame(updateScrollState);
      }
    },
    { passive: true }
  );
  updateScrollState();

  function isMobile() {
    return window.matchMedia("(max-width: 768px)").matches;
  }

  function closeMenu() {
    if (mainNav) mainNav.classList.remove("active");
    if (menuToggle) menuToggle.classList.remove("active");
  }

  function isOpen() {
    return mainNav && mainNav.classList.contains("active");
  }

  if (menuToggle && mainNav) {
    menuToggle.addEventListener("click", function (event) {
      event.stopPropagation();
      mainNav.classList.toggle("active");
      menuToggle.classList.toggle("active");
    });

    mainNav.addEventListener("click", function (event) {
      if (event.target === mainNav) closeMenu();
    });

    document.addEventListener("click", function (event) {
      if (!isOpen()) return;
      if (mainNav.contains(event.target) || menuToggle.contains(event.target)) return;
      closeMenu();
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });

    window.addEventListener("resize", function () {
      if (!isMobile()) closeMenu();
    });

    navItems.forEach(function (item) {
      item.addEventListener("click", function (event) {
        if (!isMobile()) return;
        if (event.target.closest("a")) return;
        event.preventDefault();
        navItems.forEach(function (other) {
          if (other !== item) other.classList.remove("active");
        });
        item.classList.toggle("active");
      });
    });
  }
})();
