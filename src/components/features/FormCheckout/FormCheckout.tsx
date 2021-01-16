import { useHistory } from 'react-router-dom';

import React, { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { sendOrder } from '../../../slices/order/orderSlice';
import { Order } from '../../../slices/order/types';

import {
  priceSummary,
  decrease,
  deleteFromCart,
  getCart,
  increase,
  socksSummary,
} from '../../../slices/cart/cartSlice';

import styles from './FormCheckout.module.scss';
import { IconCancel } from '../../../assets/svg/Icons';

const FormCheckout = () => {
  const [error, setError] = useState<boolean>(false);
  const [data, setData] = useState<Order>({
    fullname: '',
    email: '',
    phone: '',
    address: '',
    comments: '',
    order: [{ name: '', price: 0, quantity: 1, size: '', thumb: '' }],
  });

  const dispatch = useDispatch();
  const history = useHistory();
  const cart = useSelector(getCart);
  const summary = useSelector(priceSummary);
  const socks = useSelector(socksSummary);

  const filter = /\S+@\S+\.\S+/;

  useEffect(() => {
    setData({ ...data, order: cart });
  }, [cart]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const value = e.target.value;
    const key = e.target.name;

    setData({
      ...data,
      [key]: value,
    });
  };

  const handleSubmit = () => {
    if (
      data.fullname.length > 5 &&
      data.address.length > 10 &&
      data.phone.length > 1 &&
      filter.test(data.email)
    ) {
      dispatch(sendOrder(data));
      history.push('/order/summary');
    } else {
      setError(true);
    }
  };

  return (
    <>
      <div className={styles.root}>
        {cart.length > 0 ? (
          <div className={styles.checkout}>
            <div className={styles.cart}>
              {cart.map((product, i) => (
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
              ))}
            </div>

            <div className={styles.form}>
              <p>Your address:</p>
              <form>
                <label htmlFor='author'>
                  {error && !filter.test(data.email) && (
                    <span className={styles.error}>
                      {' '}
                      (Incorrect email address)
                    </span>
                  )}
                </label>
                <input
                  name='email'
                  placeholder='Email'
                  autoComplete='off'
                  onChange={e => handleChange(e)}
                />
                <label htmlFor='fullname'>
                  {error && data.fullname.length < 5 && (
                    <span className={styles.error}> (min. 5 characters)</span>
                  )}
                </label>
                <input
                  name='fullname'
                  placeholder='Fullname'
                  autoComplete='off'
                  onChange={e => handleChange(e)}
                />
                <label htmlFor='phone'>
                  {error && data.phone.length < 1 && (
                    <span className={styles.error}>
                      You must enter a phone number
                    </span>
                  )}
                </label>
                <input
                  name='phone'
                  placeholder='Phone'
                  autoComplete='off'
                  onChange={e => handleChange(e)}
                />
                <label htmlFor='phone'>
                  {error && data.address.length < 10 && (
                    <span className={styles.error}>
                       <span className={styles.error}> (min. 10 characters)</span>
                    </span>
                  )}
                </label>
                <input
                  name='address'
                  placeholder='Address'
                  autoComplete='off'
                  onChange={e => handleChange(e)}
                />
                <textarea
                  name='comments'
                  placeholder='Comments'
                  autoComplete='off'
                  onChange={e => handleChange(e)}
                />

                {cart.length > 0 && (
                  <div className={styles.cart__summary}>
                    Total price
                    <p>
                      {summary} € / {socks} pair{socks > 1 && 's'}
                    </p>
                  </div>
                )}
                <span className={styles.submit} onClick={() => handleSubmit()}>
                  buy
                </span>
              </form>
            </div>
          </div>
        ) : (
          <p>Currently you don`t have any pair of socks in your cart.</p>
        )}
      </div>
    </>
  );
};

export default FormCheckout;
