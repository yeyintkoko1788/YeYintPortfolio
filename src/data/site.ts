// Everything a visitor can use to reach me lives here, so it is edited in one place.
// The phone number from my CV is deliberately not published.
export const site = {
  name: "Ye Yint Ko Ko",
  role: "Senior Android Engineer",
  location: "Da Nang, Vietnam",
  timeZone: "Asia/Ho_Chi_Minh",
  utcLabel: "UTC+7",
  since: 2018,
  email: "yeyintkoko.1788@gmail.com",
  emailSubject: "Android engineering opportunity",
  linkedin: "https://www.linkedin.com/in/ye-yint-ko-ko-07252218b",
  github: "https://github.com/yeyintkoko1788",
  // Used for canonical and social URLs. Override with SITE_URL at build time.
  url: import.meta.env.SITE_URL ?? "https://yeyintkoko1788.github.io",
  description:
    "Ye Yint Ko Ko is a senior Android engineer in Da Nang, Vietnam, building Kotlin and Jetpack Compose apps since 2018: messaging, EdTech and logistics, including a product past one million Google Play downloads. Open to remote roles with international teams.",
};

export const mailto = `mailto:${site.email}?subject=${encodeURIComponent(site.emailSubject)}`;

// Atmosphere photographs, Unsplash licence, taken from Lorem Picsum. Links verified against its metadata.
export const photoCredits = [
  { by: "Carl Nenzen Loven", href: "https://unsplash.com/photos/busqfOj6i80" },
  { by: "Sérgio Rola", href: "https://unsplash.com/photos/B1amIgaNkwA" },
  { by: "Samuel Zeller", href: "https://unsplash.com/photos/j0g8taxHZa0" },
  { by: "Mike Wilson", href: "https://unsplash.com/photos/rM7B4DheQc0" },
  { by: "Christian Bardenhorst", href: "https://unsplash.com/photos/8lMhzUjD1Wk" },
];

// Prefixes public assets with the deploy base path (needed for GitHub Pages project sites).
export const asset = (path: string) =>
  `${import.meta.env.BASE_URL.replace(/\/$/, "")}/${path.replace(/^\//, "")}`;
