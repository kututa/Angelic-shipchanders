/**
 * Company-level licence/certificate seals for the trust section.
 * IMPORTANT: `verified` must be flipped to true per-item only once the
 * client has confirmed the current, in-date document and provided a
 * clean image/scan of it. Never display licence numbers or dates sourced
 * from an unverified upload. Personal documents (ID, personal PIN,
 * police clearance, medical certificates) must never appear here —
 * this list is company-level only.
 */
const seals = [
  { slug: "kpa", label: "Kenya Ports Authority", verified: false },
  { slug: "dosh", label: "Occupational Safety & Health", verified: false },
  { slug: "food-hygiene", label: "Food Hygiene Licence", verified: false },
  { slug: "kra", label: "Tax Compliance", verified: false },
  { slug: "county", label: "County Business Permit", verified: false },
];

export default seals;
