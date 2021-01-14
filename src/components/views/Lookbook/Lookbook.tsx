import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import styles from './Lookbook.module.scss';
import { useThemeObserver } from '../../../hooks/useThemeObserver';
import { NavLink } from 'react-router-dom';

const Lookbook = () => {
  const { lightTheme } = useThemeObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        exit={{ opacity: 0, y: -150 }}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.lookbook} ref={lightTheme}>
          <div className={styles.lookbook__title}>
            <h1>Spring & summer</h1>
          </div>
          <div className={styles.lookbook__img}>
            <img src='/images/so-elegant-1.jpg' alt='soelegant' />
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Lookbook;
