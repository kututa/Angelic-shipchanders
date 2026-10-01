import ScrollReveal from "../shared/ScrollReveal.jsx";
import seals from "../../data/seals.js";
import styles from "./TrustSeals.module.css";

export default function TrustSeals() {
  const verified = seals.filter((s) => s.verified);

  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal as="h2" type="fade" className={styles.heading}>
          Licensed. Certified. Cleared.
        </ScrollReveal>

        {verified.length > 0 ? (
          <ul className={styles.list}>
            {verified.map((seal) => (
              <li key={seal.slug} className={styles.seal}>
                {seal.label}
              </li>
            ))}
          </ul>
        ) : (
          // Shown while seals.js has no verified items yet — see the note
          // in that file. Replace this block once the client confirms
          // current documents for display.
          <p className={styles.pending}>Licensing details available on request.</p>
        )}
      </div>
    </section>
  );
}
