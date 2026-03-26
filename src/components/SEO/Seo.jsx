import { useEffect } from "react";
import commonSEO from "./Common_Seo";

const SEO = ({ title, description, keywords, url, breadcrumb }) => {

  /* Run once (kept for future use if needed) */
  // useEffect(() => {
  //   setCharset();
  // }, []);

  useEffect(() => {

    /* ===============================
       Merge Common + Page SEO
    =============================== */

    const finalTitle = title || commonSEO.title;
    const finalDescription = description || commonSEO.description;
    const finalUrl = url || commonSEO.url;

    /* ===============================
       BASIC META (Dynamic Only)
    =============================== */

    document.title = finalTitle;

    // Page-level override allowed
    setMeta("description", finalDescription);

    /* ===============================
       CANONICAL (Important for SPA)
    =============================== */

    setLink("canonical", finalUrl);

    /* ===============================
       BREADCRUMB SCHEMA
    =============================== */

    if (breadcrumb?.length) {
      setBreadcrumbSchema(breadcrumb);
    } else {
      removeBreadcrumbSchema();
    }

  }, [title, description, url, breadcrumb]);

  return null;
};

export default SEO;


/* ================================================= */
/* HELPERS */
/* ================================================= */


/* ===============================
   META TAG SETTER
=============================== */

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



/* ===============================
   CANONICAL LINK
=============================== */

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
   BREADCRUMB SCHEMA
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
    "script[type='application/ld+json'][data-breadcrumb]"
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
    "script[type='application/ld+json'][data-breadcrumb]"
  );

  if (script) script.remove();
};