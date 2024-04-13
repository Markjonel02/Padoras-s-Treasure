import PropTypes from "prop-types";
const Maincontainer = ({ children, className }) => {
  return <div className={`${className} dark:bg-darks`}>{children}</div>;
};
Maincontainer.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Maincontainer;
