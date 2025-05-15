document.addEventListener("DOMContentLoaded", function () {
  const themeToggle = document.querySelector(".theme");
  const lightIcon = document.querySelector(".light-mode");
  const darkIcon = document.querySelector(".dark-mode");

  // Check for saved theme preference or use system theme
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  // Set initial theme
  if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
    document.body.classList.add("light-mode");
  }

  // Toggle theme
  themeToggle.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-mode");

    if (isLight) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
});
