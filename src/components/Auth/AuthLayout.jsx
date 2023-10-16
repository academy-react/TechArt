import { FormSection } from "./FormSection";
import { SVGSection } from "./SVGSection";

function AuthLayout({ children }) {
  return (
    <>
      <div className="md:grid lg:grid-cols-5 md:grid-cols-6 md:gap-6" dir="ltr">
        {children}
      </div>
    </>
  );
}
export { AuthLayout };
