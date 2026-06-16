document.addEventListener('DOMContentLoaded', () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const revealTargets = new Set();

  const startKeepAlive = () => {
    if (!/^https?:$/.test(window.location.protocol)) {
      return;
    }

    const keepAliveUrl = new URL(window.location.pathname, window.location.origin);
    const ping = () => {
      const pingUrl = new URL(keepAliveUrl);
      pingUrl.searchParams.set('keepalive', Date.now().toString());

      fetch(pingUrl.toString(), {
        method: 'HEAD',
        cache: 'no-store',
        credentials: 'same-origin',
      }).catch(() => {
        // Ignore keep-alive failures so they do not affect the page experience.
      });
    };

    ping();
    window.setInterval(ping, 10000);
  };

  startKeepAlive();

  const registerGroup = (selector, directionResolver) => {
    document.querySelectorAll(selector).forEach((container) => {
      const children = Array.from(container.children).filter((child) => {
        return child instanceof HTMLElement && !child.classList.contains('scroll-reveal');
      });

      children.forEach((child, index) => {
        child.classList.add('scroll-reveal');
        child.dataset.reveal = directionResolver(index, child);
        child.style.setProperty('--reveal-delay', `${Math.min(index * 90, 360)}ms`);
        revealTargets.add(child);
      });
    });
  };

  registerGroup('.hero-grid', (index) => (index % 2 === 0 ? 'left' : 'right'));
  registerGroup('.grid-2', (index) => (index % 2 === 0 ? 'left' : 'right'));
  registerGroup('.grid-3', () => 'up-soft');
  registerGroup('.grid-4', () => 'up-soft');
  registerGroup('.grid', () => 'up-soft');
  registerGroup('.bento', () => 'up-soft');
  registerGroup('.footer-grid', () => 'up-soft');
  registerGroup('.footer-simple', () => 'up-soft');

  document.querySelectorAll('.section > *').forEach((child) => {
    if (!(child instanceof HTMLElement) || revealTargets.has(child)) {
      return;
    }
    child.classList.add('scroll-reveal');
    child.dataset.reveal = 'up-soft';
    child.style.setProperty('--reveal-delay', '0ms');
    revealTargets.add(child);
  });

  if (!revealTargets.size) {
    return;
  }

  document.body.classList.add('reveal-active');

  if (prefersReducedMotion || !('IntersectionObserver' in window)) {
    revealTargets.forEach((target) => target.classList.add('reveal-in'));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add('reveal-in');
      observer.unobserve(entry.target);
    });
  }, {
    root: null,
    rootMargin: '0px 0px -12% 0px',
    threshold: 0.14,
  });

  revealTargets.forEach((target) => observer.observe(target));
});