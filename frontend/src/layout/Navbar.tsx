import Logoipsum from './../assets/svg/Logoipsum.svg';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

interface User {
  id?: string;
  username?: string;
  email?: string;
  createdAt?: string;
  updatedAt?: string;
}

function Navbar(): React.ReactElement {
  const user: User = JSON.parse(localStorage.getItem('user') || '{}') as User;

  const username = user.username?.[0] || null;

  return (
    <header>
      <nav className={styles.leftSide}>
        <div>
          <Link to="/">
            <img src={Logoipsum} alt="Logo" />
          </Link>
        </div>
        <div>
          <Link to="/">Home</Link>
        </div>
        <div>
          <Link to="/Services">Services</Link>
        </div>
        <div>
          <Link to="/AboutUs">About us</Link>
        </div>
      </nav>
      <div>
        <button>
          <Link to="/Login">{username ? username : ' Login / Sign Up'}</Link>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
