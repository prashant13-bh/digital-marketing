/* MCT Digital Marketing - Main JavaScript */

document.addEventListener("DOMContentLoaded", () => {
  // Mobile Menu Toggle
  const menuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (menuBtn) {
    menuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      menuBtn.innerHTML = navLinks.classList.contains("active") ? "✕" : "☰";
    });
  }

  // Sticky Header
  const header = document.querySelector("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      header.style.boxShadow = "0 5px 20px rgba(0,0,0,0.1)";
    } else {
      header.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    }
  });

  // Smooth Scroll
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({
          behavior: "smooth",
        });
        // Close mobile menu if open
        if (navLinks.classList.contains("active")) {
          navLinks.classList.remove("active");
          menuBtn.innerHTML = "☰";
        }
      }
    });
  });

  // Add active class to current nav item
  const currentLocation = location.href;
  const menuItem = document.querySelectorAll(".nav-links a");
  const menuLength = menuItem.length;
  for (let i = 0; i < menuLength; i++) {
    if (menuItem[i].href === currentLocation) {
      menuItem[i].classList.add("active");
    }
  }
});
