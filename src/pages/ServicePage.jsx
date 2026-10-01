import { Link, useParams, Navigate } from "react-router-dom";
import services from "../data/services.js";
import styles from "./ServicePage.module.css";

export default function ServicePage() {
  const { slug } = useParams();
  const service = services.find((s) => s.slug === slug);

  if (!service) return <Navigate to="/" replace />;

  return (
    <section className={styles.page}>
      <div className="container">
        <p className={styles.eyebrowless}>Service</p>
        <h1 className={styles.title}>{service.label}</h1>
        <p className={styles.tagline}>{service.tagline}</p>
        <p className={styles.description}>{service.description}</p>

        {service.gated && (
          <p className={styles.gatedNote}>
            This service is available to verified vessels only. Include it in your
            brief and we&rsquo;ll confirm eligibility.
          </p>
        )}

        <Link to={`/brief?need=${service.slug}`} className={styles.cta}>
          Include in my brief
        </Link>
      </div>
    </section>
  );
}
