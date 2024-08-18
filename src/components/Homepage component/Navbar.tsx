import Logoipsum from "./../../assets//svg/Logoipsum.svg";
import styles from "./Navbar.module.scss";

function Navbar(): React.ReactElement {
  const isSignedIn = false;

  return (
    <header>
      <nav className={styles.leftSide}>
        <div>
          <img src={Logoipsum} alt="Logo" />
        </div>
        <div>Home</div>
        <div>Services</div>
        <div>About us</div>
      </nav>
      <div>
        <button>{isSignedIn ? "Nothing" : " Login / Sign Up"}</button>
      </div>
    </header>
  );
}

export default Navbar;
