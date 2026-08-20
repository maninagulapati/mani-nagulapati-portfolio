const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');

menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('mobile-open');
  nav.style.display = open ? 'flex' : '';
  if (open) {
    nav.style.position = 'absolute';
    nav.style.top = '72px';
    nav.style.left = '0';
    nav.style.right = '0';
    nav.style.padding = '20px 6vw';
    nav.style.flexDirection = 'column';
    nav.style.background = '#0b0c0f';
    nav.style.borderBottom = '1px solid #25282f';
  } else {
    nav.removeAttribute('style');
  }
});

document.querySelectorAll('.nav nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('mobile-open');
    if (window.innerWidth <= 800) nav.removeAttribute('style');
  });
});
