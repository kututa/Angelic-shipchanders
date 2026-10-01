import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import clsx from "clsx";
import { useBrief } from "./briefContext.jsx";
import services from "../../data/services.js";
import styles from "./Step.module.css";

export default function StepNeeds() {
  const { data, toggleNeed, next, back } = useBrief();
  const [searchParams] = useSearchParams();
  const appliedParam = useRef(false);

  // Pre-tick whatever the visitor selected via a ship hotspot (?need=slug)
  useEffect(() => {
    if (appliedParam.current) return;
    const need = searchParams.get("need");
    if (need && services.some((s) => s.slug === need) && !data.needs.includes(need)) {
      toggleNeed(need);
    }
    appliedParam.current = true;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchParams]);

  return (
    <div className={styles.step}>
      <h2 className={styles.question}>What do you need?</h2>
      <p className={styles.hint}>Select all that apply.</p>

      <div className={styles.needsGrid}>
        {services.map((service) => (
          <button
            key={service.slug}
            type="button"
            className={clsx(
              styles.needCard,
              data.needs.includes(service.slug) && styles.needCardActive
            )}
            onClick={() => toggleNeed(service.slug)}
          >
            <span className={styles.needLabel}>{service.label}</span>
            {service.gated && <span className={styles.needBadge}>Verified vessels only</span>}
          </button>
        ))}
      </div>

      <div className={styles.actions}>
        <button type="button" className={styles.back} onClick={back}>
          Back
        </button>
        <button type="button" className={styles.next} onClick={next} disabled={data.needs.length === 0}>
          Continue
        </button>
      </div>
    </div>
  );
}
