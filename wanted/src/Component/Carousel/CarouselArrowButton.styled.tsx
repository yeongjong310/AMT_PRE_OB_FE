/* eslint-disable no-confusing-arrow */
/* eslint-disable implicit-arrow-linebreak */
import styled from 'styled-components/macro';
import ArrowButton from '../ArrowButton/ArrowButton';

export interface StyledCarouselArrowButtonProps {
  positionX: number;
}

const StyledCarouselArrowButton = styled(ArrowButton)<StyledCarouselArrowButtonProps>`
  width: 30px;
  height: 60px;
  opacity: 0.5;
  border-radius: 15px;
  position: absolute;
  ${({ positionX, arrowDirection }) =>
    arrowDirection === 'left' ? `left: ${positionX}px` : `right: ${positionX}px`};
  top: 50%;
  transform: translateY(-50%);
`;
export default StyledCarouselArrowButton;
