import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./DesktopNav.module.css";

const links = [
  { to: "/", label: "Home" },
  { to: "/supply-range", label: "Supply Range" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function DesktopNav({ open, onClose }) {
  return (
    <div
      className={clsx(styles.overlay, open && styles.overlayOpen)}
      aria-hidden={!open}
    >
      <nav className={styles.panel} aria-label="Primary">
        <ul className={styles.list}>
          {links.map((link, i) => (
            <li
              key={link.to}
              className={styles.item}
              style={{ transitionDelay: open ? `${i * 60 + 80}ms` : "0ms" }}
            >
              <NavLink
                to={link.to}
                className={({ isActive }) =>
                  clsx(styles.link, isActive && styles.linkActive)
                }
                onClick={onClose}
                tabIndex={open ? 0 : -1}
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <NavLink
          to="/brief"
          className={styles.cta}
          onClick={onClose}
          tabIndex={open ? 0 : -1}
        >
          Request a Quote
        </NavLink>
      </nav>
    </div>
  );
}
