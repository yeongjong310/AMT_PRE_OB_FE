import styled from 'styled-components/macro';
import { StyledCarouselSliderProps } from './Carousel.type';

export const StyledCarousel = styled.div`
  overflow: hidden;
  position: relative;
`;

export const StyledCarouselSlider = styled.ul<StyledCarouselSliderProps>`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  transform: translate3D(${({ positionX }) => positionX}px, 0, 0);

  > li {
    position: relative;
    padding: 0 12px;
    > a {
      display: block;
      line-height: 0;
      > img {
        filter: brightness(50%);
        width: 66.25rem;
        border-radius: 4px;
        object-fit: cover;
      }
    }
    .carousel-card {
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }
  }

  > li.active {
    img {
      filter: brightness(100%);
    }
    .carousel-card {
      opacity: 1;
    }
  }

  @media (max-width: 1199px) {
    li {
      flex-shrink: 0;
      box-sizing: border-box;
      padding: 0 10px;
      width: ${({ slideWidth }) => slideWidth}px;
    }
    li > a > img {
      height: 11.4375rem;
      width: 100%;
    }
  }
`;
