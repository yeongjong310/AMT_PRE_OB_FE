/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable operator-linebreak */
// eslint-disable-next-line object-curly-newline
import React, { ReactElement, useRef, useState } from 'react';
import { StyledCarousel, StyledCarouselSlider } from './Carousel.styled';
import slideImgs from './slideImgs';

export default function Carousel(): ReactElement {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(2);
  const imageWidth = carouselRef.current?.children[0].clientWidth || 1015;
  let isMoving = false;

  const getSlidePositionX = (slideIndex: number) =>
    slideIndex * -imageWidth + (window.innerWidth - imageWidth) / 2;

  const setSlideToCenter = (slide: number): void => {
    if (!carouselRef.current || isMoving) return;
    isMoving = true;
    carouselRef.current.style.transition = 'transform 500ms ease-in-out';
    carouselRef.current.style.transform = `translate3D(${getSlidePositionX(
      slide,
    )}px, 0, 0)`;

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
    }, 500);
  };

  return (
    <StyledCarousel>
      <StyledCarouselSlider
        ref={carouselRef}
        style={{
          transform: `translate3D(${getSlidePositionX(currentSlide)}px, 0, 0)`,
        }}
      >
        {[
          ...slideImgs.slice(slideImgs.length - 2, slideImgs.length),
          ...slideImgs,
          ...slideImgs.slice(0, 2),
        ].map(({ id, src }, index) => (
          <li key={id + index}>
            <img src={src} alt={`slide${id}`} />
          </li>
        ))}
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
