import React, { useState } from 'react';
import styles from './Cart.module.scss';
import Basket from '../../layout/Basket/Basket';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {
  getCart,
  deleteFromCart,
  increase,
  decrease,
  priceSummary,
} from '../../../slices/cart/cartSlice';
import { IconCancel } from '../../../assets/svg/Icons';
import { getBasketHint, setBasketHint } from '../Hints/hintsSlice';
import CartHint from '../Hints/CartHint';

const Cart = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const cart = useSelector(getCart);
  const summary = useSelector(priceSummary);
  const hint = useSelector(getBasketHint);

  const toggleCart = () => {
    setIsOpen(!isOpen);
    dispatch(setBasketHint(false));
  };

  return (
    <>
      {hint && <CartHint />}
      <div className={styles.basket} onClick={() => toggleCart()}>
        <Basket counter={cart.length} />
      </div>

      <div
        className={`${styles.container} ${
          isOpen ? styles.container__open : styles.container__close
        }`}
      >
        <div className={styles.cart}>
          <span className={styles.cart__exit} onClick={() => toggleCart()}>
            <IconCancel />
          </span>

          <h3>Shopping cart</h3>
          <div className={styles.cart__products}>
            {cart.length ? (
              cart.map((product, i) => (
                <div key={i} className={styles.product}>
                  <div className={styles.product__thumb}>
                    <img src={`/images/${product.thumb}`} alt='' />
                  </div>
                  <div className={styles.product__name}>
                    <p>So.{product.name}</p>
                    {product.size}
                  </div>
                  <div className={styles.product__quantity}>
                    <span
                      className={styles.product__increment}
                      onClick={() =>
                        dispatch(
                          decrease({ name: product.name, size: product.size })
                        )
                      }
                    >
                      -
                    </span>
                    {product.quantity}
                    <span
                      className={styles.product__increment}
                      onClick={() =>
                        dispatch(
                          increase({ name: product.name, size: product.size })
                        )
                      }
                    >
                      +
                    </span>
                  </div>
                  <div className={styles.product__price}>{product.price} €</div>
                  <div
                    className={styles.product__delete}
                    onClick={() =>
                      dispatch(
                        deleteFromCart({
                          name: product.name,
                          size: product.size,
                        })
                      )
                    }
                  >
                    <IconCancel />
                  </div>
                </div>
              ))
            ) : (
              <p>Cart is currently empty</p>
            )}
          </div>

          <div className={styles.cart__summary}>
            Summary <p>{summary} €</p>
          </div>

          <div
            className={styles.cart__checkout}
            onClick={() => setIsOpen(false)}
          >
            <NavLink to='/checkout'>checkout</NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
