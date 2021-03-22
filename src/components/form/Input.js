import styled from "@emotion/styled";
import colors from "../UI/colors";

function Input({ name, type, placeholder, value, onChange }) {
  return (
    <StyledInput
      name={name}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target)}
    />
  );
}

export default Input;

const StyledInput = styled.input`
  width: 260px;
  height: 40px;
  font-family: 'Roboto';
  font-size: 16px;
  background-color: transparent;
  outline: none;
  border: 1px solid ${colors.blue1};
  border-radius: 8px;
  padding: 8px 16px;
  line-height: 24px;
  color: ${colors.gray2};

  &:focus{
    box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  }

  &::placeholder {
    font-family: 'Roboto';
    color: ${colors.gray4};
  }
`;
