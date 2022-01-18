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
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);

  const slideWidth = carouselRef.current?.children[0].clientWidth || 1084;

  const paddingExceptSlideWidth = () => (innerWidth - slideWidth) / 2;

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
      // 사용하지 않는 표현식은 일반적으로 지워야 하지만, 아래의 경우 예외 케이스로 this line에만 eslint 예외 처리
      // eslint-disable-next-line @typescript-eslint/no-unused-expressions
      index === slide ? $item.classList.add('active') : $item.classList.remove('active');
    });
  };

  useEffect(() => {
    const handleResize = () => {
      setInnerWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [innerWidth]);

  useEffect(() => {
    if (carouselRef.current) {
      updateActiveSlide(Array.from(carouselRef.current.children), currentSlide);
    }
  }, [currentSlide]);

  useEffect(() => {
    if (!isPausedSlide) {
      const id = window.setTimeout(() => setSlideToCenter(currentSlide + 1), 4000);

      return () => {
        clearTimeout(id);
      };
    }
    return undefined;
  }, [currentSlide, setSlideToCenter, isPausedSlide]);

  return (
    <StyledCarousel
      onMouseEnter={() => {
        setIsPausedSlide(true);
      }}
      onMouseLeave={() => {
        setIsPausedSlide(true);
      }}
    >
      <StyledCarouselSlider ref={carouselRef} positionX={getSlidePositionX(currentSlide)}>
        {[...imgs.slice(imgs.length - 2, imgs.length), ...imgs, ...imgs.slice(0, 2)].map(
          ({ id, src, title, description }, index) => (
            // id + index로 고유키, 예측가능한 키 생성하기 위해 this line에만 eslint 예외 처리
            // eslint-disable-next-line react/no-array-index-key
            <li key={id + index} className={index === currentSlide ? 'active' : undefined}>
              <a href="##">
                <img src={src} alt={`slide${id}`} />
              </a>
              <CarouselCard
                className="carousel-card"
                title={title}
                description={description}
                href="#"
              />
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
