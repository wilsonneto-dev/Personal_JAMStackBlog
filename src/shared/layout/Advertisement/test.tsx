import { render, screen } from '@testing-library/react';
import { renderWithTheme } from '../../../../.jest/test-utils';
import Advertisement from '.';

describe('<Advertisement />', () => {
  it('should render text passed by props', () => {
    renderWithTheme(<Advertisement text="a simple test" />);
    expect(screen.getByText('a simple test')).toBeInTheDocument();
  });

  it('should looks like the last snapshot', () => {
    const { container } = renderWithTheme(
      <Advertisement text="a simple test" />
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
