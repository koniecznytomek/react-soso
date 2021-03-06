import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { useThemeObserver } from '../../../hooks/useThemeObserver';

import { useSelector } from 'react-redux';
import { getCollections } from '../../../slices/collections/collectionsSlice';

import { motion } from 'framer-motion';
import styles from './Home.module.scss';

import Collection from '../../features/Collection/Collection';
import Footer from '../../layout/Footer/Footer';
import Slider from '../../features/Slider/Slider';

const Home = () => {
  const { lightTheme } = useThemeObserver();
  const collections = useSelector(getCollections);

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
        <div className={styles.home}>
          <Slider />
          <section className={styles.collections} ref={lightTheme}>
            {collections &&
              collections.map(c => (
                <Collection
                  key={c.name}
                  name={c.name}
                  price={c.price}
                  series={c.series}
                  image={c.image}
                />
              ))}
          </section>
          <section className={styles.lookbook}>
            <div className={styles.lookbook__title}>
              <p>2021</p>
              <h1>Spring & summer</h1>
              <NavLink to='/lookbook'>view lookbook</NavLink>
            </div>
            <div className={styles.lookbook__img}>
              <img src='/images/so-elegant-1.jpg' alt='soelegant' />
            </div>
          </section>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default Home;
