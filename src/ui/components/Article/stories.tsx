import { Story, Meta } from '@storybook/react/types-6-0';
import Article from '.';

export default {
  title: 'Articles/Article',
  component: Article
} as Meta;

export const Default: Story = () => <Article />;
