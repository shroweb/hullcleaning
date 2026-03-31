import { useEffect } from "react";

const widgetScriptSrc = "https://w.app/widget-v1/YXOa3l.js";

export default function WhatsAppChatWidget() {
  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${widgetScriptSrc}"]`);

    if (existingScript) {
      return undefined;
    }

    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src = widgetScriptSrc;
    document.head.appendChild(script);

    return () => {
      script.remove();
    };
  }, []);

  return null;
}
