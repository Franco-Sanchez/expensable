import styled from '@emotion/styled';
import colors from './colors';

export const ButtonFill = styled.button`
  font-family: 'Roboto';
  font-size: 18px;
  line-height: 24px;
  background-color: ${colors.blue1};
  color: ${colors.white};
  padding: 8px 16px;
  border: none;
  border-radius: 8px;
  outline: none;
  cursor: pointer;
  transition: all 1s;

  &:hover {
    background-color: ${colors.blue2};
  }
` 

export const ButtonBorder = styled(ButtonFill)`
  background-color: transparent;
  color: ${colors.blue1};
  border: 1px solid ${colors.blue1};
  position: fixed;
  bottom: 40px;

  &:hover {
    border: 1px solid ${colors.blue2};
    background-color: rgba(47, 128, 237, 0.1);
  }
`