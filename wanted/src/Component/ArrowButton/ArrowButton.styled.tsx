import styled from 'styled-components';

const StyledArrowButton = styled.button`
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
  }
`;

export default StyledArrowButton;
