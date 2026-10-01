import contact from "../data/contact.js";
import styles from "./Contact.module.css";

export default function Contact() {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I'd like to get in touch about vessel supply."
  )}`;
  const mapQuery = encodeURIComponent(
    `${contact.address.line1}, ${contact.address.city}`
  );

  return (
    <section className={styles.page}>
      <div className="container">
        <p className={styles.eyebrowless}>Contact</p>
        <h1 className={styles.title}>Mombasa. 24/7.</h1>

        <div className={styles.grid}>
          <div className={styles.block}>
            <p className={styles.label}>Phone</p>
            <a href={`tel:${contact.phone.replace(/\s+/g, "")}`} className={styles.value}>
              {contact.phone}
            </a>
          </div>

          <div className={styles.block}>
            <p className={styles.label}>Email</p>
            {contact.emails.map((email) => (
              <a key={email} href={`mailto:${email}`} className={styles.value}>
                {email}
              </a>
            ))}
          </div>

          <div className={styles.block}>
            <p className={styles.label}>Address</p>
            <p className={styles.value}>{contact.address.line1}</p>
            <p className={styles.value}>{contact.address.line2}</p>
            <p className={styles.value}>{contact.address.city}</p>
          </div>

          <div className={styles.block}>
            <p className={styles.label}>Hours</p>
            <p className={styles.value}>{contact.hours}</p>
          </div>
        </div>

        <div className={styles.actions}>
          <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.primary}>
            WhatsApp Us
          </a>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.secondary}
          >
            Open in Maps
          </a>
        </div>
      </div>
    </section>
  );
}
