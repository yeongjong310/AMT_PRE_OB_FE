/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable implicit-arrow-linebreak */
import React, { ReactElement, useRef, useState } from 'react';
import { StyledCarousel, StyledCarouselSlider } from './Carousel.styled';
import CarouselProps from './Carousel.type';

export default function Carousel({ imgs, duration }: CarouselProps): ReactElement {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(2);
  const imageWidth = carouselRef.current?.children[0].clientWidth || 1015;
  let isMoving = false;

  const getSlidePositionX = (slideIndex: number) =>
    slideIndex * -imageWidth + (window.innerWidth - imageWidth) / 2;

  const updateActiveSlide = (items: Element[], slide: number) => {
    items.forEach(($item, index) => {
      index === slide ? $item.classList.add('active') : $item.classList.remove('active');
    });
  };

  const setSlideToCenter = (slide: number): void => {
    if (!carouselRef.current || isMoving) return;

    isMoving = true;

    carouselRef.current.style.transition = `transform ${duration}ms ease 0s`;
    carouselRef.current.style.transform = `translate3D(${getSlidePositionX(slide)}px, 0, 0)`;

    updateActiveSlide(Array.from(carouselRef.current.children), slide);

    setTimeout(() => {
      if (!carouselRef.current) return;

      carouselRef.current.style.transition = 'none';
      setCurrentSlide(
        slide === carouselRef.current.children.length - 2
          ? 2
          : slide === 1
          ? carouselRef.current.children.length - 3
          : slide,
      );
    }, duration);
  };

  return (
    <StyledCarousel>
      <StyledCarouselSlider
        ref={carouselRef}
        style={{
          transform: `translate3D(${getSlidePositionX(currentSlide)}px, 0, 0)`,
        }}
      >
        {[...imgs.slice(imgs.length - 2, imgs.length), ...imgs, ...imgs.slice(0, 2)].map(
          ({ id, src }, index) => (
            <li key={id + index} className={index === currentSlide ? 'active' : undefined}>
              <img src={src} alt={`slide${id}`} />
            </li>
          ),
        )}
      </StyledCarouselSlider>
      <button
        type="button"
        onClick={() => {
          setSlideToCenter(currentSlide - 1);
        }}
      >
        prev
      </button>
      <button
        type="button"
        onClick={() => {
          setSlideToCenter(currentSlide + 1);
        }}
      >
        next
      </button>
    </StyledCarousel>
  );
}
