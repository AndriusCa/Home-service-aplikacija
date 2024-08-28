import React, { useState, useCallback } from 'react';
import styles from './Title.module.scss';
import SearchIcon from './../assets/svg/SearchIcon.svg';

function Title(): React.ReactElement {
  const [searchQuery, setSearchQuery] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const searchingService = useCallback(async () => {
    try {
      const response = await fetch('/api/search', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const data = await response.json();
      console.log('Search results:', data);
    } catch (error) {
      console.error('Error during search:', error);
    }
  }, [searchQuery]);

  const handleSearchClick = () => {
    if (searchQuery.trim()) {
      searchingService();
    }
  };

  const searchQueries = ['Cleaning', 'Repair', 'Painting', 'Shifting', 'Plumbing', 'Electric'];

  return (
    <div className={styles.titleContainer}>
      <h1 className={styles.title}>
        Find Home <span>Service/Repair</span> Near You
      </h1>
      <p className={styles.subtitle}>Explore Best Home Service & Repair near you</p>
      <div className={styles.searchField}>
        <input type="text" placeholder="Search" value={searchQuery} onChange={handleInputChange} />
        <img className={styles.searchIcon} src={SearchIcon} alt="search" onClick={handleSearchClick} />
      </div>
    </div>
  );
}

export default Title;
