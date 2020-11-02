import { render, screen } from '@testing-library/react';

import Advertisement from '.';

describe('<Advertisement />', () => {
  it('should render the heading', () => {
    const { container } = render(<Advertisement />);

    expect(
      screen.getByRole('heading', { name: /Advertisement/i })
    ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
