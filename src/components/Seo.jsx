import { useEffect } from "react";

const siteName = "In & Out Cleaning";
const defaultDescription =
  "Domestic, commercial, tenancy, takeaway, and tidy-up cleaning across Swanland, Hull, and nearby villages.";

export default function Seo({ title, description = defaultDescription }) {
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

    upsertMeta('meta[name="description"]', "name", "description", description);
    upsertMeta('meta[property="og:title"]', "property", "og:title", title ? `${title} | ${siteName}` : siteName);
    upsertMeta('meta[property="og:description"]', "property", "og:description", description);
  }, [title, description]);

  return null;
}
