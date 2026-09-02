import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "In & Out Cleaning";
const baseUrl = "https://hullcleaning.co.uk";
const defaultDescription =
  "Domestic, commercial, tenancy, takeaway, and tidy-up cleaning across Swanland, Hull, and nearby villages.";

const getCanonicalPath = (pathname) =>
  pathname === "/" ? pathname : `${pathname.replace(/\/+$/, "")}/`;

export default function Seo({ title, description = defaultDescription, schema, breadcrumbs }) {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = title ? `${title} | ${siteName}` : siteName;

    const upsertMeta = (selector, attrName, attrValue, content) => {
      let tag = document.querySelector(selector);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attrName, attrValue);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    const upsertLink = (rel, href) => {
      let tag = document.querySelector(`link[rel="${rel}"]`);
      if (!tag) {
        tag = document.createElement("link");
        tag.setAttribute("rel", rel);
        document.head.appendChild(tag);
      }
      tag.setAttribute("href", href);
    };

    const canonicalUrl = `${baseUrl}${getCanonicalPath(pathname)}`;
    const socialImage = `${baseUrl}/logo.png`;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:locale"]', "property", "og:locale", "en_GB");
    upsertMeta('meta[property="og:site_name"]', "property", "og:site_name", siteName);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title ? `${title} | ${siteName}` : siteName);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertMeta('meta[property="og:type"]', "property", "og:type", "website");
    upsertMeta('meta[property="og:image"]', "property", "og:image", socialImage);
    upsertMeta('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    upsertMeta('meta[name="twitter:title"]', "name", "twitter:title", title ? `${title} | ${siteName}` : siteName);
    upsertMeta('meta[name="twitter:description"]', "name", "twitter:description", description);
    upsertMeta('meta[name="twitter:image"]', "name", "twitter:image", socialImage);
    upsertLink("canonical", canonicalUrl);

    // Dynamic Schema Injection
    const schemasToInject = [];

    if (breadcrumbs && breadcrumbs.length > 0) {
      schemasToInject.push({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": breadcrumbs.map((crumb, idx) => ({
          "@type": "ListItem",
          "position": idx + 1,
          "name": crumb.name,
          "item": crumb.path.startsWith("http") ? crumb.path : `${baseUrl}${getCanonicalPath(crumb.path)}`
        }))
      });
    }

    if (schema) {
      if (Array.isArray(schema)) {
        schemasToInject.push(...schema);
      } else {
        schemasToInject.push(schema);
      }
    }

    let dynamicScript = document.getElementById("dynamic-seo-schema");
    if (schemasToInject.length > 0) {
      if (!dynamicScript) {
        dynamicScript = document.createElement("script");
        dynamicScript.id = "dynamic-seo-schema";
        dynamicScript.type = "application/ld+json";
        document.head.appendChild(dynamicScript);
      }
      dynamicScript.textContent = JSON.stringify(
        schemasToInject.length === 1 ? schemasToInject[0] : schemasToInject
      );
    } else if (dynamicScript) {
      dynamicScript.remove();
    }

    return () => {
      const scriptOnCleanup = document.getElementById("dynamic-seo-schema");
      if (scriptOnCleanup) scriptOnCleanup.remove();
    };
  }, [title, description, pathname, schema, breadcrumbs]);

  return null;
}
