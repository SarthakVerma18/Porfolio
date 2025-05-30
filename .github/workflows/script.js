document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("theme-toggle");
  const body = document.body;

  // Load theme from localStorage
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    body.classList.add("light");
    toggle.textContent = "🌙"; // Moon icon for switching back to dark
  } else {
    // Default is dark mode (no class)
    toggle.textContent = "☀️"; // Sun icon for switching to light
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      toggle.textContent = "🌙"; // Moon icon
    } else {
      localStorage.setItem("theme", "dark");
      toggle.textContent = "☀️"; // Sun icon
    }
  });
});
