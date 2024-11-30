function toggleMenu() {
    const menu = document.querySelector('.nav-links');
    const hamburger = document.querySelector('.hamburger');
    
    hamburger.addEventListener('click', () => {
      menu.classList.toggle('expanded');
      hamburger.classList.toggle('active');
    });
  }
  
  document.addEventListener('astro:page-load', () => {
    toggleMenu();
  });
  