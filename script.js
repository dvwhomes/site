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
    form.addEventListener('submit', async event => {
      event.preventDefault();
      const button = form.querySelector('button[type="submit"]');
      const status = form.querySelector('.form-status');
      if (button.disabled || !form.reportValidity()) return;
      const data = new FormData(form);
      if (data.get('botcheck')) return;
      const kind = form.dataset.form;
      const subjects = { callback: 'DVW Homes callback request', message: 'DVW Homes website message', newsletter: 'DVW Homes market updates signup request' };
      data.set('access_key', '28312637-c393-4433-82bf-8e21b1ac12f8');
      data.set('subject', subjects[kind]);
      data.set('from_name', 'DVW Homes website');
      if (kind === 'newsletter') data.set('message', 'Please add this email address to regular Des Moines market updates. Signup requested through dvwhomes.com.');
      const contact = String(data.get('contact') || data.get('email') || '').trim();
      const isEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact);
      const digits = contact.replace(/\D/g, '');
      if (!isEmail && !(digits.length >= 10 && digits.length <= 15 && /^[+\d\s().-]+$/.test(contact))) {
        status.textContent = 'Please enter a valid email address or phone number.';
        return;
      }
      if (isEmail) data.set('email', contact);
      const label = button.textContent;
      button.disabled = true;
      button.textContent = 'Sending…';
      status.textContent = '';
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 20000);
      try {
        const response = await fetch('https://api.web3forms.com/submit', { method: 'POST', headers: { Accept: 'application/json' }, body: data, signal: controller.signal });
        const result = await response.json();
        if (!response.ok || result.success !== true) throw new Error('Submission failed');
        form.reset();
        status.textContent = kind === 'newsletter'
          ? 'Thanks! Your request for market updates has been sent to Dustin.'
          : 'Thanks! Your message has been sent. Dustin will reach out personally.';
      } catch {
        status.textContent = 'We couldn’t confirm your submission. Please try again, or call, text, or email Dustin using the buttons below.';
      } finally {
        clearTimeout(timeout);
        button.disabled = false;
        button.textContent = label;
      }
    });
  });
  const year = document.getElementById('year');
  if (year) year.textContent = new Date().getFullYear();
});
