import { lazy, Suspense } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";

// Lazy loaded components
const SocialProofSection = lazy(() => import("@/components/SocialProofSection"));
const AboutSection = lazy(() => import("@/components/AboutSection"));
const EmotionalSection = lazy(() => import("@/components/EmotionalSection"));
const DifferentialsSection = lazy(() => import("@/components/DifferentialsSection"));
const ProceduresSection = lazy(() => import("@/components/ProceduresSection"));
const ResultsSection = lazy(() => import("@/components/ResultsSection"));
const ProcessSection = lazy(() => import("@/components/ProcessSection"));
const ExperienceSection = lazy(() => import("@/components/ExperienceSection"));
const CtaSection = lazy(() => import("@/components/CtaSection"));
const FaqSection = lazy(() => import("@/components/FaqSection"));
const FooterSection = lazy(() => import("@/components/FooterSection"));

const Index = () => (
  <main className="overflow-hidden">
    <Navbar />
    <HeroSection />
    <Suspense fallback={<div className="min-h-[20vh]" />}>
      <SocialProofSection />
      <AboutSection />
      <EmotionalSection />
      <DifferentialsSection />
      <ProceduresSection />
      <ResultsSection />
      <ProcessSection />
      <ExperienceSection />
      <CtaSection />
      <FaqSection />
      <FooterSection />
    </Suspense>
  </main>
);

export default Index;
