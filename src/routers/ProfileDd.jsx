import PropTypes from "prop-types";

const MenuItem = ({ id, text }) => (
  <a
    href="#"
    className="block px-4 py-2 text-sm text-gray-700 dark:text-quinary  "
    role="menuitem"
    tabIndex="-1"
    id={id}
  >
    {text}
  </a>
);

MenuItem.propTypes = {
  id: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

const UserMenu = () => (
  <div>
    <MenuItem id="user-menu-item-0" text="Your Profile" />
    <MenuItem id="user-menu-item-1" text="Settings" />
    <MenuItem id="user-menu-item-2" text="Sign out" />
  </div>
);

const ProfileDd = () => <UserMenu />;

export default ProfileDd;
