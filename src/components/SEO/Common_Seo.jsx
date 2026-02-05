const all_keywords = [
  "ANVI",
  "ANVI India",
  "ANVI Deep-Tech",
  "ANVI Deep-Tech Organisation",
  "Engineering Your Edge",
  "Future-Ready Innovation",
  "Deep-Tech Innovation India",
  "Advanced Technology Ecosystems",
  "Multi-Vertical Technology Company",
  "Intelligent System Engineering",
  "Future-Focused Engineering",
  "Next-Generation Technology Solutions",
  "Purpose-Led Engineering",
  "High-Performance Engineering Systems",
  "Future-Driven Innovation",
  "ANVI Technology Solutions",
  "ANVI Global Innovation",
  "Transforming Industries with Technology",
  "Engineering Future Systems",
  "Intelligent Innovation Platform",
  "ANVI Verticals",

  "Deep Tech",
  "Industrial Automation",
  "Robotics",
  "Artificial Intelligence",
  "AI Systems",
  "Internet of Things",
  "IoT",
  "Autonomous Robots",
  "Sustainable Technology",
  "Smart Infrastructure",
  "Innovation",

  "Anvi Robotics",
  "Anvi Space",
  "Anvi Energy",
  "Anvi Social Impact",
  "Anvi Life Sciences",
  "Anvi Semiconductors",
];

const commonSEO = {
  /* ---------------- Basic SEO ---------------- */

  title: "Anvi | Engineering the Future",

  description:
    "Anvi Engineers the future using robotics, AI, and deep-tech innovation. We build intelligent systems that enhance safety, efficiency, and sustainability across industries.",

  keywords: all_keywords.join(", "),

  author: "Anvi Robotics",

  language: "English",

  robots: "index,follow",

  themeColor: "#ffffff",

  /* ---------------- URLs ---------------- */

  url: "https://www.anvi.co/",

  canonical: "https://www.anvi.co/",

  hreflang: "en",

  /* ---------------- Favicons ---------------- */

  icons: [
    {
      rel: "icon",
      href: "/favicon/16x16.png",
      sizes: "16x16",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon/32x32.png",
      sizes: "32x32",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon/192x192.png",
      sizes: "192x192",
      type: "image/png",
    },
    {
      rel: "icon",
      href: "/favicon/512x512.png",
      sizes: "512x512",
      type: "image/png",
    },

    { rel: "apple-touch-icon", href: "/favicon/16x16.png", sizes: "16x16" },
    { rel: "apple-touch-icon", href: "/favicon/32x32.png", sizes: "32x32" },
    { rel: "apple-touch-icon", href: "/favicon/192x192.png", sizes: "192x192" },
    { rel: "apple-touch-icon", href: "/favicon/512x512.png", sizes: "512x512" },
  ],

  /* ---------------- Open Graph ---------------- */

  og: {
    type: "website",
    url: "https://www.anvi.co/",
    siteName: "Anvi",
    title: "Anvi.Co",
    description:
      "ANVI is a future-driven deep-tech organisation powering across four core verticals-Robotics, Space, Studios, and Lifestyle (CAARYO). We engineer intelligent ecosystems that power 8+ industries with one unifying purpose: Engineering Your Edge™",
    image: "https://www.anvi.co/logos/anvi_logo.svg",
    imageAlt: "Anvi",
  },

  /* ---------------- Twitter ---------------- */

  twitter: {
    card: "summary_large_image",
    title: "Anvi | Engineering the Future",
    description:
      "ANVI is a future-driven deep-tech organisation powering across four core verticals-Robotics, Space, Studios, and Lifestyle (CAARYO). We engineer intelligent ecosystems that power 8+ industries with one unifying purpose: Engineering Your Edge™",
    image: "https://www.anvi.co/logos/anvi_logo.svg",
  },

  /* ---------------- PWA ---------------- */

  manifest: "/manifest.json",

  /* ---------------- Structured Data ---------------- */

  structuredData: {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Anvi Robotics",
    url: "https://www.anvi.co",
    logo: "https://www.anvi.co/logos/anvi_logo.svg",

    description:
      "Anvi engineers robotics, automation, and AI-driven intelligent systems for industrial innovation.",

    foundingDate: "2020",

    founders: [
      {
        "@type": "Person",
        name: "Psv Kisshhan",
      },
    ],

    address: {
      "@type": "PostalAddress",
      streetAddress: "1st Floor, Profound Builders, Whitefields, Kondapur",
      addressLocality: "Hyderabad",
      addressRegion: "Telangana",
      postalCode: "500081",
      addressCountry: "IN",
    },

    sameAs: [
      "https://www.linkedin.com/company/anvirobotics",
      "https://www.instagram.com/anvi_robotics",
    ],
  },

  /* ---------------- Google ---------------- */

  googleVerification: "_kB6vrBFybsGhF6mFUKZYWOpwQsXyQ1HA-Tpe14kA5w",

  googleAnalyticsId: "G-GCLVPNVYER",
};

export default commonSEO;