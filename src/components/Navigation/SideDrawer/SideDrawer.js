import React from 'react';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import styles from './SideDrawer.module.css';

const sideDrawer = props => {
  // animation and stuff

  return (
    <div className={styles.SideDrawer}>
      {/* First way to dynamically set height (check Toolbar.js for explanation) */}
      {/* <Logo newHeight="11%" /> */}

      {/* Second way */}
      <div className={styles.Logo}>
        <Logo />
      </div>
      <nav>
        <NavigationItems />
      </nav>
    </div>
  );
};

export default sideDrawer;
