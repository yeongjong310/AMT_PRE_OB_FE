import React, { ReactElement, useCallback, useEffect, useRef, useState } from 'react';
import throttle from 'src/utils/throttle';
import { StyledCarousel, StyledCarouselSlider } from './Carousel.styled';
import CarouselProps from './Carousel.type';
import StyledCarouselArrowButton from './CarouselArrowButton.styled';
import CarouselCard from './CarouselCard';

export default function Carousel({ imgs, duration }: CarouselProps): ReactElement {
  const carouselRef = useRef<HTMLUListElement>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(2);
  const [isPausedSlide, setIsPausedSlide] = useState<boolean>(false);
  const [innerWidth, setInnerWidth] = useState<number>(window.innerWidth);
  const [slideWidth, setSlideWidth] = useState<number>(0);
  const isMoving = useRef(false);

  const paddingExceptSlideWidth = () => (innerWidth - slideWidth) / 2;
  const getSlidePositionX = (slide: number) => slide * -slideWidth + paddingExceptSlideWidth();

  // TODO: currentSilde가 변경되면 setSlideToCenter가 실행되도록 하는 구조로 옮기는 것이 더 좋을 듯 하다.
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
          setCurrentSlide(realSlide);
        }, duration);
      }
      // TODO: 첫번째에서 마지막으로 가는 순간 카드가 transition 되지 않도록 수정하기, 그반대도 같음.
      setTimeout(() => {
        isMoving.current = false;
        if (carouselRef.current) {
          carouselRef.current.style.transition = 'none';
        }
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

  let initialMousePosX = 0;
  let offsetX = 0;

  const swapeStart = (e: MouseEvent) => {
    // 오프셋 = 현재(드래그하고 있는 시점) 마우스 포인터 위치 - 드래그 시작 시점의 마우스 포인터 위치
    offsetX = e.clientX - initialMousePosX;

    if (carouselRef.current) {
      carouselRef.current.style.transform = `translate3d(${
        offsetX + getSlidePositionX(currentSlide)
      }px, 0, 0)`;
    }
  };

  const swapeEnd = () => {
    document.onmousemove = null;

    if (offsetX > 105) {
      setSlideToCenter(currentSlide - 1);
    } else if (offsetX < -105) {
      setSlideToCenter(currentSlide + 1);
    }

    // 드래그로 이동했던 transform 초기화
    if (carouselRef.current) {
      carouselRef.current.style.transform = '';
    }

    // 오프셋, 시작지점 초기화
    initialMousePosX = 0;
    offsetX = 0;
  };

  useEffect(() => {
    const handleResize = throttle(() => {
      setIsPausedSlide(true);
      setInnerWidth(window.innerWidth);
    }, 200);
    window.addEventListener('resize', handleResize);

    return () => {
      setIsPausedSlide(false);
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
        setIsPausedSlide(false);
      }}
    >
      <StyledCarouselSlider
        ref={carouselRef}
        positionX={getSlidePositionX(currentSlide)}
        slideWidth={innerWidth - 80}
        onMouseDown={event => {
          event.preventDefault();
          if (isMoving.current) return;
          event.preventDefault();
          initialMousePosX = event.clientX - offsetX;
          document.onmousemove = swapeStart;
        }}
        onMouseUp={swapeEnd}
        onMouseLeave={swapeEnd}
      >
        {[...imgs.slice(imgs.length - 2, imgs.length), ...imgs, ...imgs.slice(0, 2)].map(
          ({ id, src, title, description }, index) => (
            <li
              // id + index로 고유키, 예측가능한 키 생성하기 위해 this line에만 eslint 예외 처리
              // eslint-disable-next-line react/no-array-index-key
              key={id + index}
              className={index === currentSlide ? 'active' : undefined}
              ref={ref => {
                if (ref && index === 0) {
                  setSlideWidth(ref.getBoundingClientRect().width);
                }
              }}
            >
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
        arrowDirection="left"
        onClick={() => {
          setSlideToCenter(currentSlide - 1);
        }}
      />
      <StyledCarouselArrowButton
        positionX={paddingExceptSlideWidth() - 60}
        arrowDirection="right"
        onClick={() => {
          setSlideToCenter(currentSlide + 1);
        }}
      />
    </StyledCarousel>
  );
}
