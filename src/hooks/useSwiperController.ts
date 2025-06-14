import { useCallback, useRef, useState } from 'react';
import Swiper from 'swiper';

export function useSwiperController() {
  const swiperRef = useRef<Swiper | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const setSwiper = useCallback((swiper: Swiper) => {
    swiperRef.current = swiper;
    setActiveIndex(swiper.activeIndex);
  }, []);

  const slideTo = (index: number) => {
    setActiveIndex(index);
    swiperRef.current?.slideTo(index);
    return index;
  };
  return { setSwiper, slideTo, activeIndex };
}
