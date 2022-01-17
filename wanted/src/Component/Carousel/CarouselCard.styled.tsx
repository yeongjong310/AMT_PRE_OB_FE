import styled from 'styled-components/macro';

const StyledCarouselCard = styled.div`
  position: absolute;
  bottom: 28px;
  width: 330px;
  height: 146px;
  border-radius: 4px;
  background-color: #fff;
  text-align: left;
  left: 34px;
  box-sizing: border-box;
  color: #333;
  padding-top: 20px;

  > * {
    margin: 0 20px;
  }

  h2 {
    font-size: 20px;
    font-weight: 700;
    line-height: 1.5;
  }
  h3 {
    height: 44px;
    font-size: 14px;
    font-weight: 500;
    line-height: 1.64;
  }
  hr {
    height: 1px;
    margin: 0;
    border: none;
    background-color: #ececec;
  }
  a {
    display: flex;
    margin-top: 20px;
    font-size: 14px;
    font-weight: 700;
    line-height: 1;
    color: #36f;
    text-decoration: none;
    span {
      white-space: nowrap;
      margin-right: 2px;
    }
    svg {
      fill: #36f;
      font-size: 1em;
      width: 1em;
      height: 1em;
    }
  }
`;
export default StyledCarouselCard;
