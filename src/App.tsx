import HeroHeader from './components/HeroHeader';
import ApplicationListSection from './components/ApplicationListSection';
import ApplicationPreviewSection from './components/ApplicationPreviewSection';
import MyTelkominfraSection from './components/MyTelkominfraSection';
import ModernFooter from './components/ModernFooter';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <HeroHeader />

      {/* Application List Section */}
      <ApplicationListSection />

      {/* MyTelkominfra Special Section with Diagonal Phones */}
      <MyTelkominfraSection />

      {/* Application Preview Section (Other Apps) */}
      <ApplicationPreviewSection />

      {/* Footer */}
      <ModernFooter />
    </div>
  );
}
