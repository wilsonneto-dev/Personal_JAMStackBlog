import { screen } from '@testing-library/react';

import { renderWithTheme } from '../../../../.jest/test-utils';
import Header from '.';

describe('<Header />', () => {
  // ve renderizar o logo com um link
  // deve renderizar os icones de redes sociais com links

  it('should render the heading', () => {
    const { container } = renderWithTheme(<Header />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
