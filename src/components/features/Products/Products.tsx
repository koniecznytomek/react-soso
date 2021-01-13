import React from 'react';
import styles from './Products.module.scss';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { getProducts } from '../../../slices/products/productSlice';
import Footer from '../../layout/Footer/Footer';

const Products = () => {
  const products = useSelector(getProducts);

  return (
    <>
      <motion.div
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.products}>
          <div className={styles.product}>
            <ul>
              {products &&
                products.map(product => (
                  <li key={product.name}>
                    <NavLink to={`/product/${product.name}`}>
                      <img src={`/images/${product.thumb}`} alt='soso' />
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
                            <line x1='50' y1='0' x2='0' y2='50' />
                          </svg>
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </div>
        <Footer />
      </motion.div>
    </>
  );
};

export default Products;
