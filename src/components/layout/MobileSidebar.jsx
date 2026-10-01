import { NavLink } from "react-router-dom";
import clsx from "clsx";
import styles from "./MobileSidebar.module.css";
import contact from "../../data/contact.js";

const links = [
  { to: "/", label: "Home" },
  { to: "/supply-range", label: "Supply Range" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export default function MobileSidebar({ open, onClose }) {
  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(
    "Hello, I'd like to request a quote for vessel supply."
  )}`;

  return (
    <>
      <button
        type="button"
        className={clsx(styles.backdrop, open && styles.backdropOpen)}
        aria-hidden={!open}
        tabIndex={-1}
        onClick={onClose}
      />
      <aside
        className={clsx(styles.sidebar, open && styles.sidebarOpen)}
        aria-hidden={!open}
      >
        <nav aria-label="Primary">
          <ul className={styles.list}>
            {links.map((link) => (
              <li key={link.to}>
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

          <NavLink to="/brief" className={styles.cta} onClick={onClose} tabIndex={open ? 0 : -1}>
            Request a Quote
          </NavLink>
        </nav>

        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.whatsapp}
          tabIndex={open ? 0 : -1}
        >
          WhatsApp us
        </a>
      </aside>
    </>
  );
}
