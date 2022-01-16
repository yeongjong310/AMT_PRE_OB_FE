/* eslint-disable @typescript-eslint/indent */
import styled from 'styled-components';
import { StyledArrowButtonProps } from './ArrowButton.type';

const StyledArrowButton = styled.button<StyledArrowButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;

  margin: 0;
  padding: 0;
  border: 0;
  background: none;
  width: 36px;
  height: 36px;
  background-color: #fff;
  color: #333333;
  font-size: 16px;

  border: 1px solid #e1e2e3;
  border-radius: 50%;
  box-shadow: 0 2px 2px 0 rgb(0 0 0 / 5%);

  > svg {
    width: 1em;
    height: 1em;
    transform: rotate(
      ${({ arrowDirection }) => {
        switch (arrowDirection) {
          case 'right':
            return '0deg';
          case 'down':
            return '90deg';
          case 'left':
            return '180deg';
          case 'up':
            return '270deg';
          default:
            return '0deg';
        }
      }}
    );
  }
`;

export default StyledArrowButton;
