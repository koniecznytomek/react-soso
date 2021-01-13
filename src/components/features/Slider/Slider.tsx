import React, { useState } from 'react';
import styles from './Slider.module.scss';
import { useInterval } from '../../../hooks/useInterval';
import { IconCircle, IconDot } from '../../../assets/svg/Icons';

const slider = [
  { src: 'so_dots_1.jpg', alt: 'slide', desc: 'So so happy new year!' },
  { src: 'so_dots_2.jpg', alt: 'slide', desc: 'So so happy new year!' },
  { src: 'so_dots_2.jpg', alt: 'slide', desc: 'So so happy new year!' },
];

const Slider = () => {
  const [count, setCount] = useState(0);

  useInterval(() => {
    count > slider.length - 2 ? setCount(0) : setCount(count + 1);
  }, 5000);

  return (
    <>
      <header>
        <div className={styles.slider}>
          {slider &&
            slider.map((slide, i) => (
              <div
                key={i}
                className={`${styles.slide} ${
                  i === count ? styles.slide__show : styles.slide__hide
                }`}
              >
                <img src={`/images/${slide.src}`} alt={slide.alt} />
                <h1>{slide.desc}</h1>
              </div>
            ))}

          <div className={styles.dots}>
            {slider &&
              slider.map((_, i) => (
                <div key={i} className={styles.dot} onClick={() => setCount(i)}>
                  <IconDot />
                </div>
              ))}
            <div
              className={styles.circle}
              style={{ transform: `translateX(${count * 50}px)` }}
            >
              <IconCircle />
            </div>
          </div>
        </div>
      </header>
    </>
  );
};
export default Slider;
