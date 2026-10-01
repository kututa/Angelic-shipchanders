import { useEffect, useRef, useState } from "react";

/**
 * Wraps a section/element and reveals it (fade-up or fade-in) the first
 * time it enters the viewport. One shared implementation so every section
 * on the site animates the same way — see src/styles/animations.css for
 * the actual keyframes and the [data-reveal] utility classes.
 *
 * Usage:
 *   <ScrollReveal><PortCallSteps /></ScrollReveal>
 *   <ScrollReveal type="fade" delay={120}><TrustSeals /></ScrollReveal>
 */
export default function ScrollReveal({
  children,
  type = "up", // "up" | "fade"
  delay = 0,
  as: Tag = "div",
  className,
}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // If the browser doesn't support IntersectionObserver, just show it.
    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // reveal once, don't re-trigger on scroll up
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      data-reveal={type}
      className={[isVisible ? "is-visible" : "", className].filter(Boolean).join(" ")}
      style={delay ? { animationDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}
