import { screen } from '@testing-library/react';
import { renderWithTheme } from '../../../../.jest/test-utils';

import ArticleListItem, { IArticleListItem } from '.';

const exampleData: IArticleListItem = {
  thumbURL: '/img/350x160.png',
  title: 'Atualização aplicações React Native para a última versao',
  description:
    'Atualização aplicações React Native para a última versao Atualização' +
    ' aplicações React Atualização aplicações React Native para a última' +
    ' versao Atualização aplicações React',
  author: 'Wilson Neto',
  datetime: '2020-11-01 20:00',
  datetext: '01/11/2020'
};

describe('<ArticleListItem />', () => {
  it('should render the heading, text and footer', () => {
    renderWithTheme(<ArticleListItem {...exampleData} />);

    expect(screen.getByText(exampleData.title)).toBeInTheDocument();

    expect(screen.getByRole('heading')).toBeInTheDocument();
    expect(screen.getAllByRole('link').length).toBeGreaterThan(0);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('should match the snapshot', () => {
    const { container } = renderWithTheme(<ArticleListItem {...exampleData} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
