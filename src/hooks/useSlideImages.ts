import { useRef, useEffect } from 'react';

interface Optionss {
  threshold: number[];
}
const useSlideImages = () => {
  const options: Optionss = {
    threshold: [],
  };

  for (let i = 0; i < 100; i++) {
    const scale = i / 100;
    options.threshold.push(scale);
  }

  const refs = useRef<HTMLDivElement[]>([]);

  const slideImage = (el: HTMLDivElement) => {
    if (el && !refs.current.includes(el)) refs.current.push(el);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(items => {
      const delta = items[0].boundingClientRect.top / 5;
      const div = <HTMLElement>items[0].target;

      if (items[0].isIntersecting) {
        div.style.transform = `translate3d(0, ${delta}px, 0)`;
      }

      return () => observer.disconnect();
    }, options);

    if (refs.current.length) {
      for (const ref of refs.current) {
        observer.observe(ref);
      }
    }
  }, [refs]);

  return { slideImage };
};
export { useSlideImages };
