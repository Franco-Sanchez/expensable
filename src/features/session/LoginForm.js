import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory } from "react-router";
import FormField from "../../components/form/FormField";
import { ButtonFill } from "../../components/UI/Buttons";
import { fetchLogin } from "./sessionSlice";
import styled from '@emotion/styled';

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const token = useSelector((state) => state.session.token);
  const dispatch = useDispatch();
  const history = useHistory();

  const { email, password } = formData;

  const handleChange = ({ name, value }) =>
    setFormData({ ...formData, [name]: value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchLogin({ formData }))
  };

  if (token) {
    sessionStorage.setItem("token", token);
    return <Redirect to="/expenses" />;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormField
        label = "Email"
        name="email"
        type="email"
        placeholder="somebody@mail.com"
        value={email}
        onChange={handleChange}
      />
      <FormField
        label = "Password"
        name="password"
        type="password"
        placeholder="********"
        value={password}
        onChange={handleChange}
      />
      <ButtonFill>Login</ButtonFill>
    </Form>
  );
}

export default LoginForm;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  align-items: center;
`