import { render, screen } from '@testing-library/react';
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
  it('should render the heading', () => {
    const { container } = renderWithTheme(<ArticleListItem {...exampleData} />);

    expect(screen.getByText('teste de artigo 01')).toBeInTheDocument();
    expect(screen.getByRole('heading')).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });
});
