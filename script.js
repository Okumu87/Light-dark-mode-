const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById("nav");

// Switch Theme Dynamically
function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
}
// Event Listener

toggleSwitch.addEventListener("change", switchTheme);

// stopt at 5
