import {render, screen} from '@testing-library/react';
import WelcomeScreen from './WelcomeScreen';
import {BrowserRouter} from 'react-router-dom';

test('find some text', () => {
  render(<BrowserRouter><WelcomeScreen/></BrowserRouter>);
  expect(screen.getByText(/π/i)).toBeInTheDocument();
});
