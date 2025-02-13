import HeroSection from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import FeaturesSection from "@/components/FeaturesSection";
import TestimonialSection from "@/components/TestimonialSection";
export default function Home() {
  return (
    <div className="bg-gray-100">
      <HeroSection />
      <StatsSection />
      <FeaturesSection/>
      <TestimonialSection/>
    </div>
  );
}
