import Hero from "../components/home/Hero.jsx";
import VesselCrossSection from "../components/home/VesselCrossSection.jsx";
import VesselBriefTeaser from "../components/home/VesselBriefTeaser.jsx";
import SupplyRangeStrip from "../components/home/SupplyRangeStrip.jsx";
import PortCallSteps from "../components/home/PortCallSteps.jsx";
import TrustSeals from "../components/home/TrustSeals.jsx";
import ClosingCall from "../components/home/ClosingCall.jsx";

export default function Home() {
  return (
    <>
      <Hero />
      <VesselCrossSection />
      <VesselBriefTeaser />
      <SupplyRangeStrip />
      <PortCallSteps />
      <TrustSeals />
      <ClosingCall />
    </>
  );
}
