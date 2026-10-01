import { Link } from "react-router-dom";
import LiveClock from "../shared/LiveClock.jsx";
import contact from "../../data/contact.js";
import styles from "./Hero.module.css";

export default function Hero() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I'd like to request a quote for vessel supply."
  )}`;

  return (
    <section className={styles.hero}>
      {/*
        PLACEHOLDER background: a generated dusk-port gradient + silhouette.
        Replace with licensed photography (or the client's own port/vessel
        photos once supplied) — see src/assets/images/README or swap the
        className below for a <img>/background-image approach.
      */}
      <div className={styles.backdrop} aria-hidden="true">
        <svg viewBox="0 0 1200 600" preserveAspectRatio="xMidYMax slice" className={styles.skyline}>
          <rect width="1200" height="600" fill="none" />
          <g opacity="0.5" fill="var(--color-base-light)">
            <rect x="40" y="380" width="14" height="160" />
            <rect x="70" y="340" width="10" height="200" />
            <rect x="100" y="400" width="18" height="140" />
            <path d="M160 540 L200 420 H520 L580 540 L540 560 H200 Z" />
            <rect x="320" y="340" width="40" height="80" />
          </g>
        </svg>
      </div>

      <div className={`container ${styles.content}`}>
        <h1 className={styles.headline}>
          Alongside.
          <br />
          On time.
        </h1>
        <p className={styles.subline}>
          Ship Chandling &middot; Marine Supplies &middot; Port of Mombasa &middot; 24/7
        </p>

        <div className={styles.actions}>
          <Link to="/brief" className={styles.primaryCta}>
            Start a Vessel Brief
          </Link>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.secondaryCta}>
            WhatsApp Us
          </a>
        </div>

        <LiveClock />
      </div>
    </section>
  );
}
