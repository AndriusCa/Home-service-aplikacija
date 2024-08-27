import Logoipsum from './../assets/svg/Logoipsum.svg';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

function Navbar(): React.ReactElement {
  const isSignedIn = false;

  return (
    <header>
      <nav className={styles.leftSide}>
        <div>
          <img src={Logoipsum} alt="Logo" />
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
          <Link to="/Login">{isSignedIn ? 'Nothing' : ' Login / Sign Up'}</Link>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
