import { useEffect, useState } from "react";
import styles from "./LiveClock.module.css";

function formatMombasaTime() {
  return new Intl.DateTimeFormat("en-GB", {
    timeZone: "Africa/Nairobi", // Mombasa shares Kenya's single timezone (EAT, UTC+3)
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date());
}

export default function LiveClock() {
  const [time, setTime] = useState(formatMombasaTime);

  useEffect(() => {
    const id = setInterval(() => setTime(formatMombasaTime()), 30_000);
    return () => clearInterval(id);
  }, []);

  return (
    <span className={styles.clock}>
      <span className={styles.dot} aria-hidden="true" />
      Mombasa {time} &middot; Open 24/7
    </span>
  );
}
