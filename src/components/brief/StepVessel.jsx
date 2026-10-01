import clsx from "clsx";
import { useBrief } from "./briefContext.jsx";
import styles from "./Step.module.css";

const vesselTypes = ["Container", "Bulk carrier", "Tanker", "Cruise / Passenger", "Other"];

export default function StepVessel() {
  const { data, update, next } = useBrief();

  return (
    <div className={styles.step}>
      <h2 className={styles.question}>What are you sailing?</h2>

      <div className={styles.options}>
        {vesselTypes.map((type) => (
          <button
            key={type}
            type="button"
            className={clsx(styles.option, data.vesselType === type && styles.optionActive)}
            onClick={() => update({ vesselType: type })}
          >
            {type}
          </button>
        ))}
      </div>

      <div className={styles.fieldsRow}>
        <label className={styles.field}>
          <span>Vessel name (optional)</span>
          <input
            type="text"
            value={data.vesselName}
            onChange={(e) => update({ vesselName: e.target.value })}
            placeholder="e.g. MV Example"
          />
        </label>
        <label className={styles.field}>
          <span>IMO number (optional)</span>
          <input
            type="text"
            value={data.imo}
            onChange={(e) => update({ imo: e.target.value })}
            placeholder="e.g. 9876543"
          />
        </label>
      </div>

      <div className={styles.actions}>
        <span />
        <button type="button" className={styles.next} onClick={next} disabled={!data.vesselType}>
          Continue
        </button>
      </div>
    </div>
  );
}
