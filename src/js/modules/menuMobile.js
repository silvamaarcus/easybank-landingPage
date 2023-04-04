export default function menuMobile() {
  const btnMobile = document.getElementById('btn-mobile');
  const applyShadow = document.querySelector('.shadow');

  
  btnMobile.addEventListener('click', toggleMenu);
  if (window.innerWidth >= 400) {
    applyShadow.style.display = 'none';
  }

  function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    applyShadow.style.display = 'block';
  }
}