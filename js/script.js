document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".produto-botao");

  buttons.forEach((button) => {
    button.addEventListener("click", (e) => {
      e.preventDefault(); // Prevent default anchor behavior if it was an anchor, though we changed to button

      const targetId = button.getAttribute("aria-controls");
      const content = document.getElementById(targetId);

      if (!content) return;

      const isExpanded = button.getAttribute("aria-expanded") === "true";

      // Toggle current
      button.setAttribute("aria-expanded", !isExpanded);
      content.classList.toggle("ativo");

      // Update button text
      if (!isExpanded) {
        button.textContent = "VER MENOS ↑";
      } else {
        button.textContent = "VEJA MAIS ↓";
      }
    });
  });
});
