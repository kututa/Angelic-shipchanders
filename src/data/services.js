/**
 * One entry per service. Drives the VesselCrossSection hotspots,
 * the StepNeeds multi-select in the brief, and /services/:slug pages.
 * `hotspot` positions are percentages within the ship illustration's
 * viewBox — see VesselCrossSection.jsx.
 */
const services = [
  {
    slug: "provisions",
    hotspot: "galley",
    label: "Provisions",
    tagline: "Fresh, frozen, dry. Delivered daily.",
    description:
      "Fresh fruit and vegetables sourced and delivered daily, alongside frozen meat, seafood, dairy and dry stores for crews of every nationality.",
    position: { x: 38, y: 58 },
    gated: false,
  },
  {
    slug: "cabin-stores",
    hotspot: "cabins",
    label: "Cabin Stores",
    tagline: "Housekeeping, linen, toiletries.",
    description:
      "Cleaning supplies, toiletries, linen and general housekeeping items kept in stock for a fast turnaround alongside.",
    position: { x: 62, y: 46 },
    gated: false,
  },
  {
    slug: "technical-marine-stores",
    hotspot: "deck",
    label: "Technical Marine Stores",
    tagline: "IMPA/ISSA-standard spares and gear.",
    description:
      "Deck, safety, electrical, hydraulic and engineering stores supplied to IMPA and ISSA standards, sourced from recognised marine brands.",
    position: { x: 50, y: 28 },
    gated: false,
  },
  {
    slug: "inspections",
    hotspot: "bridge",
    label: "Inspections & Servicing",
    tagline: "Safety, firefighting, navigation servicing.",
    description:
      "Inspection and servicing of firefighting, lifesaving and navigational equipment, including liferafts and the medicine chest.",
    position: { x: 78, y: 24 },
    gated: false,
  },
  {
    slug: "customs-and-spares",
    hotspot: "engine-room",
    label: "Customs & Spares Handling",
    tagline: "Cleared, stored, delivered alongside.",
    description:
      "A dedicated customs division clears, handles, stores and consolidates marine equipment and ship spares on behalf of technical management.",
    position: { x: 50, y: 74 },
    gated: false,
  },
  {
    slug: "bonded-stores",
    hotspot: "crew-lounge",
    label: "Bonded Stores",
    tagline: "Duty-free, verified vessels only.",
    description:
      "Bonded stores are available to verified vessels only. Include this in your vessel brief and our team will confirm eligibility.",
    position: { x: 20, y: 44 },
    gated: true,
  },
];

export default services;
