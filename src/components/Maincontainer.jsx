import Home from "../routers/Home";
import svg from "../assets/imgs/model.svg";
function Props({ children }) {
  return <div>{children}</div>;
}

const Maincontainer = () => {
  return (
    <div>
      <Home  />
    </div>
  );
};

export default Maincontainer;
