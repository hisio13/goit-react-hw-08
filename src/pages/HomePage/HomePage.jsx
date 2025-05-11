import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
  return (
    <div className={styles.container}>
      <h1>Welcome to the Contact Book App</h1>
      <p>Manage your personal contacts easily and securely.</p>
    </div>
  );
};

export default HomePage;