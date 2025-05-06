document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".device-list a");
  const contents = document.querySelectorAll(".device-content");

  let currentIndex = 0;

  function showService(index) {
    // Desactivar todos los enlaces y contenidos
    links.forEach(link => link.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    // Activar el enlace y contenido correspondiente
    links[index].classList.add("active");
    const targetId = links[index].getAttribute("data-target");
    const targetContent = document.getElementById(targetId);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  }

  // Evento manual de clic (prevenir href="#")
  links.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault(); // <-- Esto evita que salte al inicio
      currentIndex = index; // Actualiza el índice actual
      showService(currentIndex);
    });
  });

  // Auto recorrido cada 5 segundos
  setInterval(() => {
    showService(currentIndex);
    currentIndex = (currentIndex + 1) % links.length;
  }, 5000);
});