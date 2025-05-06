document.addEventListener("DOMContentLoaded", function () {
  const startDate = new Date("2005-01-01T00:00:00"); // fecha de inicio
  const now = new Date();
  const diffMs = now - startDate; // diferencia en milisegundos
  const diffHours = Math.floor(diffMs / (1000 * 60 * 60)); // convierte a horas

  const counterElement = document.getElementById("dynamic-hours");
  counterElement.setAttribute("data-purecounter-end", diffHours);

  // Reinicia purecounter para que cuente con el nuevo valor
  if (typeof PureCounter !== 'undefined') {
    new PureCounter(); // Esto reinicia el contador con los nuevos datos
  }
});
