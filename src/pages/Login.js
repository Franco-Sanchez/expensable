import { Content } from '../components/UI/texts/Content';
import { Heading2 } from '../components/UI/texts/Headings';
import LoginForm from '../features/session/LoginForm';
import styled from '@emotion/styled';

function Login() {
  return (
    <StyledContainer>
      <Heading2>Welcome to Expensable</Heading2>
      <Content>Please login to start using the app</Content>
      <LoginForm />
    </StyledContainer>
  )
}

export default Login;

const StyledContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  padding: 32px 58px 0 58px;

  & h2 {
    text-align: center;
  }
`