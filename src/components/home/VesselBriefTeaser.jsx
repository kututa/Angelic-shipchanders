import { Link } from "react-router-dom";
import ScrollReveal from "../shared/ScrollReveal.jsx";
import styles from "./VesselBriefTeaser.module.css";

export default function VesselBriefTeaser() {
  return (
    <section className={styles.section}>
      <ScrollReveal as="div" className={`container ${styles.content}`}>
        <h2>Tell us what your vessel needs.</h2>
        <p className={styles.steps}>Vessel &rarr; Port call &rarr; Needs &rarr; Contact</p>
        <Link to="/brief" className={styles.cta}>
          Start Your Brief
        </Link>
      </ScrollReveal>
    </section>
  );
}
