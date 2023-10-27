import { Footer } from "../components/common/Footer/Footer";
import { NavbarHeader } from "../components/common/NavbarHeader/NavbarHeader";
import TabsComponent from "../components/common/Tab/Tab";
import BlogDetailHolder from "./../components/BlogDetailes/BlogDetailHolder";

function BlogDetailes() {
  return (
    <div className="px-6	">
      <NavbarHeader />
      <BlogDetailHolder />
      <TabsComponent />
      <Footer />
    </div>
  );
}

export { BlogDetailes };
