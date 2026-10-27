document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav nav');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  menuButton.setAttribute('aria-expanded', 'false');
}));
// Keep only one beat preview playing at a time.
document.querySelectorAll('audio').forEach(player => {
  player.addEventListener('play', () => {
    document.querySelectorAll('audio').forEach(other => { if (other !== player) other.pause(); });
  });
});
