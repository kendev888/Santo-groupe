document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.querySelector('.menu-toggle');
  const navMenu = document.querySelector('nav ul');

  if (!menuToggle || !navMenu) {
    console.error('Erreur : Élément ".menu-toggle" ou "nav ul" introuvable.');
    return; // Arrêter le script si les éléments nécessaires sont manquants
  }

  // Gestion du menu responsive
  menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle('show'); // Basculer la classe "show" pour afficher/masquer le menu
  });

  // Fermer le menu après un clic sur un lien
  const navLinks = document.querySelectorAll('nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function () {
      if (navMenu.classList.contains('show')) {
        navMenu.classList.remove('show'); // Fermer le menu
      }
    });
  });

  console.log('Script chargé avec succès.');
});
document.addEventListener('DOMContentLoaded', function() {
  // Menu mobile
  const menuToggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('nav');
  
  menuToggle.addEventListener('click', function() {
    nav.classList.toggle('active');
  });

  // Lightbox
  const galleryImages = document.querySelectorAll('.gallery-grid img');
  const lightbox = document.createElement('div');
  lightbox.className = 'lightbox';
  
  const lightboxImg = document.createElement('img');
  const closeBtn = document.createElement('span');
  closeBtn.className = 'close-lightbox';
  closeBtn.innerHTML = '&times;';
  
  lightbox.appendChild(lightboxImg);
  lightbox.appendChild(closeBtn);
  document.body.appendChild(lightbox);

  galleryImages.forEach(img => {
    img.addEventListener('click', function() {
      lightboxImg.src = this.src;
      lightbox.classList.add('active');
    });
  });

  closeBtn.addEventListener('click', function() {
    lightbox.classList.remove('active');
  });

  lightbox.addEventListener('click', function(e) {
    if (e.target !== lightboxImg) {
      lightbox.classList.remove('active');
    }
  });
});
