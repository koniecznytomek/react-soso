import React from 'react';
import styles from './Header.module.scss';
import Logo from '../Logo/Logo';
import Cart from '../../features/Cart/Cart';

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo />


      <Cart />
    </div>
  );
};

export default Header;
