import { useEffect } from "react";

const siteName = "In & Out Cleaning";
const defaultDescription =
  "Domestic, commercial, tenancy, takeaway, and tidy-up cleaning across Swanland, Hull, and nearby villages.";

export default function Seo({ title, description = defaultDescription }) {
  useEffect(() => {
    document.title = title ? `${title} | ${siteName}` : siteName;

    let descriptionTag = document.querySelector('meta[name="description"]');
    if (!descriptionTag) {
      descriptionTag = document.createElement("meta");
      descriptionTag.setAttribute("name", "description");
      document.head.appendChild(descriptionTag);
    }
    descriptionTag.setAttribute("content", description);
  }, [title, description]);

  return null;
}
