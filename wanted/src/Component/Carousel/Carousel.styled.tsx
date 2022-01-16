import styled from 'styled-components';
import { StyledCarouselSliderProps } from './Carousel.type';

export const StyledCarousel = styled.div`
  overflow: hidden;
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
  }

  li.active {
    filter: brightness(100%);
  }
`;
