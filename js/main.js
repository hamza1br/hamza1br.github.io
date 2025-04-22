// Chargement des fragments HTML
async function loadFragment(id, file) {
  try {
    const response = await fetch(file);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const content = await response.text();
    document.getElementById(id).innerHTML = content;
    
    // Initialiser le menu mobile après le chargement du header
    if (id === 'header-placeholder') {
      initMobileMenu();
    }
  } catch (error) {
    console.error('Error loading fragment:', error);
  }
}

// Gestion du menu mobile
function initMobileMenu() {
  const menuButton = document.getElementById('menuButton');
  const mainMenu = document.getElementById('mainMenu');
  
  if (menuButton && mainMenu) {
    menuButton.addEventListener('click', () => {
      mainMenu.classList.toggle('active');
      menuButton.setAttribute('aria-expanded', 
        mainMenu.classList.contains('active').toString());
    });
  }
}

// Animation au défilement
function initScrollAnimation() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.animate').forEach(el => observer.observe(el));
}

// Initialisation au chargement de la page
document.addEventListener('DOMContentLoaded', () => {
  // Charger les fragments
  loadFragment('header-placeholder', '/includes/header.html');
  loadFragment('footer-placeholder', '/includes/footer.html');
  
  // Initialiser les animations
  initScrollAnimation();
}); 