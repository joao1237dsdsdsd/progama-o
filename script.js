// Efeito de digitação no título
const titulo = "Programação";
let i = 0;

function digitar() {
  if (i < titulo.length) {
    document.getElementById("titulo").innerHTML += titulo.charAt(i);
    i++;
    setTimeout(digitar, 120);
  }
}
digitar();

// Animação das seções ao rolar
const sections = document.querySelectorAll("section");
window.addEventListener("scroll", () => {
  sections.forEach(sec => {
    const top = sec.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
      sec.classList.add("show");
    }
  });
});

// Botão de alternar tema
const btn = document.getElementById("temaBtn");
btn.addEventListener("click", () => {
  document.body.classList.toggle("light");
});
