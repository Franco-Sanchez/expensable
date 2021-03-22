import { Content } from '../components/UI/texts/Content';
import { Heading2 } from '../components/UI/texts/Headings';
import LoginForm from '../features/session/LoginForm';

function Login() {
  return (
    <div>
      <Heading2>Welcome to Expensable</Heading2>
      <Content>Please login to start using the app</Content>
      <LoginForm />
    </div>
  )
}

export default Login;