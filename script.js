document.addEventListener('DOMContentLoaded', () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('#primary-links');
  if (toggle && nav) {
    const closeMenu = () => { nav.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false'); };
    toggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); toggle.setAttribute('aria-expanded', String(open)); });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
    document.addEventListener('keydown', event => { if (event.key === 'Escape' && nav.classList.contains('open')) { closeMenu(); toggle.focus(); } });
  }
  document.querySelectorAll('form[data-form]').forEach(form => {
    form.addEventListener('submit', event => {
      event.preventDefault();
      form.querySelector('.form-status').textContent = 'This preview does not send information yet. You can reach Dustin using the Call, Text, or Email buttons below.';
    });
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
