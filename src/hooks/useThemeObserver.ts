import { useRef, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setTheme } from '../slices/theme/themeSlice';

// Polyfill for safari.
require('intersection-observer');

interface Options {
  threshold: number[];
}
const useThemeObserver = () => {
  const dist = 100;

  const options: Options = {
    threshold: [],
  };

  for (let i = 0; i < 100; i++) {
    const scale = i / 100;
    options.threshold.push(scale);
  }

  const refs = useRef<HTMLDivElement[]>([]);
  const dispatch = useDispatch();

  const lightTheme = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(items => {
      const item = items.find(item => item.isIntersecting);

      if (item) {
        if (
          item.boundingClientRect.top < dist &&
          item.boundingClientRect.bottom > dist
        ) {
          dispatch(setTheme('dark'));
        } else {
          dispatch(setTheme('light'));
        }
      } else {
        dispatch(setTheme('light'));
      }

      return () => observer.disconnect();
    }, options);

    if (refs.current.length) {
      for (const ref of refs.current) {
        observer.observe(ref);
      }
    }
  }, []);

  return { lightTheme };
};
export { useThemeObserver };
