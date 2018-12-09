import React from 'react';

import styles from './Toolbar.module.css';

import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

const toolbar = props => (
  <header className={styles.Toolbar}>
    <DrawerToggle clicked={props.drawerToggleClicked} />

    {/* 2 ways to to dynamically set height: */}
    {/* first, to put "height" as props and let Logo.js set it to override the css class settings via inline styles*/}
    {/* <Logo newHeight="80%" /> */}
    {/* second, wrap in divs then add Logo css class. This is allowed because of css modules. Logo css class from Logo component and Logo css class from Toolbar and SideDrawer components will be converted to different names and will then be useable for each component*/}
    <div className={styles.Logo}>
      <Logo />
    </div>

    <nav className={styles.DesktopOnly}>
      <NavigationItems />
    </nav>
  </header>
);

export default toolbar;
