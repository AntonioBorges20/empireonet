const openBtn = document.getElementById('open-modal');
const overlay = document.getElementById('modal-overlay');
const closeBtn = document.querySelector('.modal-close');
const form = document.getElementById('form-how');

openBtn.addEventListener('click', e => {
  e.preventDefault();
  overlay.classList.add('open');
});

closeBtn.addEventListener('click', () => {
  overlay.classList.remove('open');
});

overlay.addEventListener('click', e => {
  if (e.target === overlay) {
    overlay.classList.remove('open');
  }
});

form.addEventListener('submit', e => {
  e.preventDefault();
  alert('¡Gracias por registrarte! Pronto recibirás tus giros gratis 🎰');
  form.reset();
  overlay.classList.remove('open');
});


/* Scroll */
window.addEventListener("scroll", function () {
  const header = document.querySelector(".main-header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});


const toggle = document.querySelector('.menu-toggle');
const header = document.querySelector('.main-header');

toggle.addEventListener('click', () => {
  header.classList.toggle('menu-open');
});

