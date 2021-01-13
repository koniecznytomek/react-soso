import React from 'react';
import styles from './Checkout.module.scss';
import { motion } from 'framer-motion';
import FormCheckout from '../../features/FormCheckout/FormCheckout';
import { useThemeObserver } from '../../../hooks/useThemeObserver';

const Checkout = () => {
  const { lightTheme } = useThemeObserver();

  return (
    <>
      <motion.div
        exit={{ opacity: 0, y: -150 }}
        initial={{ opacity: 0, y: 150 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className={styles.checkout} ref={lightTheme}>
          <h1>Checkout</h1>
          <FormCheckout />
        </div>
      </motion.div>
    </>
  );
};

export default Checkout;
