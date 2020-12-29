import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../../.jest/test-utils';

import Footer from '.';

describe('<Footer />', () => {
  it('should render the logo', () => {
    renderWithTheme(<Footer />);
    expect(screen.getByRole('logo')).toBeInTheDocument();
  });

  it('should render social links', () => {
    renderWithTheme(<Footer />);
    expect(screen.getAllByRole('social-link').length).toBeGreaterThan(0);
  });

  it('should looks like the snapshot', () => {
    const { container } = renderWithTheme(<Footer />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
