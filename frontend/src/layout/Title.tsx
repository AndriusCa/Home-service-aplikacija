import styles from './Title.module.scss';
import SearchIcon from './../assets/svg/SearchIcon.svg';

function Title(): React.ReactElement {
  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        Find Home <span>Service/Repair</span> Near You
      </h1>
      <p className={styles.subtitle}>Explore Best Home Service & Repair near you</p>
      <div className={styles.searchField}>
        <input type="text" placeholder="Search" />
        <img className={styles.searchIcon} src={SearchIcon} alt="search" />
      </div>
    </div>
  );
}

export default Title;
