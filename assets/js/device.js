function bindDeviceListBehavior(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const links = container.querySelectorAll(".device-list a");
  const contents = container.querySelectorAll(".device-content");

  let currentIndex = 0;

  function showService(index) {
    links.forEach(link => link.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));

    if (!links[index]) return;

    links[index].classList.add("active");
    const targetId = links[index].getAttribute("data-target");
    const targetContent = container.querySelector(`#${targetId}`);
    if (targetContent) {
      targetContent.classList.add("active");
    }
  }

  links.forEach((link, index) => {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      currentIndex = index;
      showService(currentIndex);

      // Scroll opcional al contenido activo
      const targetId = link.getAttribute("data-target");
      const targetEl = container.querySelector(`#${targetId}`);
      if (targetEl) {
        targetEl.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Reproducción automática
  setInterval(() => {
    showService(currentIndex);
    currentIndex = (currentIndex + 1) % links.length;
  }, 5000);
}