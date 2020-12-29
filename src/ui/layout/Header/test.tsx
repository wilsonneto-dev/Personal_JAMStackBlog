import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../../.jest/test-utils';
import Header from '.';
// import { getByRole } from '@testing-library/react';

describe('<Header />', () => {
  it('should render the logo', () => {
    renderWithTheme(<Header />);
    expect(screen.getByRole('logo')).toBeInTheDocument();
  });

  it('should render social links', () => {
    renderWithTheme(<Header />);
    expect(screen.getAllByRole('social-link').length).toBeGreaterThan(0);
  });
});
