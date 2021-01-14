import React, { useEffect } from 'react';
import styles from './Collections.module.scss';
import Products from '../../features/Products/Products';
import { useThemeObserver } from '../../../hooks/useThemeObserver';

const Collections = () => {
  const { lightTheme } = useThemeObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <div className={styles.collections} ref={lightTheme}>
        <div className={styles.collections__title}>
          <h1>All collections</h1>
        </div>
        <Products />
      </div>
    </>
  );
};

export default Collections;
