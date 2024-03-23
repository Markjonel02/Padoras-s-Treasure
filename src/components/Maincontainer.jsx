import PropTypes from "prop-types";
const Maincontainer = ({ children }) => {
  return <div>{children}</div>;
};
Maincontainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Maincontainer;
