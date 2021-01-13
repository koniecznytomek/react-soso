import React from 'react';
import styles from './Products.module.scss';
import { useThemeObserver } from '../../../hooks/useThemeObserver';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../slices/products/productSlice';

const Products = () => {
  const { lightTheme } = useThemeObserver();
  const products = useSelector(getProducts);

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.products} ref={lightTheme}>
          <div className={styles.collection}>
            <ul>
              {products?.map(product => (
                <li key={product.name}>
                  <NavLink to={`/product/${product.name}`}>
                    <img src={`/images/${product.thumb}`} alt='soso'/>
                  </NavLink>
                  <div className={styles.info}>
                    <div className={styles.name}>
                      <h2>
                        So.<span>{product.name}</span>
                      </h2>
                    </div>
                    <div className={styles.price}>
                      <p>{product.price} €</p>
                      <span>
                      <svg viewBox='0 0 50 50'>
                        <line x1='50' y1='0' x2='0' y2='50'/>
                      </svg>
                    </span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Products;
