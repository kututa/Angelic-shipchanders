import { useBrief } from "./briefContext.jsx";
import services from "../../data/services.js";
import contact from "../../data/contact.js";
import styles from "./BriefSummary.module.css";

function buildMessage(data) {
  const needLabels = data.needs
    .map((slug) => services.find((s) => s.slug === slug)?.label)
    .filter(Boolean)
    .join(", ");

  const lines = [
    "Vessel Brief — Angelic Shipchandlers",
    "",
    `Vessel type: ${data.vesselType || "—"}`,
    data.vesselName && `Vessel name: ${data.vesselName}`,
    data.imo && `IMO: ${data.imo}`,
    `Crew size: ${data.crewSize || "—"}`,
    `Port stay: ${data.portStay || "—"}`,
    data.eta && `ETA: ${data.eta}`,
    `Needs: ${needLabels || "—"}`,
    "",
    `Contact: ${data.contactName}`,
    data.contactPhone && `Phone: ${data.contactPhone}`,
    data.contactEmail && `Email: ${data.contactEmail}`,
  ].filter(Boolean);

  return lines.join("\n");
}

export default function BriefSummary() {
  const { data, back } = useBrief();
  const message = buildMessage(data);

  const whatsappHref = `https://wa.me/${contact.whatsappNumber}?text=${encodeURIComponent(message)}`;
  const emailHref = `mailto:${contact.emails[0]}?subject=${encodeURIComponent(
    "Vessel Brief — " + (data.vesselName || data.vesselType || "New enquiry")
  )}&body=${encodeURIComponent(message)}`;

  return (
    <div className={styles.summary}>
      <h2 className={styles.heading}>Your brief</h2>

      <dl className={styles.list}>
        <Row label="Vessel" value={[data.vesselType, data.vesselName].filter(Boolean).join(" — ") || "—"} />
        {data.imo && <Row label="IMO" value={data.imo} />}
        <Row label="Crew size" value={data.crewSize} />
        <Row label="Port stay" value={data.portStay} />
        {data.eta && <Row label="ETA" value={data.eta} />}
        <Row
          label="Needs"
          value={
            data.needs
              .map((slug) => services.find((s) => s.slug === slug)?.label)
              .filter(Boolean)
              .join(", ") || "—"
          }
        />
        <Row label="Contact" value={data.contactName} />
        {data.contactPhone && <Row label="Phone" value={data.contactPhone} />}
        {data.contactEmail && <Row label="Email" value={data.contactEmail} />}
      </dl>

      <p className={styles.hint}>We respond promptly.</p>

      <div className={styles.sendActions}>
        <a href={whatsappHref} target="_blank" rel="noopener noreferrer" className={styles.whatsapp}>
          Send by WhatsApp
        </a>
        <a href={emailHref} className={styles.email}>
          Send by Email
        </a>
      </div>

      <button type="button" className={styles.backLink} onClick={back}>
        &larr; Edit brief
      </button>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className={styles.row}>
      <dt>{label}</dt>
      <dd>{value}</dd>
    </div>
  );
}
