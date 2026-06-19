import { useLang } from "@/i18n/LanguageProvider";

export const WHATSAPP_NUMBER = "31600000000"; // +31 6 0000 0000 (placeholder)

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export function FloatingWhatsApp() {
  const { t, lang } = useLang();
  const message =
    lang === "ar"
      ? "مرحباً الأسواني، أرغب بالاستفسار عن رحلة في أوروبا."
      : "Hi Al-Aswani, I'd like to ask about a trip in Europe.";
  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.common.whatsapp}
      className="fixed bottom-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-10px_rgba(0,0,0,0.45)] transition hover:scale-105 end-6"
      style={{ insetInlineEnd: "1.5rem" }}
    >
      <svg viewBox="0 0 32 32" width="26" height="26" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.4c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.26-.47-2.4-1.49-.89-.79-1.49-1.77-1.66-2.07-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.21-.24-.58-.49-.5-.67-.51l-.57-.01c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49 0 1.47 1.07 2.89 1.22 3.09.15.2 2.1 3.2 5.08 4.49.71.31 1.27.49 1.7.63.71.23 1.36.2 1.87.12.57-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35zM16 5.33c-5.89 0-10.67 4.78-10.67 10.67 0 1.88.49 3.71 1.42 5.33L5.33 26.67l5.5-1.44a10.6 10.6 0 0 0 5.17 1.32c5.89 0 10.67-4.78 10.67-10.67S21.89 5.33 16 5.33zm0 19.43c-1.59 0-3.15-.43-4.5-1.24l-.32-.19-3.27.85.87-3.18-.21-.33a8.78 8.78 0 0 1-1.34-4.67c0-4.84 3.94-8.77 8.77-8.77 4.84 0 8.77 3.94 8.77 8.77 0 4.84-3.94 8.76-8.77 8.76z"/>
      </svg>
    </a>
  );
}