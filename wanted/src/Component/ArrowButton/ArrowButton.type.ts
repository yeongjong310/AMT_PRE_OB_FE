export default interface ArrowButtonProps {
  arrowDirection: 'up' | 'down' | 'left' | 'right';
  onClick: () => void;
  className?: string;
}

export interface StyledArrowButtonProps {
  arrowDirection: ArrowButtonProps['arrowDirection'];
}
