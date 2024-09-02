import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./AvatarDropdown.module.scss";

interface AvatarDropdownProps {
  username: string | null;
}

const AvatarDropdown: React.FC<AvatarDropdownProps> = ({ username }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  return (
    <div className={styles.avatarContainer}>
      {username ? (
        <button onClick={toggleDropdown} >
          {username.toUpperCase()}
        </button>
      ) : (
        <button>
          <Link to="/Login">Login / Sign Up</Link>
        </button>
      )}
      {dropdownOpen && (
        <div className={styles.dropdownMenu} >
          <ul>
            <li>
              <Link to="/myaccount">My Account</Link>
            </li>
            <li>
              <Link to="/mybookings">My bookings</Link>
            </li>
            <li>
              <button>Logout</button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default AvatarDropdown;