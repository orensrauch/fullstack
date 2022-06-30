import React from 'react';
import { NavLink } from 'react-router-dom';
import NavigationItems from '../NavigationItems/NavigationItems';
import './MobileNavigation.css';
import Logo from '../../Logo/Logo';

const mobileNavigation = props => (
  <nav className={['mobile-nav', props.open ? 'open' : ''].join(' ')}>
    <ul
      className={['mobile-nav__items', props.mobile ? 'mobile' : ''].join(' ')}
    >
      <div className="mobile-nav__logo" >
        <NavLink to="/">
          <Logo/>
        </NavLink>
      </div>
      <NavigationItems
        mobile
        onChoose={props.onChooseItem}
        isAuth={props.isAuth}
        onLogout={props.onLogout}
      />
    </ul>
  </nav>
);

export default mobileNavigation;
