const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

// Hero entrance: the masked headline lines rise first, then the lead and button.
const hero = document.querySelector<HTMLElement>(".hero");
// setTimeout rather than requestAnimationFrame: rAF is paused in background tabs, which would leave the title masked.
if (hero) setTimeout(() => hero.classList.add("is-in"), 40);

// Section entrances: heading, then text, then picture, staggered through --d in the markup.
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

// Nav gets a solid ground once the hero has scrolled away.
const nav = document.querySelector<HTMLElement>("[data-nav]");
if (nav && hero) {
  const toggle = () => nav.classList.toggle("is-solid", window.scrollY > hero.offsetHeight - 80);
  window.addEventListener("scroll", toggle, { passive: true });
  toggle();
}

// Selected work: scroll progress through the pinned section picks the active project,
// and a click or focus overrides it briefly so the visitor stays in control.
const work = document.querySelector<HTMLElement>(".work");
const rows = Array.from(document.querySelectorAll<HTMLElement>("[data-project]"));
const diagrams = Array.from(document.querySelectorAll<HTMLElement>("[data-diagram]"));
if (work && rows.length) {
  let current = 0;
  let holdUntil = 0;
  const select = (i: number) => {
    if (i === current) return;
    current = i;
    rows.forEach((r, k) => {
      const on = k === i;
      r.classList.toggle("is-active", on);
      r.querySelector(".row-head")?.setAttribute("aria-expanded", String(on));
    });
    diagrams.forEach((d, k) => d.classList.toggle("is-active", k === i));
  };
  const onScroll = () => {
    if (performance.now() < holdUntil) return;
    const rect = work.getBoundingClientRect();
    const total = rect.height - window.innerHeight;
    if (total <= 0) return;
    const p = Math.min(0.9999, Math.max(0, -rect.top / total));
    select(Math.min(rows.length - 1, Math.floor(p * rows.length)));
  };
  // onScroll only reads one rect and compares an index, so it needs no rAF throttle.
  window.addEventListener("scroll", onScroll, { passive: true });
  rows.forEach((row, i) => {
    const head = row.querySelector<HTMLElement>(".row-head")!;
    const take = () => {
      holdUntil = performance.now() + 1500;
      select(i);
    };
    head.addEventListener("click", take);
    head.addEventListener("focus", take);
    head.addEventListener("mouseenter", () => {
      if (window.matchMedia("(hover: hover)").matches) take();
    });
  });
  onScroll();
}

// Skills: the context line for the name being hovered or focused.
const note = document.getElementById("cap-note");
const defaultNote = note?.textContent ?? "";
document.querySelectorAll<HTMLElement>(".cap").forEach((btn) => {
  const show = () => {
    if (note) note.textContent = btn.dataset.note ?? "";
  };
  const reset = () => {
    if (note) note.textContent = defaultNote;
  };
  btn.addEventListener("mouseenter", show);
  btn.addEventListener("focus", show);
  btn.addEventListener("mouseleave", reset);
  btn.addEventListener("blur", reset);
});

// Local time in my time zone, so a recruiter can see the overlap with theirs.
const clock = document.querySelector<HTMLTimeElement>("[data-clock]");
if (clock) {
  const tz = clock.dataset.tz;
  const fmt = new Intl.DateTimeFormat("en-GB", { hour: "2-digit", minute: "2-digit", timeZone: tz });
  const tick = () => {
    clock.textContent = fmt.format(new Date());
  };
  tick();
  setInterval(tick, 20000);
}
