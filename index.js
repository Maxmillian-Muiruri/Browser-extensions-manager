/**
 * JavaScript for theme toggling and filtering extensions UI.
 * Handles light/dark mode toggle with persistence and filtering extensions by active/inactive state.
 */

document.addEventListener("DOMContentLoaded", function () {
  /**
   * Theme toggle elements
   */ 
  const themeToggle = document.querySelector(".theme");
  const lightIcon = document.querySelector(".light-mode");
  const darkIcon = document.querySelector(".dark-mode");

  /**
   * Retrieve saved theme from localStorage and system preference
   */
  const savedTheme = localStorage.getItem("theme");
  const systemPrefersDark = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;

  /**
   * Apply light mode if saved theme is light or no saved theme and system does not prefer dark
   */
  if (savedTheme === "light" || (!savedTheme && !systemPrefersDark)) {
    document.body.classList.add("light-mode");
  }

  /**
   * Toggle theme on button click and save preference
   */
  themeToggle.addEventListener("click", function () {
    const isLight = document.body.classList.toggle("light-mode");

    if (isLight) {
      localStorage.setItem("theme", "light");
    } else {
      localStorage.setItem("theme", "dark");
    }
  });
});

document.addEventListener("DOMContentLoaded", function () {
  
  /**
   *  Filter buttons and extension elements
   */
  const filterButtons = document.querySelectorAll(".nav-btn");
  const extensions = document.querySelectorAll(".extension");
  const checkboxes = document.querySelectorAll(".switch input");

   
  /**
   * Add click event listeners to filter buttons
   */
  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      /**
       *  Remove active class from all buttons and add to clicked button
       */
      
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;
 
      /**
       * Show/hide extensions based on filter and checkbox state
       */
      extensions.forEach((extension) => {
        const checkbox = extension.querySelector(".switch input");
        const isActive = checkbox.checked;

        extension.classList.remove("filtered-out");

        if (filter === "active" && !isActive) {
          extension.classList.add("filtered-out");
        } else if (filter === "inactive" && isActive) {
          extension.classList.add("filtered-out");
        }
      });
    });
  });


  /**
   * Add change event listeners to checkboxes to update filtering dynamically
   */
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", () => {
      const activeFilter =
        document.querySelector(".nav-btn.active").dataset.filter;
      const extension = checkbox.closest(".extension");

      extension.classList.remove("filtered-out");

      if (activeFilter === "active" && !checkbox.checked) {
        extension.classList.add("filtered-out");
      } else if (activeFilter === "inactive" && checkbox.checked) {
        extension.classList.add("filtered-out");
      }
    });
  });
});
