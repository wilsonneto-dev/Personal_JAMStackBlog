import { Story, Meta } from '@storybook/react/types-6-0';
import DefaultLayout from '.';

export default {
  title: 'Layout/Default',
  component: DefaultLayout
} as Meta;

export const Default: Story = () => (
  <DefaultLayout>
    <main>
      <p>A simple children test</p>
    </main>
  </DefaultLayout>
);
