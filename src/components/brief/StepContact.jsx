import { useBrief } from "./briefContext.jsx";
import styles from "./Step.module.css";

export default function StepContact() {
  const { data, update, next, back } = useBrief();

  const canContinue = data.contactName.trim() && (data.contactPhone.trim() || data.contactEmail.trim());

  return (
    <div className={styles.step}>
      <h2 className={styles.question}>How should we reach you?</h2>

      <div className={styles.fieldsColumn}>
        <label className={styles.field}>
          <span>Your name</span>
          <input
            type="text"
            value={data.contactName}
            onChange={(e) => update({ contactName: e.target.value })}
            placeholder="e.g. Chief Steward"
          />
        </label>
        <label className={styles.field}>
          <span>Phone / WhatsApp</span>
          <input
            type="tel"
            value={data.contactPhone}
            onChange={(e) => update({ contactPhone: e.target.value })}
            placeholder="e.g. +254 7..."
          />
        </label>
        <label className={styles.field}>
          <span>Email</span>
          <input
            type="email"
            value={data.contactEmail}
            onChange={(e) => update({ contactEmail: e.target.value })}
            placeholder="e.g. you@agent.com"
          />
        </label>
      </div>

      <p className={styles.hint}>We respond promptly.</p>

      <div className={styles.actions}>
        <button type="button" className={styles.back} onClick={back}>
          Back
        </button>
        <button type="button" className={styles.next} onClick={next} disabled={!canContinue}>
          Review Brief
        </button>
      </div>
    </div>
  );
}
