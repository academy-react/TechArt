import image from "../../assets/image/Landing/contact.png";
import ContactForm from "../common/ContactForm";

function ContactSection() {
  return (
    <main className="relative bg-white">
      <div className="mt-10 leading-3	font-semibold	">
        <h2>با ما در تماس باشید</h2>
      </div>
      <div className=" container mx-auto  lg:grid lg:grid-cols-12 lg:gap-x-8 lg:px-8 ">
        <div className="relative lg:col-span-5 	 lg:-mr-8 xl:inset-0 xl:left-1/2 xl:mr-0 lg:transition ease-in-out lg:delay-150">
          <img className="w-auto	 h-auto lg:mt-20	" src={image} alt="" />
        </div>
        <div className=" pt-5 pb-24 sm:pb-32 flex-1 lg:col-span-7 lg:px-0 lg:pt-20 lg:pb-56 xl:col-span-6  ">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
export { ContactSection };
