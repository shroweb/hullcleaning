import { useEffect } from "react";

const widgetScriptSrc = "https://w.app/widget-v1/YXOa3l.js";

function labelWidgetButton() {
  const btn = document.querySelector("a.whatsapp-btn");
  if (btn && !btn.getAttribute("aria-label")) {
    btn.setAttribute("aria-label", "Chat with us on WhatsApp");
  }
}

export default function WhatsAppChatWidget() {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${widgetScriptSrc}"]`);

    if (!existingScript) {
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = widgetScriptSrc;
      document.head.appendChild(script);
    }

    const observer = new MutationObserver(labelWidgetButton);
    observer.observe(document.body, { childList: true, subtree: true });
    labelWidgetButton();

    return () => {
      observer.disconnect();
    };
  }, []);

  return null;
}
