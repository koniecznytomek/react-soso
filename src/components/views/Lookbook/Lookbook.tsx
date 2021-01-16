import React, { useEffect } from 'react';

import { motion } from 'framer-motion';
import styles from './Lookbook.module.scss';

const Lookbook = () => {

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
        <div className={styles.lookbook}>
          <header className={styles.header}>
            <div className={styles.header__title}>
              <h1>Spring & summer</h1>
              <p>Soon</p>
            </div>
            <div className={styles.header__img}>
              <img src='/images/so-elegant-1.jpg' alt='soelegant' />
            </div>
            <section className={styles.content}>

            </section>
          </header>
        </div>
      </motion.div>
    </>
  );
};

export default Lookbook;
