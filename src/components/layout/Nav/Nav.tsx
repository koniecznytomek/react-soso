import React from 'react';
import { NavLink } from 'react-router-dom';

import './Nav.scss';
import { useSelector } from 'react-redux';
import { getTheme } from '../../../slices/theme/themeSlice';



const Nav = () => {
  const theme = useSelector(getTheme);

  return (
    <>
      <nav className={`nav nav__${theme}`}>
        <ul>
          <li><NavLink to='/about'>About</NavLink></li>
          <li><NavLink to='/lookbook'>Lookbook</NavLink></li>
          <li><NavLink to='/collections'>Collections</NavLink></li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
