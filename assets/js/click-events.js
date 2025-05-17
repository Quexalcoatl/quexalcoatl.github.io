function bindDeviceClickEvents(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const links = container.querySelectorAll('.device-list a');
  const contents = container.querySelectorAll('.device-content');

  links.forEach(link => {
    // Evitar comportamiento predeterminado del clic
    link.addEventListener('click', function (e) {
      e.preventDefault();

      // Quitar clase "active" a todos los links
      links.forEach(l => l.classList.remove('active'));

      // Agregar clase "active" al link clickeado
      this.classList.add('active');

      const targetId = this.getAttribute('data-target');

      // Ocultar todos los contenidos
      contents.forEach(c => c.classList.remove('active'));

      // Mostrar el contenido correspondiente
      const targetContent = container.querySelector(`#${targetId}`);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });
}