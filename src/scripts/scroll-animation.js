/**
 * Vanilla IntersectionObserver for scroll animations
 * Replaces the React useScrollAnimation hook
 */
function initScrollAnimations() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const el = entry.target;
          const animation = el.dataset.animation || 'animate-fade-in';
          el.classList.add(animation);
          observer.unobserve(el);
        }
      });
    },
    {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px',
    }
  );

  document.querySelectorAll('.animate-on-scroll').forEach((el) => {
    observer.observe(el);
  });
}

// Run on initial load
initScrollAnimations();

// Re-run after Astro page transitions (if using View Transitions)
document.addEventListener('astro:page-load', initScrollAnimations);
