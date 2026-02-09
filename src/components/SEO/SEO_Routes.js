import { pagesLinksObj } from "../../data/PagesLinkList";

const BASE_URL = "https://www.anvi.co";

export const seoRoutes = {
  /* ===================== Main Pages ===================== */
  [pagesLinksObj.Home]: {
    title: "Anvi | Engineering the Future",
    url: `${BASE_URL}/`,
    description:
      "ANVI is a future-driven deep-tech organisation powering across four core verticals—Robotics, Space, Studios, and Lifestyle (CAARYO). We engineer intelligent ecosystems with one unifying purpose: Engineering Your Edge™.",
  },

  [pagesLinksObj.AboutUs]: {
    title: "Anvi | About Us",
    url: `${BASE_URL}${pagesLinksObj.AboutUs}`,
    description:
      "Discover how ANVI builds advanced technology ecosystems that empower industries, redefine innovation, and engineer a smarter future.",
  },

  [pagesLinksObj.Industries]: {
    title: "Anvi | Industries",
    url: `${BASE_URL}${pagesLinksObj.Industries}`,
    description:
      "ANVI empowers industries with intelligent systems in robotics, space, energy, semiconductors, textiles, entertainment, life sciences, and social impact.",
  },

  [pagesLinksObj.Solutions]: {
    title: "Anvi | Solutions",
    url: `${BASE_URL}${pagesLinksObj.Solutions}`,
    description:
      "ANVI delivers intelligent engineering solutions across robotics, space, semiconductors, textiles, entertainment, life sciences, and energy.",
  },

  [pagesLinksObj.Careers]: {
    title: "Anvi | Careers",
    url: `${BASE_URL}${pagesLinksObj.Careers}`,
    description:
      "Explore career opportunities at ANVI and join a future-focused team building breakthrough engineering and deep-tech solutions.",
  },

  [pagesLinksObj.News]: {
    title: "Anvi | News",
    url: `${BASE_URL}${pagesLinksObj.News}`,
    description:
      "Stay updated with ANVI’s latest innovations, milestones, research, and breakthroughs across all deep-tech verticals.",
  },

  [pagesLinksObj.Investors]: {
    title: "Anvi | Investors",
    url: `${BASE_URL}${pagesLinksObj.Investors}`,
  },

  [pagesLinksObj.ContactUs]: {
    title: "Anvi | Contact Us",
    url: `${BASE_URL}${pagesLinksObj.ContactUs}`,
    description:
      "Connect with ANVI for collaborations, partnerships, inquiries, and support across robotics, space, semiconductors, and more.",
  },

  /* ===================== Sub Industries ===================== */
  [pagesLinksObj.Energy]: {
    title: "Anvi | Energy",
    url: `${BASE_URL}${pagesLinksObj.Energy}`,
    description:
      "ANVI builds smart power systems, sustainable energy solutions, and predictive technologies for modern cities and industries.",
    breadcrumb: [
      { name: "Home", url: `${BASE_URL}/` },
      { name: "Industries", url: `${BASE_URL}${pagesLinksObj.Industries}` },
      { name: "Energy", url: `${BASE_URL}${pagesLinksObj.Energy}` },
    ],
  },

  [pagesLinksObj.Textiles]: {
    title: "Anvi | Textiles",
    url: `${BASE_URL}${pagesLinksObj.Textiles}`,
    description:
      "ANVI Textiles merges AI tailoring with cultural craftsmanship to deliver personalized and intelligently designed wear.",
    breadcrumb: [
      { name: "Home", url: `${BASE_URL}/` },
      { name: "Industries", url: `${BASE_URL}${pagesLinksObj.Industries}` },
      { name: "Textiles", url: `${BASE_URL}${pagesLinksObj.Textiles}` },
    ],
  },

  [pagesLinksObj.LifeSciences]: {
    title: "Anvi | Life Sciences",
    url: `${BASE_URL}${pagesLinksObj.LifeSciences}`,
    description:
      "ANVI Life Sciences builds systems that support wellness, sustainability, and community health through human-first innovation.",
    breadcrumb: [
      { name: "Home", url: `${BASE_URL}/` },
      { name: "Industries", url: `${BASE_URL}${pagesLinksObj.Industries}` },
      {
        name: "Life Sciences",
        url: `${BASE_URL}${pagesLinksObj.LifeSciences}`,
      },
    ],
  },

  [pagesLinksObj.SemiConductors]: {
    title: "Anvi | Semi Conductors",
    url: `${BASE_URL}${pagesLinksObj.SemiConductors}`,
    description:
      "ANVI creates high-performance chips and intelligent micro-systems powering next-generation electronics and AI platforms.",
    breadcrumb: [
      { name: "Home", url: `${BASE_URL}/` },
      { name: "Industries", url: `${BASE_URL}${pagesLinksObj.Industries}` },
      {
        name: "Semi Conductors",
        url: `${BASE_URL}${pagesLinksObj.SemiConductors}`,
      },
    ],
  },

  [pagesLinksObj.Entertainment]: {
    title: "Anvi | Entertainment",
    url: `${BASE_URL}${pagesLinksObj.Entertainment}`,
    description:
      "ANVI Studios builds immersive worlds and creative technology experiences that blend storytelling with innovation.",
    breadcrumb: [
      { name: "Home", url: `${BASE_URL}/` },
      { name: "Industries", url: `${BASE_URL}${pagesLinksObj.Industries}` },
      {
        name: "Entertainment",
        url: `${BASE_URL}${pagesLinksObj.Entertainment}`,
      },
    ],
  },

  [pagesLinksObj.SocialImpact]: {
    title: "Anvi | Social Impact",
    url: `${BASE_URL}${pagesLinksObj.SocialImpact}`,
    description:
      "ANVI drives sustainable development, education access, and community empowerment through technology-led initiatives.",
    breadcrumb: [
      { name: "Home", url: `${BASE_URL}/` },
      { name: "Industries", url: `${BASE_URL}${pagesLinksObj.Industries}` },
      {
        name: "Social Impact",
        url: `${BASE_URL}${pagesLinksObj.SocialImpact}`,
      },
    ],
  },
};
