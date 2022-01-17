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
  li {
    filter: brightness(50%);
    padding: 0 12px;
    img {
      width: 66.25rem;
      border-radius: 4px;
      object-fit: cover;
    }

    .carousel-card {
      opacity: 0;
      transition: opacity 0.4s ease-in-out;
    }
  }

  li.active {
    filter: brightness(100%);
    .carousel-card {
      opacity: 1;
    }
  }
`;
