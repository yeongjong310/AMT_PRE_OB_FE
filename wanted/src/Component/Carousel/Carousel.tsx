/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable object-curly-newline */
/* eslint-disable operator-linebreak */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react/no-array-index-key */
/* eslint-disable @typescript-eslint/indent */
/* eslint-disable no-nested-ternary */
/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable implicit-arrow-linebreak */
import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import { StyledCarousel, StyledCarouselSlider } from './Carousel.styled';
import CarouselProps from './Carousel.type';
import StyledCarouselArrowButton from './CarouselArrowButton.styled';
import CarouselCard from './CarouselCard';

export default function Carousel({ imgs, duration }: CarouselProps): ReactElement {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(2);
  const isMoving = useRef(false);
  const [isPausedSlide, setIsPausedSlide] = useState<boolean>(false);

  const slideWidth = carouselRef.current?.children[0].clientWidth || 1084;

  const paddingExceptSlideWidth = () => (window.innerWidth - slideWidth) / 2;

  const getSlidePositionX = (slide: number) => slide * -slideWidth + paddingExceptSlideWidth();

  const setSlideToCenter = useCallback(
    (slide: number): void => {
      if (!carouselRef.current || isMoving.current) return;
      carouselRef.current.style.transition = `transform ${duration}ms ease`;
      const realSlide =
        slide === carouselRef.current.children.length - 2
          ? 2
          : slide === 1
          ? carouselRef.current.children.length - 3
          : slide;

      isMoving.current = true;

      setCurrentSlide(slide);

      if (realSlide !== slide) {
        setTimeout(() => {
          if (!carouselRef.current) return;
          carouselRef.current.style.transition = 'none';
          setCurrentSlide(realSlide);
        }, duration);
      }

      setTimeout(() => {
        isMoving.current = false;
      }, duration);
    },
    [duration],
  );

  const updateActiveSlide = (items: Element[], slide: number) => {
    items?.forEach(($item, index) => {
      index === slide ? $item.classList.add('active') : $item.classList.remove('active');
    });
  };

  useEffect(() => {
    if (carouselRef.current) {
      updateActiveSlide(Array.from(carouselRef.current.children), currentSlide);
    }
  }, [currentSlide]);

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (!isPausedSlide) {
      const id = window.setTimeout(() => setSlideToCenter(currentSlide + 1), 4000);

      return () => {
        clearTimeout(id);
      };
    }
  }, [currentSlide, setSlideToCenter, isPausedSlide]);

  return (
    <StyledCarousel
      onMouseEnter={() => {
        setIsPausedSlide(true);
      }}
      onMouseLeave={() => {
        setIsPausedSlide(false);
      }}
    >
      <StyledCarouselSlider ref={carouselRef} positionX={getSlidePositionX(currentSlide)}>
        {[...imgs.slice(imgs.length - 2, imgs.length), ...imgs, ...imgs.slice(0, 2)].map(
          ({ id, src, title, description }, index) => (
            <li key={id + index} className={index === currentSlide ? 'active' : undefined}>
              <CarouselCard title={title} description={description} href="#" />
              <img src={src} alt={`slide${id}`} />
            </li>
          ),
        )}
      </StyledCarouselSlider>
      <StyledCarouselArrowButton
        positionX={paddingExceptSlideWidth() - 65}
        className="carousel-arrow-button"
        arrowDirection="left"
        onClick={() => {
          setSlideToCenter(currentSlide - 1);
        }}
      />
      <StyledCarouselArrowButton
        positionX={paddingExceptSlideWidth() - 60}
        className="carousel-arrow-button"
        arrowDirection="right"
        onClick={() => {
          setSlideToCenter(currentSlide + 1);
        }}
      />
    </StyledCarousel>
  );
}
