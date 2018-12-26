import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './NavigationItem.module.css';

const navigationItem = props => (
  <li className={styles.NavigationItem}>
    {/* <a href={props.link} className={props.active ? styles.active : null}>
      {props.children}
    </a> */}

    <NavLink
      to={props.link}
      exact={props.exact}
      activeClassName={styles.active}
    >
      {props.children}
    </NavLink>
  </li>
);

export default navigationItem;
