import styled from '@emotion/styled';
import { BsFillTrashFill } from 'react-icons/bs';
import colors from './colors';

function TrashButton({ onClick }) {
  return (
    <StyledButton onClick={onClick}>
      <BsFillTrashFill />
    </StyledButton>
  )
}

export default TrashButton;

const StyledButton = styled.button`
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${colors.blue1};
  border-radius: 50%;
  background-color: transparent;
  transition: all 1s;
  outline: none;
  cursor: pointer;

  & svg {
    fill: ${colors.blue1};
    font-size: 20px;
    transition: all 1s;
  }

  &:hover {
    border: 1px solid ${colors.blue2};
    background-color: rgba(47, 128, 237, 0.1);
  }

  &:hover svg {
    fill: ${colors.blue2};
  }
`