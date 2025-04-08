// Example of a scroll-to-top button if needed
document.addEventListener('DOMContentLoaded', () => {
  const backToTopBtn = document.createElement('button');
  backToTopBtn.textContent = '↑';
  backToTopBtn.classList.add('back-to-top');
  document.body.appendChild(backToTopBtn);

  backToTopBtn.addEventListener('click', () => {
    window.scroll
