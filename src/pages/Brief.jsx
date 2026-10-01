import BriefStepper from "../components/brief/BriefStepper.jsx";
import styles from "./Brief.module.css";

export default function Brief() {
  return (
    <section className={styles.page}>
      <div className="container">
        <p className={styles.eyebrowless}>Vessel Brief</p>
        <BriefStepper />
      </div>
    </section>
  );
}
