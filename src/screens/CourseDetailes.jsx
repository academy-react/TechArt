import { Footer } from "../components/common/Footer/Footer";
import { NavbarHeader } from "../components/common/NavbarHeader/NavbarHeader";
import CourseDetailContent from "../components/CourseDetailContent/CourseDetailContent";
import CoursInfo from "../components/CourseDetailSidebar/CourseInfo";
import { CourseTeacher } from "../components/CourseDetailSidebar/CourseTeachr";
import CourseUlike from "../components/CourseDetailContent/CourseUlike";
import PricingCards from "../components/CourseDetailSidebar/CoursePrice";

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
