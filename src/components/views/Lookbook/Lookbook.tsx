import React from 'react';
import { motion } from 'framer-motion';
import styles from './Lookbook.module.scss';
import { useThemeObserver } from '../../../hooks/useThemeObserver';

const Lookbook = () => {
  const { lightTheme } = useThemeObserver();

  return (
    <>
      <motion.div
        exit={{ opacity: 0, y: -150 }}
        initial={{ opacity: 0, y: -150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <div className={styles.lookbook} ref={lightTheme}>
          <h1>Lookbook</h1>
          <img src='/images/so-elegant-1.jpg' alt='soelegant' />
        </div>
      </motion.div>
    </>
  );
};

export default Lookbook;
