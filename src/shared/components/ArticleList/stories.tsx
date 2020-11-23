import { Story, Meta } from '@storybook/react/types-6-0';
import ArticleList from '.';
import ArticleListItem from '../ArticleListItem';

export default {
  title: 'Articles/ArticleList',
  component: ArticleList
} as Meta;

export const ListWithItems = () => <ArticleListItem />;

Default.args = {
  thumbURL: '/img/article-thumb.png',
  title: 'Atualização aplicações React Native para a última versao',
  description:
    'Atualização aplicações React Native para a última versao Atualização aplicações React',
  author: 'Wilson Neto',
  datetime: '2020-11-01 20:00',
  datetext: '01/11/2020'
};
