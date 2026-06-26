import Hero from '../components/Hero';
import FactsCascade from '../components/FactsCascade';
import PartnersStrip from '../components/PartnersStrip';
import QuotesFlow from '../components/QuotesFlow';
import JoinPanel from '../components/JoinPanel';

export default function Home() {
  return (
    <>
      <Hero />
      <FactsCascade />
      <PartnersStrip />
      <QuotesFlow />
      <JoinPanel
        eyebrow="Stay close"
        heading="Join the Nexus community"
        body="First word on new drops, open studio nights, and the people behind them — straight to your inbox, never more than twice a month."
        image="https://images.unsplash.com/photo-1531913764164-f85c52e6e654?q=80&w=1200&auto=format&fit=crop"
        actionLabel="Join us"
        accent="red"
      />
    </>
  );
}
