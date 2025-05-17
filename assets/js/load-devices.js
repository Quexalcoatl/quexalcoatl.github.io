const tabs = [
  { id: 'devices1', file: 'partials/GPS.html' },
  { id: 'devices2', file: 'partials/devices2.html' },
  { id: 'devices3', file: 'partials/SS.html' }
];

tabs.forEach(tab => {
  fetch(tab.file)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById(tab.id);
      container.innerHTML = html;
      
      // Llamar a la función de eventos después de cargar el contenido
      bindDeviceClickEvents(tab.id); // Aquí debería aplicarse correctamente el binding.

      // Si usas AOS, refresca también
      if (typeof AOS !== 'undefined') AOS.refresh();
    })
    .catch(err => console.error(`Error cargando ${tab.file}:`, err));
});