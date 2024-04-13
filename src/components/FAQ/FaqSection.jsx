import FaqTestimonials from "./FaqTestimonials";
import FaqForm from "./FaqForm";
import Faqdroplist from "./Faqdroplist";
const FaqSection = () => {
  return (
    <div className="mt-20">
      <Faqdroplist />
      <FaqTestimonials />
      <div className="form">
        <FaqForm />
      </div>
    </div>
  );
};

export default FaqSection;
