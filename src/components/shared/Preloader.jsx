import { useEffect, useState } from "react";
import styles from "./Preloader.module.css";

/**
 * One orchestrated load-time moment: a minimal ship silhouette draws
 * itself with a stroke-dashoffset animation, holds briefly, then the
 * whole screen fades out. Runs once per session (sessionStorage), not
 * on every route change, so it doesn't get tiresome on repeat visits.
 */
export default function Preloader() {
  const [visible, setVisible] = useState(
    () => typeof window !== "undefined" && !sessionStorage.getItem("ac-preloaded")
  );

  useEffect(() => {
    if (!visible) return;
    const timer = setTimeout(() => {
      setVisible(false);
      sessionStorage.setItem("ac-preloaded", "1");
    }, 1400);
    return () => clearTimeout(timer);
  }, [visible]);

  if (!visible) return null;

  return (
    <div className={styles.preloader} role="status" aria-label="Loading">
      <svg
        className={styles.ship}
        viewBox="0 0 200 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Minimal hull + bridge line-art, drawn via stroke-dashoffset */}
        <path
          className={styles.line}
          d="M20 55 L30 40 H150 L175 55 L160 65 H35 Z"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <path
          className={styles.line}
          d="M60 40 V25 H100 V40"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        <line className={styles.line} x1="10" y1="65" x2="190" y2="65" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <span className={styles.wordmark}>ANGELIC SHIPCHANDLERS</span>
    </div>
  );
}
