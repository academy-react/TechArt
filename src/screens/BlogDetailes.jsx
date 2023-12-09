import BlogTab from "../components/BlogDetailes/BlogTab";
import { BlogLayout } from "../components/BlogLayout";
import { Footer } from "../components/common/Footer/Footer";
import { NavbarHeader } from "../components/common/NavbarHeader/NavbarHeader";
import BlogDetailHolder from "./../components/BlogDetailes/BlogDetailHolder";

function BlogDetailes() {
  return (
    <BlogLayout>
      <NavbarHeader />
      <BlogDetailHolder />
      <BlogTab />
      <Footer />
    </BlogLayout>
  );
}

export { BlogDetailes };
