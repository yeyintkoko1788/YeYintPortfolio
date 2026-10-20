const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Section entrances, staggered through --d in the markup.
const reveals = document.querySelectorAll<HTMLElement>("[data-reveal]");
if ("IntersectionObserver" in window && !reduced) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const e of entries) {
        if (e.isIntersecting) {
          e.target.classList.add("is-in");
          io.unobserve(e.target);
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.08 },
  );
  reveals.forEach((el) => io.observe(el));
} else {
  reveals.forEach((el) => el.classList.add("is-in"));
}

// Local time in my time zone, so a recruiter can see the overlap with theirs.
const clock = document.querySelector<HTMLTimeElement>("[data-clock]");
if (clock) {
  const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: clock.dataset.tz });
  const tick = () => {
    clock.textContent = fmt.format(new Date());
  };
  tick();
  setInterval(tick, 20000);
}
