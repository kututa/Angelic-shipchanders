import clsx from "clsx";
import { useBrief } from "./briefContext.jsx";
import styles from "./Step.module.css";

const crewSizes = ["1–10", "11–25", "26–50", "50+"];
const stays = ["Under 24 hrs", "1–3 days", "3+ days", "Not sure yet"];

export default function StepPortCall() {
  const { data, update, next, back } = useBrief();

  return (
    <div className={styles.step}>
      <h2 className={styles.question}>How many crew?</h2>
      <div className={styles.options}>
        {crewSizes.map((size) => (
          <button
            key={size}
            type="button"
            className={clsx(styles.option, data.crewSize === size && styles.optionActive)}
            onClick={() => update({ crewSize: size })}
          >
            {size}
          </button>
        ))}
      </div>

      <h2 className={styles.question} style={{ marginTop: "var(--space-xl)" }}>
        How long in port?
      </h2>
      <div className={styles.options}>
        {stays.map((stay) => (
          <button
            key={stay}
            type="button"
            className={clsx(styles.option, data.portStay === stay && styles.optionActive)}
            onClick={() => update({ portStay: stay })}
          >
            {stay}
          </button>
        ))}
      </div>

      <label className={styles.field} style={{ marginTop: "var(--space-xl)" }}>
        <span>Expected arrival (optional)</span>
        <input type="text" value={data.eta} onChange={(e) => update({ eta: e.target.value })} placeholder="e.g. 14 Oct, AM" />
      </label>

      <div className={styles.actions}>
        <button type="button" className={styles.back} onClick={back}>
          Back
        </button>
        <button
          type="button"
          className={styles.next}
          onClick={next}
          disabled={!data.crewSize || !data.portStay}
        >
          Continue
        </button>
      </div>
    </div>
  );
}
