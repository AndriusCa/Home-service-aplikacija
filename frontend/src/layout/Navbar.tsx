import Logoipsum from './../assets/svg/Logoipsum.svg';
import styles from './Navbar.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../router/consts';

interface User {
  id?: string;
  username?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

const Navbar = () => {

  const navigate = useNavigate();

  const links = [
    {
      href: ROUTES.HOME,
      label: 'Home',
    },
    {
      href: ROUTES.SERVICES,
      label: 'Services',
    },
    {
      href: ROUTES.ABOUT_US,
      label: 'About Us',
    },
  ];

  const user: User = JSON.parse(localStorage.getItem('user') || '{}') as User;

  const username = user.username?.[0] || null;



  return (
    <header>
      <nav className={styles.leftSide}>
        <div>
          <Link to={ROUTES.HOME}>
            <img src={Logoipsum} alt="Logo" />
          </Link>
        </div>
        <nav className={styles.navigation}>
          {links.map((link) => (
            <Link key={link.label} to={link.href}>
              {link.label}
            </Link>
          ))}
        </nav>
      </nav>
      <div>
        <button onClick={() => navigate(ROUTES.LOGIN)}>
          <Link to="/Login">{username ? username : ' Login / Sign Up'}</Link>
        </button>
      </div> */}
      <AvatarDropdown username={username} />
    </header>
  );
}

export default Navbar;
