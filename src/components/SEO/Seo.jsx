import { useEffect } from "react";

const SEO = ({ title, description, breadcrumb, keywords, url }) => {
  useEffect(() => {
    /* ---------------- Title ---------------- */
    if (title) {
      document.title = title;
    }

    /* ---------------- Description ---------------- */
    if (description) {
      setMeta("description", description);
    }

    /* ---------------- Keywords ---------------- */
    if (keywords) {
      setMeta("keywords", keywords);
    }

    /* ---------------- Canonical ---------------- */
    if (url) {
      setLink("canonical", url);
    }

    /* ---------------- OpenGraph ---------------- */
    if (title) setProperty("og:title", title);
    if (description) setProperty("og:description", description);
    if (url) setProperty("og:url", url);
    setProperty("og:type", "website");

    /* ---------------- Breadcrumb Schema ---------------- */
    if (breadcrumb?.length) {
      setBreadcrumbSchema(breadcrumb);
    } else {
      removeBreadcrumbSchema();
    }
  }, [title, description, keywords, breadcrumb, url]);

  return null;
};

/* ================================================= */
/* Helpers */
/* ================================================= */

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
  let link = document.querySelector(`link[rel="${rel}"]`);

  if (!link) {
    link = document.createElement("link");
    link.rel = rel;
    document.head.appendChild(link);
  }

  link.href = href;
};

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

export default SEO;