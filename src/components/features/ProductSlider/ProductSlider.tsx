import React, { useState, useRef, useEffect } from 'react';
import './ProductSlider.scss';
import SliderHint from '../Hints/SliderHint';
import { useDispatch, useSelector } from 'react-redux';
import { getSliderHint, setSliderHint } from '../Hints/hintsSlice';

interface Props {
  slider: {
    alt: string;
    src: string;
  }[];
}

const ProductSlider = ({ slider }: Props) => {
  const [current, setCurrent] = useState(0);
  const [isSliding, setIsSliding] = useState(false);

  const time = 1000;
  const prev = useRef<number[]>([]);
  const refs = useRef<HTMLDivElement[]>([]);
  const len = slider.length - 1;

  const dispatch = useDispatch();
  const hint = useSelector(getSliderHint);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSliding(false);
      prev.current.length &&
        refs.current[prev.current as keyof undefined].classList.remove(
          'isHiding'
        );
      refs.current[current].classList.remove('isShowing');
    }, time);

    if (isSliding) {
      refs.current[current].classList.add('isShowing');
      prev.current.length &&
        refs.current[prev.current as keyof undefined].classList.add('isHiding');
    }
    return () => clearTimeout(timer);
  });

  const handleNext = () => {
    setIsSliding(true);
    dispatch(setSliderHint(false));

    if (current < len) {
      setCurrent(current + 1);
    } else {
      setCurrent(0);
    }

    prev && prev.current.shift();
    prev && prev.current.push(current);
  };

  const handleShowing = (i: number) => {
    if (i === current) {
      return 'show';
    } else {
      return 'hide';
    }
  };

  const handleRef = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  return (
    <>
      {hint && (
        <div onClick={() => !isSliding && handleNext()}>
          <SliderHint />
        </div>
      )}
      <div className='slider'>
        <div
          className='slider__images'
          onClick={() => !isSliding && handleNext()}
        >
          {slider.map((slide, i) => (
            <div
              key={i}
              className={`slider__image ${handleShowing(i)}`}
              ref={handleRef}
            >
              <img src={`/images/${slide.src}`} alt='slider' />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProductSlider;
