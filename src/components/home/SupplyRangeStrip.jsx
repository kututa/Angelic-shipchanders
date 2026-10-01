import { Link } from "react-router-dom";
import ScrollReveal from "../shared/ScrollReveal.jsx";
import supplyRange from "../../data/supplyRange.js";
import styles from "./SupplyRangeStrip.module.css";

export default function SupplyRangeStrip() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal as="div" className={styles.heading}>
          <h2>Supply range</h2>
          <p>Six store categories. Full range on request.</p>
        </ScrollReveal>

        <div className={styles.grid}>
          {supplyRange.map((item, i) => (
            <ScrollReveal key={item.slug} as="div" delay={i * 60}>
              <Link to={`/supply-range#${item.slug}`} className={styles.card}>
                <p className={styles.cardLabel}>{item.label}</p>
                <p className={styles.cardDescription}>{item.description}</p>
              </Link>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal as="div" className={styles.footerRow}>
          <Link to="/supply-range" className={styles.link}>
            Request our price list &rarr;
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
