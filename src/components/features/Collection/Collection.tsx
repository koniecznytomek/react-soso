import React from 'react';
import styles from './Collection.module.scss';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { useSlideImages } from '../../../hooks/useSlideImages';
import { Collections } from '../../../slices/collections/types';

const Collection = ({ name, price, series, image }: Collections) => {
  const { slideImage } = useSlideImages();

  return (
    <>
      <div className={styles.collection}>
        <div className={styles.title}>
          <div className={styles.info}>
            <div className={styles.name}>
              <h3>
                So.<span>{name}</span>
              </h3>
            </div>
            <div className={styles.price}>
              <p>{price} €</p>
              <span>
                <svg viewBox='0 0 50 50'>
                  <line x1='50' y1='0' x2='0' y2='50' />
                </svg>
              </span>
            </div>
          </div>
          <p>Collection</p>
          <h2>{series}</h2>
          <NavLink to={`/product/${name}`}>buy now</NavLink>
        </div>
        <div className={styles.image} ref={slideImage}>
          <img src={`/images/${image}`} alt='soso' />
        </div>
      </div>
    </>
  );
};

Collection.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  series: PropTypes.string,
  image: PropTypes.string,
};

export default Collection;
