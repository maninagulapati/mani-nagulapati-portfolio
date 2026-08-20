const menu = document.querySelector('.menu');
const nav = document.querySelector('.nav nav');
menu?.addEventListener('click', () => {
  nav.style.display = nav.style.display === 'flex' ? '' : 'flex';
  nav.style.position = 'absolute';
  nav.style.top = '72px';
  nav.style.left = '0';
  nav.style.right = '0';
  nav.style.padding = '20px 6vw';
  nav.style.flexDirection = 'column';
  nav.style.background = '#0b0c0f';
  nav.style.borderBottom = '1px solid #25282f';
});
