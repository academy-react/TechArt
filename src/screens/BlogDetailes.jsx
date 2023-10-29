import { BlogLayout } from "../components/BlogLayout";
import { Footer } from "../components/common/Footer/Footer";
import { NavbarHeader } from "../components/common/NavbarHeader/NavbarHeader";
import TabsComponent from "../components/common/Tab/Tab";
import BlogDetailHolder from "./../components/BlogDetailes/BlogDetailHolder";

function BlogDetailes() {
  return (
    <BlogLayout>
      <NavbarHeader />
      <BlogDetailHolder />
      <TabsComponent />
      <Footer />
    </BlogLayout>
  );
}

export { BlogDetailes };
