import React from 'react';
import styles from './Collections.module.scss';
import Products from '../../features/Products/Products';

const Collections = () => {
  return (
    <>
      <div className={styles.collections}>
        <Products />
      </div>
    </>
  );
};

export default Collections;
