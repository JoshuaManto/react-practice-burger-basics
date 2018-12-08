import React from 'react';

import burgerLogo from '../../assets/images/burger-logo.png';
import styles from './Logo.module.css';

const logo = props => (
  /* First way to dynamically set height (check Toolbar.js for explanation) */
  // <div className={styles.Logo} style={{ height: props.newHeight }}>

  // Second way
  <div className={styles.Logo}>
    <img src={burgerLogo} alt="MyBurger" />
  </div>
);

export default logo;
