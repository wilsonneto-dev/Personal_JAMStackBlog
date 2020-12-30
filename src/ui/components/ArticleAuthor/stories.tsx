import { Story, Meta } from '@storybook/react/types-6-0';
import ArticleAuthor, { IArticleAuthorProps } from '.';

const exampleProps: IArticleAuthorProps = {
  name: 'Wilson Neto',
  avatar: 'https://avatars1.githubusercontent.com/u/20674439?s=460',
  role: 'Engenheiro de Software',
  socialLinks: [
    { link: '#', type: 'linkedin' },
    { link: '#', type: 'github' }
  ]
};

export default {
  title: 'Articles/Article/ArticleAuthor',
  component: ArticleAuthor
} as Meta;

const Template: Story<IArticleAuthorProps> = (args) => (
  <ArticleAuthor {...args} />
);

export const Default = Template.bind({});
Default.args = exampleProps;
