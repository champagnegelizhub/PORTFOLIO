// ---------------------------------------------------------------
// Footer year
// ---------------------------------------------------------------
document.getElementById('year').textContent = new Date().getFullYear();

// ---------------------------------------------------------------
// Mobile nav toggle
// ---------------------------------------------------------------
const nav = document.querySelector('.nav');
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

navLinks.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ---------------------------------------------------------------
// Scrollspy — drives nav active state + status bar "current path"
// ---------------------------------------------------------------
const sections = document.querySelectorAll('main section[id]');
const navAnchors = document.querySelectorAll('.nav__links a');
const currentSectionEl = document.getElementById('currentSection');

const spy = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      const id = entry.target.id;

      navAnchors.forEach((a) => {
        a.classList.toggle('is-active', a.dataset.nav === id);
      });

      if (currentSectionEl) {
        currentSectionEl.textContent = '~/' + id;
      }
    });
  },
  { rootMargin: '-45% 0px -45% 0px', threshold: 0 }
);

sections.forEach((s) => spy.observe(s));

// ---------------------------------------------------------------
// Live clock (local time, 24h)
// ---------------------------------------------------------------
const clockEl = document.getElementById('clock');

function tickClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  if (clockEl) clockEl.textContent = `${hh}:${mm}`;
}
tickClock();
setInterval(tickClock, 1000 * 15);

// ---------------------------------------------------------------
// Hero typewriter — respects prefers-reduced-motion
// ---------------------------------------------------------------
const typeTarget = document.getElementById('typeTarget');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (typeTarget && !prefersReducedMotion) {
  const codeEl = typeTarget.querySelector('code');
  const fullHTML = codeEl.innerHTML;

  // Type by revealing characters of the underlying markup is fragile across tags,
  // so instead we fade+reveal line by line for a similar "being written" feel
  // without breaking the syntax-highlighting markup.
  const lines = fullHTML.split('\n').filter((l) => l.length > 0);
  codeEl.innerHTML = '';

  let i = 0;
  function revealLine() {
    if (i >= lines.length) return;
    const span = document.createElement('div');
    span.style.opacity = '0';
    span.style.transform = 'translateY(4px)';
    span.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    span.innerHTML = lines[i];
    codeEl.appendChild(span);
    requestAnimationFrame(() => {
      span.style.opacity = '1';
      span.style.transform = 'translateY(0)';
    });
    i++;
    setTimeout(revealLine, 180);
  }
  revealLine();
}

// ---------------------------------------------------------------
// Contact form — functional mailto fallback.
// Swap for Formspree / your own endpoint when ready (see README).
// ---------------------------------------------------------------
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = contactForm.name.value.trim();
    const email = contactForm.email.value.trim();
    const message = contactForm.message.value.trim();

    // EDIT: replace with your real email address
    const to = 'your@email.com';
    const subject = encodeURIComponent(`Portfolio contact from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);

    window.location.href = `mailto:${to}?subject=${subject}&body=${body}`;
    formNote.textContent = 'Opening your email client…';
  });
}
