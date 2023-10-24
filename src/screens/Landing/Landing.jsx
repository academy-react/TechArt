import { Footer } from "../../components/common/Footer/Footer";
import { NavbarHeader } from "../../components/common/NavbarHeader/NavbarHeader";
import { HeroSection } from "../../components/HeroSection/HeroSection";

function Landing() {
  return (
    <div className="px-6	">
      <NavbarHeader />
      <HeroSection />
      <Footer />
    </div>
  );
}

export { Landing };
