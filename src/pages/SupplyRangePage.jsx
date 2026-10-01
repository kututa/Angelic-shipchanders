import { Link } from "react-router-dom";
import contact from "../data/contact.js";
import supplyRange from "../data/supplyRange.js";
import styles from "./SupplyRangePage.module.css";

export default function SupplyRangePage() {
  const emailHref = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(
    "Price list request"
  )}&body=${encodeURIComponent("Hello, please could you send your current price list?")}`;

  return (
    <section className={styles.page}>
      <div className="container">
        <p className={styles.eyebrowless}>Supply Range</p>
        <h1 className={styles.title}>Everything your vessel needs.</h1>
        <p className={styles.intro}>
          Six store categories, sourced and delivered to the Port of Mombasa.
          Full pricing is available on request — bonded stores are offered
          separately, to verified vessels only.
        </p>

        <div className={styles.grid}>
          {supplyRange.map((item) => (
            <div key={item.slug} id={item.slug} className={styles.card}>
              <p className={styles.cardLabel}>{item.label}</p>
              <p className={styles.cardDescription}>{item.description}</p>
            </div>
          ))}
        </div>

        <div className={styles.actions}>
          <a href={emailHref} className={styles.primary}>
            Request our price list
          </a>
          <Link to="/brief" className={styles.secondary}>
            Start a Vessel Brief
          </Link>
        </div>
      </div>
    </section>
  );
}
