export default function menuMobile() {
  const btnMobile = document.getElementById('btn-mobile');
  const applyShadow = document.querySelector('.shadow');


  btnMobile.addEventListener('click', toggleMenu);

  function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
    if (nav.classList.contains('active')) {
      applyShadow.style.display = 'block';
    } else {
      applyShadow.style.display = 'none';
    }
  }
}