import { Link } from "react-router-dom";
import contact from "../../data/contact.js";
import styles from "./Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.grid}`}>
        <div>
          <p className={styles.wordmark}>ANGELIC SHIPCHANDLERS</p>
          <p className={styles.tagline}>Mombasa. 24/7.</p>
        </div>

        <div className={styles.column}>
          <p className={styles.heading}>Contact</p>
          <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className={styles.line}>
            {contact.phone}
          </a>
          {contact.emails.map((email) => (
            <a key={email} href={`mailto:${email}`} className={styles.line}>
              {email}
            </a>
          ))}
        </div>

        <div className={styles.column}>
          <p className={styles.heading}>Address</p>
          <p className={styles.line}>{contact.address.line1}</p>
          <p className={styles.line}>{contact.address.line2}</p>
          <p className={styles.line}>{contact.address.city}</p>
        </div>

        <div className={styles.column}>
          <p className={styles.heading}>Site</p>
          <Link to="/supply-range" className={styles.line}>
            Supply Range
          </Link>
          <Link to="/about" className={styles.line}>
            About
          </Link>
          <Link to="/brief" className={styles.line}>
            Request a Quote
          </Link>
        </div>
      </div>

      <div className={`container ${styles.bottom}`}>
        <span>
          © {year} Angelic Shipchandlers Enterprises Limited
        </span>
        <span>{contact.hours}</span>
      </div>
    </footer>
  );
}
