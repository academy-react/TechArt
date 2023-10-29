import { Footer } from "../components/common/Footer/Footer";
import { NavbarHeader } from "../components/common/NavbarHeader/NavbarHeader";
import CourseDetailContent from "../components/CourseDetailContent/CourseDetailContent";
import CoursInfo from "../components/CourseDetailContent/CourseDetailSidebar/CourseInfo";
import { CourseTeacher } from "../components/CourseDetailContent/CourseDetailSidebar/CourseTeachr";
import CourseUlike from "../components/CourseDetailContent/CourseUlike";
import PricingCards from "../components/CourseDetailContent/CourseDetailSidebar/CoursePrice";

function CourseDetailes() {
  return (
    <div className="	">
      {/* 
      <CourseDetailContent />
      <CourseTeacher />
      <CoursInfo />
      <PricingCards />

 */}
      <NavbarHeader />
      <CourseDetailContent />
      <CourseUlike />
      <Footer />
    </div>
  );
}

export { CourseDetailes };
