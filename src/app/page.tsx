import HeroSection from "@/components/Sections/HeroSection";
import Slider from "@/components/Sections/Slider";
import YoutubeFrame from "@/components/Sections/YoutubeFrame";
import Benefits from "@/components/Sections/Benefits";
import Serving from "@/components/Sections/Serving";
import Pricing from "@/components/Sections/Pricing";
import Testimonials from "@/components/Sections/Testimonials";
import EmailWaitlist from "@/components/Sections/EmailWaitlist";
import FaqPage from "@/components/Sections/FaqPage";
import FeaturesSection from "@/components/Sections/FeaturesSection";

export default function Home() {
  return (
    <div>
      <HeroSection />
      <Slider />
      <YoutubeFrame />
      <FeaturesSection />
      <Benefits />
      <Serving />
      <Pricing />
      <Testimonials />
      <EmailWaitlist />
      <FaqPage />
    </div>
  );
}
