import React from 'react';
import styles from "./Header.module.css"

const Header = () => {
  return (
    <div className={styles.container}>
      <h1>Contact App</h1>
      <p>
        <a href='#'>contact-app</a> | React App
      </p>
      
    </div>
  );
};

export default Header;