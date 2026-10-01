import { BriefProvider, useBrief } from "./briefContext.jsx";
import StepVessel from "./StepVessel.jsx";
import StepPortCall from "./StepPortCall.jsx";
import StepNeeds from "./StepNeeds.jsx";
import StepContact from "./StepContact.jsx";
import BriefSummary from "./BriefSummary.jsx";
import styles from "./BriefStepper.module.css";

const steps = [StepVessel, StepPortCall, StepNeeds, StepContact];
const stepLabels = ["Vessel", "Port call", "Needs", "Contact"];

function StepperInner() {
  const { step } = useBrief();
  const isSummary = step >= steps.length;
  const StepComponent = steps[step];

  return (
    <div className={styles.wrap}>
      <div className={styles.progressTrack}>
        <div
          className={styles.progressFill}
          style={{ width: `${Math.min((step / steps.length) * 100, 100)}%` }}
        />
      </div>

      {!isSummary && (
        <p className={styles.stepLabel}>
          Step {step + 1} of {steps.length} &middot; {stepLabels[step]}
        </p>
      )}

      {isSummary ? <BriefSummary /> : <StepComponent />}
    </div>
  );
}

export default function BriefStepper() {
  return (
    <BriefProvider>
      <StepperInner />
    </BriefProvider>
  );
}
