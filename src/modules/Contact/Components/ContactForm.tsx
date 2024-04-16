import FormSection from "./FormSection";
import AddressSection from "./AddressSection";

const ContactForm = () => {
  return (
    <div className="flex flex-col md:flex-row  w-[90%] mx-auto my-16 gap-10">
      <div className="w-full md:w-[60%] mx-auto lg:p-16 p-5 border-2">
        <FormSection />
      </div>
      <div className="w-full md:w-[40%] mx-auto lg:p-16 p-5  border-2">
        <AddressSection />
      </div>
    </div>
  );
};

export default ContactForm;
