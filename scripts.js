// Example: Simple scroll-to-top functionality
document.addEventListener("DOMContentLoaded", function () {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑';
  backToTopBtn.classList.add('back-to-top');
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});
