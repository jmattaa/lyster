/**
 * Lyster — interaction layer.
 * Everything here is optional polish: the page reads and books without it.
 */

const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => Array.from(root.querySelectorAll(selector));
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* Mobile navigation ------------------------------------------------------- */

const dialog = $('#mobilnav');
const openButton = $('[data-menu-open]');

if (dialog instanceof HTMLDialogElement && openButton) {
  const closeButton = $('[data-menu-close]', dialog);
  const setExpanded = (value) => openButton.setAttribute('aria-expanded', String(value));

  const openNav = () => {
    document.body.classList.add('nav-open');
    dialog.showModal();
    setExpanded(true);
    closeButton?.focus({ preventScroll: true });
  };

  const closeNav = () => {
    if (dialog.open) dialog.close();
  };

  openButton.addEventListener('click', openNav);
  closeButton?.addEventListener('click', closeNav);

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) closeNav();
  });

  dialog.addEventListener('cancel', () => {
    document.body.classList.remove('nav-open');
    setExpanded(false);
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('nav-open');
    setExpanded(false);
    openButton.focus({ preventScroll: true });
  });

  $$('a', dialog).forEach((link) => link.addEventListener('click', closeNav));
}

/* Reveals ---------------------------------------------------------------- */

const revealTargets = $$('[data-reveal], [data-reveal-mask], [data-reveal-line]');

if (reduceMotion || !('IntersectionObserver' in window)) {
  revealTargets.forEach((element) => element.classList.add('is-in'));
} else {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-in');
        observer.unobserve(entry.target);
      });
    },
    { threshold: 0, rootMargin: '0px 0px -6% 0px' }
  );

  revealTargets.forEach((element) => observer.observe(element));
}

/* Booking placeholder ---------------------------------------------------- */

const bookingNote = $('[data-booking-note]');

$$('[data-booking-placeholder]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();

    $('[data-booking-section]')?.scrollIntoView({
      behavior: reduceMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    if (!bookingNote) return;
    bookingNote.hidden = false;
    window.setTimeout(() => bookingNote.focus({ preventScroll: true }), reduceMotion ? 0 : 550);
  });
});

/* Open / closed status --------------------------------------------------- */

const statusElements = $$('[data-open-status]');

if (statusElements.length) {
  const schedule = {
    2: { open: 11 * 60 + 30, close: 23 * 60 }, // tisdag
    3: { open: 11 * 60 + 30, close: 23 * 60 }, // onsdag
    4: { open: 11 * 60 + 30, close: 23 * 60 }, // torsdag
    5: { open: 11 * 60 + 30, close: 23 * 60 }, // fredag
    6: { open: 12 * 60, close: 23 * 60 }, // lördag
  };

  const dayNames = ['sön', 'mån', 'tis', 'ons', 'tors', 'fre', 'lör'];
  const formatter = new Intl.DateTimeFormat('en-GB', {
    timeZone: 'Europe/Stockholm',
    weekday: 'short',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  const time = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const rest = String(minutes % 60).padStart(2, '0');
    return `${hours}.${rest}`;
  };

  const updateStatus = () => {
    const parts = Object.fromEntries(
      formatter.formatToParts(new Date()).map((part) => [part.type, part.value])
    );

    const dayIndex = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 }[
      parts.weekday
    ];
    const now = Number(parts.hour) * 60 + Number(parts.minute);
    const today = schedule[dayIndex];
    let label = '';
    let isOpen = false;

    if (today && now >= today.open && now < today.close) {
      isOpen = true;
      label =
        now < 14 * 60
          ? 'Öppet · lunch till 14.00'
          : `Öppet nu · stänger ${time(today.close)}`;
    } else if (today && now < today.open) {
      label = `Stängt nu · öppnar ${time(today.open)}`;
    } else {
      for (let step = 1; step <= 7; step += 1) {
        const nextDay = (dayIndex + step) % 7;
        const next = schedule[nextDay];
        if (!next) continue;
        label = `Stängt nu · öppnar ${dayNames[nextDay]} ${time(next.open)}`;
        break;
      }
    }

    statusElements.forEach((element) => {
      element.dataset.open = String(isOpen);
      const text = $('[data-open-text]', element);
      if (text) text.textContent = label;
    });
  };

  updateStatus();
  window.setInterval(updateStatus, 60_000);
}

/* Hero plate parallax ---------------------------------------------------- */

const plateStage = $('[data-plate-parallax]');

if (
  plateStage &&
  !reduceMotion &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches
) {
  const setOffset = (x, y) => {
    plateStage.style.setProperty('--px', x.toFixed(3));
    plateStage.style.setProperty('--py', y.toFixed(3));
  };

  plateStage.addEventListener('pointermove', (event) => {
    const rect = plateStage.getBoundingClientRect();
    setOffset(
      (event.clientX - rect.left) / rect.width - 0.5,
      (event.clientY - rect.top) / rect.height - 0.5
    );
  });

  plateStage.addEventListener('pointerleave', () => setOffset(0, 0));
}

/* Menu category syncing -------------------------------------------------- */

const menuNav = $('[data-menu-nav]');
const menuAside = $('[data-menu-aside]');

if (menuNav) {
  const links = $$('[data-menu-link]', menuNav);
  const entries = links
    .map((link) => {
      const id = link.getAttribute('href')?.replace('#', '');
      const section = id ? document.getElementById(id) : null;
      return section ? { link, section, id } : null;
    })
    .filter(Boolean);

  const plates = menuAside ? $$('[data-menu-plate]', menuAside) : [];
  const captionName = $('[data-menu-caption-name]');
  const track = $('.menu-nav__track', menuNav);
  let activeId = null;
  let ticking = false;

  const setActive = (id) => {
    if (!id || id === activeId) return;
    activeId = id;

    entries.forEach(({ link }) => {
      const isActive = link.getAttribute('href') === `#${id}`;
      link.classList.toggle('is-active', isActive);
      if (isActive) {
        link.setAttribute('aria-current', 'location');
      } else {
        link.removeAttribute('aria-current');
      }
    });

    plates.forEach((item) => {
      const plate = $('.plate', item);
      if (plate) plate.classList.toggle('is-active', item.dataset.menuPlate === id);
    });

    if (captionName) {
      const current = links.find((link) => link.getAttribute('href') === `#${id}`);
      if (current) captionName.textContent = current.textContent.trim();
    }

    const activeLink = links.find((link) => link.getAttribute('href') === `#${id}`);
    if (track && activeLink) {
      const trackRect = track.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      const padding = 24;

      if (linkRect.left < trackRect.left + padding) {
        track.scrollBy({ left: linkRect.left - trackRect.left - padding, behavior: reduceMotion ? 'auto' : 'smooth' });
      } else if (linkRect.right > trackRect.right - padding) {
        track.scrollBy({ left: linkRect.right - trackRect.right + padding, behavior: reduceMotion ? 'auto' : 'smooth' });
      }
    }
  };

  const update = () => {
    const header = $('.header');
    const headerHeight = header ? header.getBoundingClientRect().height : 0;
    const navHeight = menuNav.getBoundingClientRect().height;
    const offset = headerHeight + navHeight + 24;
    let current = entries[0];

    entries.forEach((entry) => {
      if (entry.section.getBoundingClientRect().top <= offset) current = entry;
    });

    if (current) setActive(current.id);
  };

  const requestUpdate = () => {
    if (ticking) return;
    ticking = true;
    window.requestAnimationFrame(() => {
      update();
      ticking = false;
    });
  };

  window.addEventListener('scroll', requestUpdate, { passive: true });
  window.addEventListener('resize', requestUpdate);
  update();
}
