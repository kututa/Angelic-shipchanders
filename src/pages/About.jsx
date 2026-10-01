import { Link } from "react-router-dom";
import styles from "./About.module.css";

const principles = [
  { title: "Service excellence", detail: "Every order handled to a consistent standard." },
  { title: "Trusted supplier", detail: "The aim is to be the supplier clients rely on first." },
  { title: "Timely and accurate", detail: "Delivery alongside, matched to what was ordered." },
];

export default function About() {
  return (
    <section className={styles.page}>
      <div className="container">
        <p className={styles.eyebrowless}>About</p>
        <h1 className={styles.title}>A Mombasa-based ship chandler.</h1>

        <p className={styles.lead}>
          Angelic Shipchandlers Enterprises Limited supplies vessels calling at
          the Port of Mombasa, around the clock. Fresh produce is sourced
          daily; provisions, technical stores and customs handling are
          managed by a team built around one goal — ready, on time, alongside.
        </p>

        <div className={styles.principles}>
          {principles.map((p) => (
            <div key={p.title} className={styles.principle}>
              <p className={styles.principleTitle}>{p.title}</p>
              <p className={styles.principleDetail}>{p.detail}</p>
            </div>
          ))}
        </div>

        <Link to="/brief" className={styles.cta}>
          Start a Vessel Brief
        </Link>
      </div>
    </section>
  );
}
