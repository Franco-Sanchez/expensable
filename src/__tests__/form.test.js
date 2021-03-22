import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../pages/Login';
import { Provider } from 'react-redux';

test('render form correctly', () => {
  const { container } = render(<Login />)
  console.log(container);
  expect()
})