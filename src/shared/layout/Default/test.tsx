import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../../.jest/test-utils';
import DefaultLayout from '.';

describe('<DefaultLayout />', () => {
  it('should render the children', () => {
    renderWithTheme(
      <DefaultLayout>
        <main>testing this coomponent children</main>
      </DefaultLayout>
    );
    expect(screen.getByRole('main')).toBeInTheDocument();
    expect(screen.getByText('testing this coomponent children')).toBeTruthy();
  });

  it('should render the logo', () => {
    renderWithTheme(<DefaultLayout />);
    expect(screen.getAllByRole('logo').length).toBeGreaterThan(0);
  });

  it('should render social links', () => {
    renderWithTheme(<DefaultLayout />);
    expect(screen.getAllByRole('social-link').length).toBeGreaterThan(0);
  });

  it('should looks like the snapshot', () => {
    const { container } = renderWithTheme(
      <DefaultLayout>
        <main>testing this coomponent children</main>
      </DefaultLayout>
    );
    expect(container.firstChild).toMatchSnapshot();
  });
});
