// Every claim here comes from my CV. Where the CV gives no number, none is shown.

export type Band = { label: string; items: string[]; lit?: boolean };

export interface Project {
  id: string;
  name: string;
  meta: string;
  year: string;
  summary: string;
  decision: string;
  bands: Band[];
}

export const projects: Project[] = [
  {
    id: "saya",
    name: "Saya",
    meta: "English and Japanese learning · Binary Lab",
    year: "2022–24",
    summary:
      "I led Android development while the product grew to more than 1M Google Play downloads. I shipped microlessons, short educational videos, Zoom live classes with scheduling and waiting rooms, adaptive level tests, mock exams, achievements, and subscriptions through both Google Play and Huawei billing.",
    decision: "One app, two billing stores, and live video inside a learning flow.",
    bands: [
      { label: "Learning", items: ["Microlessons", "Level tests", "Mock exams", "Achievements"] },
      { label: "Live and video", items: ["Zoom live classes", "Scheduling", "Waiting rooms", "Short videos"], lit: true },
      { label: "Money", items: ["Google Play billing", "Huawei billing", "Premium subscriptions"] },
    ],
  },
  {
    id: "onecheck",
    name: "OneCheck",
    meta: "Attendance management · JOYGroups International",
    year: "2024–now",
    summary:
      "I designed and built this from scratch in Jetpack Compose on Clean Architecture. It covers GPS verification, biometric sign-in, PIN security, real-time check-in and check-out, attendance calendars, leave management, analytics, and device detection with administrator approval.",
    decision: "Location, biometrics, PIN and device approval, all inside one attendance flow.",
    bands: [
      { label: "Compose interface", items: ["Check-in and out", "Calendars", "Leave", "Analytics"] },
      { label: "Clean Architecture", items: ["Presentation", "Domain", "Data"], lit: true },
      { label: "Trust checks", items: ["GPS verification", "Biometrics", "PIN", "Device approval"] },
    ],
  },
  {
    id: "xhcounter",
    name: "XHCounterApp",
    meta: "Logistics counter · JOYGroups International",
    year: "2024–now",
    summary:
      "I inherited a codebase that was unstructured and UI-only, and rebuilt it on Clean Architecture rather than patching it. I added parcel scanning with ML Kit and CameraX, customer and rider management, approval workflows, signature-based payment capture, Bluetooth ESC/POS receipt printing, and reporting.",
    decision: "Rebuild the structure first, then add hardware: scanner, signature pad, thermal printer.",
    bands: [
      { label: "Counter workflows", items: ["Customers", "Riders", "Approvals", "Reports"] },
      { label: "Clean Architecture", items: ["Presentation", "Domain", "Data"], lit: true },
      { label: "Hardware", items: ["ML Kit and CameraX scanning", "Signature payment", "Bluetooth ESC/POS printing"] },
    ],
  },
  {
    id: "messaging",
    name: "Messaging suite",
    meta: "MyComm, HomeChat, iMessaging · JOYGroups International",
    year: "2024–now",
    summary:
      "I led Android development across three real-time communication apps that share one Socket.IO messaging core. I built and maintain channels, topic threads, reactions, moderation, media sharing, delivery and read receipts, galleries, and role-based access control.",
    decision: "Three products built on one shared messaging core.",
    bands: [
      { label: "Three apps", items: ["MyComm", "HomeChat", "iMessaging"] },
      { label: "Socket.IO messaging core", items: ["Channels", "Topic threads", "Reactions", "Receipts"], lit: true },
      { label: "Community controls", items: ["Moderation", "Role-based access", "Media and galleries"] },
    ],
  },
  {
    id: "tay",
    name: "Tay",
    meta: "Video and channel platform · Myanmar Media Linkage",
    year: "2020–21",
    summary:
      "I led development of a video and channel platform with content discovery, subscriptions and personalised feeds, plus a digital music marketplace for artists and buyers. I introduced GraphQL to replace REST requests that over-fetched, which reduced API payload sizes.",
    decision: "GraphQL over REST where screens were downloading far more than they showed.",
    bands: [
      { label: "Product", items: ["Discovery", "Subscriptions", "Personalised feeds", "Music marketplace"] },
      { label: "GraphQL", items: ["Replaced over-fetching REST", "Smaller payloads"], lit: true },
    ],
  },
];

export interface CapabilityGroup {
  name: string;
  summary: string;
  items: { name: string; note: string }[];
}

export const capabilities: CapabilityGroup[] = [
  {
    name: "Build",
    summary: "Kotlin and Compose first, with the platform services around them.",
    items: [
      { name: "Kotlin", note: "The language of the current apps." },
      { name: "Java", note: "For the older codebases I have inherited and modernised." },
      { name: "Jetpack Compose", note: "OneCheck was built in it from the first screen." },
      { name: "Coroutines and Flow", note: "Asynchronous work and data streams." },
      { name: "Room", note: "Local persistence." },
      { name: "WorkManager", note: "Background work." },
      { name: "CameraX and ML Kit", note: "Parcel barcode and QR scanning in XHCounterApp." },
      { name: "Media3 / ExoPlayer", note: "Video playback." },
    ],
  },
  {
    name: "Structure",
    summary: "Architecture that a team can keep changing, and the habits around it.",
    items: [
      { name: "Clean Architecture", note: "OneCheck from scratch, XHCounterApp as a rebuild." },
      { name: "MVVM", note: "Paired with Clean Architecture in current work." },
      { name: "MVP", note: "For earlier codebases." },
      { name: "Hilt and Dagger", note: "Dependency injection." },
      { name: "Legacy modernisation", note: "Deprecated APIs and build pipelines, as on Fatty Food Delivery." },
      { name: "Code review", note: "How I mentor junior developers." },
      { name: "Performance work", note: "Startup and runtime tuning at Yammobots." },
    ],
  },
  {
    name: "Connect",
    summary: "Networking, real-time, devices and the services apps depend on.",
    items: [
      { name: "Retrofit and OkHttp", note: "REST clients." },
      { name: "GraphQL", note: "Introduced at Tay to stop over-fetching." },
      { name: "Socket.IO", note: "The core of the three-app messaging suite." },
      { name: "Firebase", note: "Cloud Messaging, Analytics, Crashlytics, Realtime Database." },
      { name: "Zoom SDK", note: "Live classes in Saya." },
      { name: "Google Maps and Mapbox", note: "Maps and location." },
      { name: "Bluetooth ESC/POS", note: "Thermal receipt printing." },
      { name: "Biometrics and NDK/JNI", note: "AndroidX Biometric, and secure storage through the NDK." },
      { name: "Play and Huawei billing", note: "Subscriptions on both stores." },
    ],
  },
];

export interface Role {
  company: string;
  title: string;
  dates: string;
  place: string;
  line: string;
}

export const roles: Role[] = [
  {
    company: "JOYGroups International",
    title: "Senior Android Developer",
    dates: "2024 – now",
    place: "Remote",
    line: "OneCheck, XHCounterApp, XHRider, the three-app messaging suite, and the revival of the Fatty Food Delivery user, rider and restaurant apps under a tight deadline.",
  },
  {
    company: "Binary Lab",
    title: "Senior Android Developer",
    dates: "2022 – 2024",
    place: "Yangon",
    line: "Led Android on Saya, and built the MCPA member platform with events, polls, file chat and deep-link onboarding.",
  },
  {
    company: "Myanmar Media Linkage",
    title: "Senior Android Developer",
    dates: "2021 – 2022",
    place: "Remote",
    line: "Conceived and launched BallSayar, a fantasy football app with live scoring, from first commit to Play Store release.",
  },
  {
    company: "Super Seven Star Group",
    title: "Android Developer",
    dates: "2021",
    place: "Yangon",
    line: "Built MZOnlineMarket, an e-commerce app with secure payments, authentication, catalogue and order tracking.",
  },
  {
    company: "Myanmar Media Linkage",
    title: "Senior Android Developer",
    dates: "2020 – 2021",
    place: "Yangon",
    line: "Led Tay and delivered the TaytuneArtist and TaytuneBuyer music marketplace, introducing GraphQL.",
  },
  {
    company: "Yammobots",
    title: "Android Developer",
    dates: "2018 – 2020",
    place: "Yangon",
    line: "Owned apps from UX through QA and deployment, and cut startup and runtime load times.",
  },
];

export const education = {
  school: "University of Technology (Yatanarpon Cyber City)",
  degree: "Bachelor of Engineering, Information Science and Technology",
};
