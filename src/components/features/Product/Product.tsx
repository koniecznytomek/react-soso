import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import { addToCart } from '../../../slices/cart/cartSlice';
import { getProducts } from '../../../slices/products/productSlice';

import { motion } from 'framer-motion';
import styles from './Product.module.scss';

import ProductSlider from '../ProductSlider/ProductSlider';
import { Products } from '../../../slices/products/types';

interface MatchParams {
  id: string;
}

const Product = () => {
  const [product, setProduct] = useState<Products>();
  const [quantity, setQuantity] = useState<number>(1);
  const [size, setSize] = useState<number>(0);
  const [desc, showDesc] = useState<boolean>(false);

  const { id } = useParams<MatchParams>();
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const currentProduct = products.find(product => product.name === id);

  useEffect(() => {
    setProduct(currentProduct);
  }, [products]);

  const handleAddToCart = () => {
    product &&
      dispatch(
        addToCart({
          name: product.name,
          price: product.price,
          quantity: quantity,
          size: product.sizes[size],
          thumb: product.thumb,
        })
      );
  };

  return (
    <>
      {product && (
        <motion.div
          exit={{ opacity: 0 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className={styles.product}>
            <ProductSlider slider={product.slider} />
            <div className={styles.product__desc}>
              <p
                className={`${
                  desc ? styles.product__desc__show : styles.product__desc__hide
                }`}
              >
                {product.desc}
              </p>
              <span onClick={() => showDesc(!desc)}>Product info</span>
            </div>
            <div className={styles.frame}>
              <div className={styles.frame__name}>
                <h1>
                  So.<span>{id}</span>
                </h1>
              </div>
              <div className={styles.frame__price}>
                <p>{product.price} €</p>
                <span>
                  <svg viewBox='0 0 50 50'>
                    <line x1='50' y1='0' x2='0' y2='50' />
                  </svg>
                </span>
              </div>
              <div className={styles.frame__collection}>
                <p>{product.series}</p>
              </div>
              <div className={styles.frame__bottom}>
                <div className={styles.frame__bottom__quantity}>
                  <span
                    onClick={() => quantity > 1 && setQuantity(quantity - 1)}
                  >
                    -
                  </span>
                  {quantity}
                  <span onClick={() => setQuantity(quantity + 1)}>+</span>
                </div>
                <div className={styles.frame__bottom__size}>
                  <span onClick={() => size > 0 && setSize(size - 1)}>-</span>

                  <span>{product.sizes[size]}</span>
                  <span
                    onClick={() =>
                      size < product.sizes.length - 1 && setSize(size + 1)
                    }
                  >
                    +
                  </span>
                </div>
                <div
                  className={styles.frame__bottom__cart}
                  onClick={() => handleAddToCart()}
                >
                  <span>BUY</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Product;
