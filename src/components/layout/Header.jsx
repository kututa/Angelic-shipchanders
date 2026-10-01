import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import DesktopNav from "./DesktopNav.jsx";
import MobileSidebar from "./MobileSidebar.jsx";
import styles from "./Header.module.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock body scroll while either menu overlay is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const close = () => setMenuOpen(false);

  return (
    <>
      <header className={clsx(styles.header, scrolled && styles.scrolled)}>
        <div className={clsx("container", styles.inner)}>
          <Link to="/" className={styles.wordmark} onClick={close}>
            ANGELIC
            <span className={styles.wordmarkSub}>SHIPCHANDLERS</span>
          </Link>

          <button
            type="button"
            className={clsx(styles.menuButton, menuOpen && styles.menuButtonOpen)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </header>

      <DesktopNav open={menuOpen} onClose={close} />
      <MobileSidebar open={menuOpen} onClose={close} />
    </>
  );
}
