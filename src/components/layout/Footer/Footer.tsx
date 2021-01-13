import React from 'react';
import styles from './Footer.module.scss';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  return (
    <>
      <footer>
        <nav>
          <ul>
            <li>
              <NavLink to='/about'>about</NavLink>
            </li>
            <li>
              <NavLink to='/lookbook'>lookbook</NavLink>
            </li>
            <li>
              <NavLink to='/collections'>collections</NavLink>
            </li>
          </ul>
        </nav>
        <div className={styles.copyright}>
          <p>© soso.com</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
