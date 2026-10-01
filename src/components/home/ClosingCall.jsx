import { Link } from "react-router-dom";
import ScrollReveal from "../shared/ScrollReveal.jsx";
import contact from "../../data/contact.js";
import styles from "./ClosingCall.module.css";

export default function ClosingCall() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I'd like to request a quote for vessel supply."
  )}`;

  return (
    <section className={styles.section}>
      <ScrollReveal as="div" className={`container ${styles.content}`}>
        <h2>
          Your vessel arrives.
          <br />
          We&rsquo;re ready.
        </h2>

        <div className={styles.actions}>
          <Link to="/brief" className={styles.primary}>
            Start a Vessel Brief
          </Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.secondary}>
            WhatsApp
          </a>
          <a href={`mailto:${contact.emails[0]}`} className={styles.secondary}>
            Email
          </a>
        </div>
      </ScrollReveal>
    </section>
  );
}
