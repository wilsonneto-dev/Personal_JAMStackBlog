import { screen } from '@testing-library/react';

import ArticleAuthor, { IArticleAuthorProps } from '.';
import { renderWithTheme } from '../../../../.jest/test-utils';

const exampleProps: IArticleAuthorProps = {
  name: 'Wilson Neto',
  avatar: 'https://avatars1.githubusercontent.com/u/20674439?s=460',
  role: 'Engenheiro de Software',
  socialLinks: [
    { link: '#', type: 'linkedin' },
    { link: '#', type: 'github' }
  ]
};

describe('<ArticleAuthor />', () => {
  it('should render correctly', () => {
    renderWithTheme(<ArticleAuthor {...exampleProps} />);

    const avatarImage = screen.getByRole('img', { name: /Autor/i });
    expect(avatarImage).toBeInTheDocument();
    expect(avatarImage).toHaveAttribute('src', exampleProps.avatar);

    expect(screen.getByText(exampleProps.name)).toBeInTheDocument();

    expect(screen.getByText(exampleProps.role)).toBeInTheDocument();

    const socialLinks = screen.queryAllByRole('link', { name: /link social/i });
    expect(socialLinks.length).toEqual(exampleProps.socialLinks?.length ?? 0);
  });

  it('should render no social links if not provided', () => {
    const examplePropsWithoutSocialLinks: IArticleAuthorProps = {
      name: exampleProps.name,
      avatar: exampleProps.avatar,
      role: exampleProps.role
    };

    renderWithTheme(<ArticleAuthor {...examplePropsWithoutSocialLinks} />);

    expect(
      screen.queryAllByRole('link', { name: /link social/i })
    ).not.toBeInTheDocument();
  });

  it('should render one social links when only one was provided', () => {
    const examplePropsWithoutSocialLinks: IArticleAuthorProps = {
      name: exampleProps.name,
      avatar: exampleProps.avatar,
      role: exampleProps.role,
      socialLinks: exampleProps.socialLinks?.slice(0, 1) ?? []
    };

    renderWithTheme(<ArticleAuthor {...examplePropsWithoutSocialLinks} />);

    expect(
      screen.queryAllByRole('link', { name: /link social/i }).length
    ).toEqual(1);
  });

  it('should match snapshot', () => {
    const { container } = renderWithTheme(<ArticleAuthor {...exampleProps} />);
    // expect(container.firstChild).toMatchSnapshot();
  });
});
