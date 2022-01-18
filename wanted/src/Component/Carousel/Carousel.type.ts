export default interface CarouselProps {
  imgs: {
    id: number;
    src: string;
    title: string;
    description: string;
  }[];
  duration: number;
}

export interface StyledCarouselSliderProps {
  positionX: number;
  slideWidth: number;
}
