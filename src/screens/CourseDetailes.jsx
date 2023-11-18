import { Footer } from "../components/common/Footer/Footer";
import { NavbarHeader } from "../components/common/NavbarHeader/NavbarHeader";
import CourseDetailContent from "../components/CourseDetailContent/CourseDetailContent";
import CoursInfo from "../components/CourseDetailContent/CourseDetailSidebar/CourseInfo";
import { CourseTeacher } from "../components/CourseDetailContent/CourseDetailSidebar/CourseTeachr";

import PricingCards from "../components/CourseDetailContent/CourseDetailSidebar/CoursePrice";
import { CourseLayout } from "../components/CourseLayout";
import CourseTop from "../components/CourseDetailContent/CourseTop";

function CourseDetailes() {
  return (
    <CourseLayout>
      {/* 
      <CourseDetailContent />
      <CourseTeacher />
      <CoursInfo />
      <PricingCards />

 */}
      <NavbarHeader />
      <CourseDetailContent />
      <CourseTop />
      <Footer />
    </CourseLayout>
  );
}

export { CourseDetailes };
