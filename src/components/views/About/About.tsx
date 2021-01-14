import React, { useEffect } from 'react';
import styles from './About.module.scss';
import { useThemeObserver } from '../../../hooks/useThemeObserver';
import { motion } from 'framer-motion';
import Footer from '../../layout/Footer/Footer';

const About = () => {
  const { lightTheme } = useThemeObserver();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <motion.div
        exit={{ opacity: 0, y: -150 }}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.about}>
         <img src='/images/s1.jpg' alt='' />
         <img src='/images/s2.jpg' alt='' />
         <img src='/images/s3.jpg' alt='' />
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default About;
