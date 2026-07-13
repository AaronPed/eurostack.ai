import CommandCenterHero from '../sections/CommandCenterHero';
import ModelsGallery from '../sections/ModelsGallery';
import VelocityStatement from '../sections/VelocityStatement';
import InfrastructureGrid from '../sections/InfrastructureGrid';
import GlobalExecution from '../sections/GlobalExecution';

export default function LandingPage() {
  return (
    <main>
      <CommandCenterHero />
      <ModelsGallery />
      <VelocityStatement />
      <InfrastructureGrid />
      <GlobalExecution />
    </main>
  );
}
