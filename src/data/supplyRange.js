/**
 * Public supply-range categories. Deliberately excludes bonded stores —
 * that service is gated behind the vessel brief (see services.js).
 * No prices here by design; each category links to a short page with
 * a "Request our price list" call to action.
 */
const supplyRange = [
  {
    slug: "fresh-frozen",
    label: "Fresh & Frozen",
    description: "Meat, poultry and dairy, sourced and delivered daily.",
  },
  {
    slug: "fruit-veg",
    label: "Fruit & Vegetables",
    description: "Purchased fresh from the market every morning.",
  },
  {
    slug: "seafood",
    label: "Seafood",
    description: "Whole fish, fillets, prawns and shellfish, fresh or frozen.",
  },
  {
    slug: "dry-stores",
    label: "Dry Stores",
    description: "Rice, oils, flour, sauces and bakery essentials.",
  },
  {
    slug: "cabin-stores",
    label: "Cabin Stores",
    description: "Cleaning, toiletries and housekeeping supplies.",
  },
  {
    slug: "marine-stores",
    label: "Marine Stores",
    description: "Deck, safety and technical spares to IMPA/ISSA standards.",
  },
];

export default supplyRange;
