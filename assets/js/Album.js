const img = document.getElementById('zoom-img');
const container = img.parentElement;

container.addEventListener('mousemove', function(e) 
{
  const rect = container.getBoundingClientRect();
  const x = ((e.clientX - rect.left) / rect.width) * 100;
  const y = ((e.clientY - rect.top) / rect.height) * 100;

  img.style.transform = 'scale(2)'; // Ajusta el nivel de zoom aquí
  img.style.transformOrigin = `${x}% ${y}%`;
});

container.addEventListener('mouseleave', function() {
  img.style.transform = 'scale(1)';
  img.style.transformOrigin = 'center center';
});

