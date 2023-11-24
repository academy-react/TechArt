import { Footer } from "../../components/common/Footer/Footer";
import { NavbarHeader } from "../../components/common/NavbarHeader/NavbarHeader";
import { HeroSection } from "../../components/HeroSection/HeroSection";
import { CourseSection } from "../../components/Landing/CourseSlider/CourseSection";
import { CardHolder } from "../../components/Card/CardHolder";
import { ProfessorCard } from "../../components/ProfessorCard/ProfessorCard";
import ScrollTopButton from "../../components/common/customElements/ScrollTopButton";
import { ContactSection } from "../../components/Landing/ContactSection";

function Landing() {
  return (
    <div className="px-6	">
      <NavbarHeader />
      <HeroSection />
      <CourseSection />
      <ProfessorCard />
      <CardHolder />
      <ContactSection />
      <Footer />
      <ScrollTopButton />
    </div>
  );
}

export { Landing };
