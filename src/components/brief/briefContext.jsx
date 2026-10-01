import { createContext, useContext, useState } from "react";

const BriefContext = createContext(null);

const initialState = {
  vesselType: "",
  vesselName: "",
  imo: "",
  crewSize: "",
  portStay: "",
  eta: "",
  needs: [], // array of service slugs, see data/services.js
  contactName: "",
  contactPhone: "",
  contactEmail: "",
};

export function BriefProvider({ children }) {
  const [data, setData] = useState(initialState);
  const [step, setStep] = useState(0);

  const update = (patch) => setData((prev) => ({ ...prev, ...patch }));
  const toggleNeed = (slug) =>
    setData((prev) => ({
      ...prev,
      needs: prev.needs.includes(slug)
        ? prev.needs.filter((n) => n !== slug)
        : [...prev.needs, slug],
    }));

  const next = () => setStep((s) => Math.min(s + 1, 4)); // 4 = summary
  const back = () => setStep((s) => Math.max(s - 1, 0));

  return (
    <BriefContext.Provider value={{ data, update, toggleNeed, step, setStep, next, back }}>
      {children}
    </BriefContext.Provider>
  );
}

export function useBrief() {
  const ctx = useContext(BriefContext);
  if (!ctx) throw new Error("useBrief must be used within a BriefProvider");
  return ctx;
}
