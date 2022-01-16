import styled from 'styled-components';

export const StyledCarousel = styled.div`
  overflow: hidden;
`;

export const StyledCarouselSlider = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  display: flex;
  li {
    filter: brightness(50%);
    padding: 0 12px;
  }

  li.active {
    filter: brightness(100%);
  }
`;
