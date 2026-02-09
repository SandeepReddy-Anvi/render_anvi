import { useEffect } from "react";
import commonSEO from "./Common_Seo";

const SEO = ({ title, description, keywords, url, breadcrumb }) => {
  // Run once
  useEffect(() => {
    setCharset();
  }, []);

  useEffect(() => {
    /* ===============================
       Merge Common + Page SEO
    =============================== */

    const finalTitle = title || commonSEO.title;
    const finalDescription = description || commonSEO.description;
    const finalKeywords = keywords || commonSEO.keywords;
    const finalUrl = url || commonSEO.url;

    /* ===============================
       BASIC META
    =============================== */

    document.title = finalTitle;

    setMeta("description", finalDescription);
    setMeta("keywords", finalKeywords);
    setMeta("author", commonSEO.author);
    setMeta("robots", commonSEO.robots);
    setMeta("language", commonSEO.language);
    setMeta("theme-color", commonSEO.themeColor);

    /* ===============================
    EXTRA META (RECOMMENDED)
    =============================== */

    setMeta("viewport", "width=device-width, initial-scale=1");
    setMeta("referrer", "strict-origin-when-cross-origin");
    setMeta("geo.region", "IN-TG");
    setMeta("geo.placename", "Hyderabad");

    /* ===============================
       CANONICAL
    =============================== */

    setLink("canonical", finalUrl);

    /* ===============================
       OPEN GRAPH
    =============================== */

    setProperty("og:type", "website");
    setProperty("og:site_name", commonSEO.og.siteName);
    setProperty("og:title", finalTitle);
    setProperty("og:description", finalDescription);
    setProperty("og:url", finalUrl);
    setProperty("og:image", commonSEO.og.image);
    setProperty("og:image:alt", commonSEO.og.imageAlt);

    /* ===============================
       TWITTER
    =============================== */

    setMeta("twitter:card", commonSEO.twitter.card);
    setMeta("twitter:title", finalTitle);
    setMeta("twitter:description", finalDescription);
    setMeta("twitter:image", commonSEO.twitter.image);

    /* ===============================
       GOOGLE VERIFICATION
    =============================== */

    setMeta("google-site-verification", commonSEO.googleVerification);

    /* ===============================
       STRUCTURED DATA
    =============================== */

    setJsonLd(commonSEO.structuredData);

    /* ===============================
       BREADCRUMB SCHEMA
    =============================== */

    if (breadcrumb?.length) {
      setBreadcrumbSchema(breadcrumb);
    } else {
      removeBreadcrumbSchema();
    }
  }, [title, description, keywords, url, breadcrumb]);

  return null;
};

export default SEO;

/* ================================================= */
/* HELPERS */
/* ================================================= */

const setCharset = () => {
  let meta = document.querySelector("meta[charset]");

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("charset", "UTF-8");
    document.head.prepend(meta);
  }
};

const setMeta = (name, content) => {
  if (!content) return;

  let meta = document.querySelector(`meta[name="${name}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.name = name;
    document.head.appendChild(meta);
  }

  meta.content = content;
};

const setProperty = (property, content) => {
  if (!content) return;

  let meta = document.querySelector(`meta[property="${property}"]`);

  if (!meta) {
    meta = document.createElement("meta");
    meta.setAttribute("property", property);
    document.head.appendChild(meta);
  }

  meta.content = content;
};

const setLink = (rel, href) => {
  if (!href) return;

  let link = document.querySelector(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
};

/* ===============================
  JSON-LD
=============================== */

const setJsonLd = (schema) => {
  if (!schema) return;

  let script = document.querySelector(
    "script[type='application/ld+json'][data-org]",
  );

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.org = "true";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

/* ===============================
  BREADCRUMB
=============================== */

const setBreadcrumbSchema = (breadcrumb) => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumb.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  let script = document.querySelector(
    "script[type='application/ld+json'][data-breadcrumb]",
  );

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.dataset.breadcrumb = "true";
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(schema);
};

const removeBreadcrumbSchema = () => {
  const script = document.querySelector(
    "script[type='application/ld+json'][data-breadcrumb]",
  );

  if (script) script.remove();
};
