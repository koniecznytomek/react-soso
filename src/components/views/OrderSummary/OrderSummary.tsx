import React, { useEffect } from 'react';

import { useThemeObserver } from '../../../hooks/useThemeObserver';

import styles from './OrderSummary.module.scss';
import { motion } from 'framer-motion';

const OrderSummary = () => {
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
        <div className={styles.orderSummary} ref={lightTheme}>
          <div className={styles.info}>
            <h1>Order summary</h1>
            <p>Back to the shop</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default OrderSummary;
