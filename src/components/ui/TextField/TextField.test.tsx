import { render, screen } from '../../../utils/tests';
import { it } from 'vitest';
import TextField from './TextField';

it('should render text field default', () => {
  const label = 'teste';
  const { getByText } = render(<TextField label={label} />);

  expect(getByText(label)).toBeInTheDocument();
});
