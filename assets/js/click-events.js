  document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('.device-list a');
    const contents = document.querySelectorAll('.device-content');
    let currentIndex = 0;
    let intervalId;

    function showContent(index) {
      // Limpiar clases activas
      links.forEach(link => link.classList.remove('active'));
      contents.forEach(content => content.classList.remove('active'));

      // Activar actual
      links[index].classList.add('active');
      const targetId = links[index].getAttribute('data-target');
      const targetContent = document.getElementById(targetId);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    }

    function startRotation(startFrom = 0) {
      currentIndex = startFrom;
      showContent(currentIndex);

      // Limpiar cualquier intervalo anterior
      if (intervalId) clearInterval(intervalId);

      // Iniciar rotación cada 30 segundos
      intervalId = setInterval(() => {
        currentIndex = (currentIndex + 1) % links.length;
        showContent(currentIndex);
      }, 30000);
    }

    // Asignar eventos de clic
    links.forEach((link, index) => {
      link.addEventListener('click', function (e) {
        e.preventDefault();
        currentIndex = index;
        showContent(currentIndex);
        startRotation(currentIndex); // Reinicia ciclo desde el seleccionado
      });
    });

    // Iniciar al cargar con GV501LG
    startRotation(0);
  });
