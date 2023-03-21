import { render, screen } from '../../../utils/tests';
import { it } from 'vitest';
import Button from './Button';

it('should render with button default', () => {
  const text = 'teste';
  render(<Button>{text}</Button>);

  const component = screen.getByText(text);
  expect(component).toBeInTheDocument();
});
