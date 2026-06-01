import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const siteName = "In & Out Cleaning";
const baseUrl = "https://hullcleaning.co.uk";
const defaultDescription =
  "Domestic, commercial, tenancy, takeaway, and tidy-up cleaning across Swanland, Hull, and nearby villages.";

export default function Seo({ title, description = defaultDescription }) {
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

    const canonicalUrl = `${baseUrl}${pathname}`;

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title ? `${title} | ${siteName}` : siteName);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
    upsertMeta('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    upsertLink("canonical", canonicalUrl);
  }, [title, description, pathname]);

  return null;
}
