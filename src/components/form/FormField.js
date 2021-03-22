import styled from '@emotion/styled';
import Input from './Input';
import { ContentS } from '../UI/texts/Content';

function FormField( { label, name, type, placeholder, value, onChange  } ) {
  return (
    <StyledContainer>
      <StyledLabel>{label}</StyledLabel>
      <Input 
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </StyledContainer>
  )
}

export default FormField;

const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`

const StyledLabel = ContentS.withComponent('label');