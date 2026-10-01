import { useState } from "react";
import { Link } from "react-router-dom";
import clsx from "clsx";
import ScrollReveal from "../shared/ScrollReveal.jsx";
import services from "../../data/services.js";
import styles from "./VesselCrossSection.module.css";

export default function VesselCrossSection() {
  const [activeSlug, setActiveSlug] = useState(services[0].slug);
  const active = services.find((s) => s.slug === activeSlug);

  return (
    <section className={styles.section} id="the-vessel">
      <div className="container">
        <ScrollReveal as="div" className={styles.heading}>
          <h2>What your vessel needs</h2>
          <p>Tap a part of the vessel to see what we supply there.</p>
        </ScrollReveal>

        <ScrollReveal as="div" type="fade">
          <div className={styles.layout}>
            {/* Desktop/tablet: ship line-art with positioned hotspots */}
            <div className={styles.shipWrap} aria-hidden={false}>
              <svg viewBox="0 0 200 110" className={styles.ship} xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M15 70 L30 45 H170 L190 70 L172 85 H33 Z"
                  fill="none"
                  stroke="var(--color-base)"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <path
                  d="M70 45 V22 H120 V45"
                  fill="none"
                  stroke="var(--color-base)"
                  strokeWidth="1.5"
                  opacity="0.5"
                />
                <line x1="8" y1="85" x2="192" y2="85" stroke="var(--color-base)" strokeWidth="1" opacity="0.3" />
              </svg>

              {services.map((service) => (
                <button
                  key={service.slug}
                  type="button"
                  className={clsx(
                    styles.hotspot,
                    activeSlug === service.slug && styles.hotspotActive
                  )}
                  style={{ left: `${service.position.x}%`, top: `${service.position.y}%` }}
                  onClick={() => setActiveSlug(service.slug)}
                  aria-pressed={activeSlug === service.slug}
                >
                  <span className={styles.hotspotDot} />
                  <span className={styles.hotspotLabel}>{service.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile: the same services as a plain stacked list (also serves as
                an accessible/SEO-readable fallback to the visual hotspots) */}
            <ul className={styles.mobileList}>
              {services.map((service) => (
                <li key={service.slug}>
                  <button
                    type="button"
                    className={clsx(
                      styles.mobileItem,
                      activeSlug === service.slug && styles.mobileItemActive
                    )}
                    onClick={() => setActiveSlug(service.slug)}
                  >
                    {service.label}
                  </button>
                </li>
              ))}
            </ul>

            {/* Detail panel, shared between desktop and mobile */}
            <div className={styles.panel}>
              <p className={styles.panelLabel}>{active.label}</p>
              <p className={styles.panelTagline}>{active.tagline}</p>
              <p className={styles.panelDescription}>{active.description}</p>
              <Link to={`/brief?need=${active.slug}`} className={styles.panelCta}>
                Include in my brief
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
