function toggleSection(id) {
  const section = document.getElementById(id);
  section.classList.toggle("hidden");
}

function mostrarMotivacao() {
  const motiv = document.getElementById("motivacao");
  motiv.style.display = motiv.style.display === "block" ? "none" : "block";
}
