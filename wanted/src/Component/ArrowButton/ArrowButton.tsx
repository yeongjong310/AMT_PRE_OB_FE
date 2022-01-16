import React, { ReactElement } from 'react';
import StyledArrowButton from './ArrowButton.styled';
import ArrowButtonProps from './ArrowButton.type';

export default function ArrowButton({
  arrowDirection,
  onClick,
  className,
}: ArrowButtonProps): ReactElement {
  return (
    <StyledArrowButton
      arrowDirection={arrowDirection}
      type="button"
      onClick={onClick}
      className={className}
    >
      <svg className="SvgIcon_SvgIcon__root__svg__DKYBi" viewBox="0 0 18 18">
        <path d="m11.955 9-5.978 5.977a.563.563 0 0 0 .796.796l6.375-6.375a.563.563 0 0 0 0-.796L6.773 2.227a.562.562 0 1 0-.796.796L11.955 9z" />
      </svg>
    </StyledArrowButton>
  );
}
