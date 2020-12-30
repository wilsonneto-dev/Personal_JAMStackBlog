import { render, screen } from '@testing-library/react';

import SocialIcon from '.';

describe('<SocialIcon />', () => {
  it('should render the heading', () => {
    const { container } = render(<SocialIcon />);

    expect(screen.getByRole('heading', { name: /SocialIcon/i })).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
