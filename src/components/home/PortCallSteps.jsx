import ScrollReveal from "../shared/ScrollReveal.jsx";
import portCall from "../../data/portCall.js";
import styles from "./PortCallSteps.module.css";

export default function PortCallSteps() {
  return (
    <section className={styles.section}>
      <div className="container">
        <ScrollReveal as="h2" className={styles.heading}>
          Port call
        </ScrollReveal>

        <ol className={styles.list}>
          {portCall.map((item, i) => (
            <ScrollReveal as="li" key={item.step} delay={i * 80} className={styles.item}>
              <span className={styles.index}>{i + 1}</span>
              <span className={styles.step}>{item.step}</span>
              <span className={styles.description}>{item.description}</span>
            </ScrollReveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
