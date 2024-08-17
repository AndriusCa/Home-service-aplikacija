import styles from "./Title.module.scss";
import SearchIcon from "./../../assets/SearchIcon.svg";

function Title(): React.ReactElement {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        Find Home <span>Service/Repair</span> Near You
      </h1>
      <h2 className={styles.subtitle}>
        Explore Best Home Service & Repair near you
      </h2>
      <div className={styles.searchField}>
        <input type="text" placeholder="Search" />
        <img className={styles.searchIcon} src={SearchIcon} alt="search" />
      </div>
    </div>
  );
}

export default Title;
