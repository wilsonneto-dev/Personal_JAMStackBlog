import { Story, Meta } from '@storybook/react/types-6-0';
import ArticleListItem, { IArticleListItem } from '.';

const Template: Story<IArticleListItem> = (args) => (
  <ArticleListItem {...args} />
);

export default {
  title: 'Articles/ArticleListItem',
  component: ArticleListItem
} as Meta;

export const Default = Template.bind({});

Default.args = {
  thumbURL: 'https://source.unsplash.com/random/350x160',
  title: 'Atualização aplicações React Native para a última versao',
  description:
    'Atualização aplicações React Native para a última versao Atualização aplicações React',
  author: 'Wilson Neto',
  datetime: '2020-11-01 20:00',
  datetext: '01/11/2020'
};
