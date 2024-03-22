import aos from "aos";
import { useEffect } from "react";
const Aos = () => {
  useEffect(() => {
    aos.init();
    return () => {
      aos.refresh();
    };
  }, []);

  return <div>Aos</div>;
};

export default Aos;
