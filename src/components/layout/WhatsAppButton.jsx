import contact from "../../data/contact.js";
import styles from "./WhatsAppButton.module.css";

export default function WhatsAppButton() {
  const href = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I'd like to request a quote for vessel supply."
  )}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={styles.button}
      aria-label="Hail the chandler on WhatsApp"
    >
      <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
        <path
          fill="currentColor"
          d="M12.04 2c-5.52 0-10 4.48-10 10 0 1.76.46 3.48 1.34 5L2 22l5.15-1.35A9.96 9.96 0 0 0 12.04 22c5.52 0 10-4.48 10-10s-4.48-10-10-10Zm0 18.14c-1.6 0-3.17-.43-4.54-1.24l-.33-.19-3.06.8.82-2.98-.21-.31A8.12 8.12 0 0 1 3.9 12c0-4.49 3.65-8.14 8.14-8.14S20.18 7.51 20.18 12s-3.65 8.14-8.14 8.14Zm4.48-6.1c-.25-.12-1.46-.72-1.68-.8-.23-.08-.39-.12-.56.12-.17.25-.64.8-.78.96-.14.17-.29.19-.53.06-.25-.12-1.04-.38-1.98-1.22-.73-.65-1.23-1.46-1.37-1.7-.14-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.12-.14.16-.25.24-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.23.25-.86.84-.86 2.05 0 1.21.88 2.38 1 2.54.12.17 1.74 2.65 4.22 3.72.59.25 1.05.4 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.46-.6 1.66-1.17.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.28Z"
        />
      </svg>
    </a>
  );
}
