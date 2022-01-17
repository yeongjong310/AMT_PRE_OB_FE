export default interface CarouselProps {
  imgs: {
    id: number;
    src: string;
  }[];
  duration: number;
}

export interface StyledCarouselSliderProps {
  positionX: number;
}

export interface StyledCarouselArrowButtonProps {
  positionX: number;
}
