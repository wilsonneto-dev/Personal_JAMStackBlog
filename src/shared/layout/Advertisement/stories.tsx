import { Story, Meta } from '@storybook/react/types-6-0';
import Advertisement from '.';

const Template: Story = (args) => <Advertisement {...args} />;

export default {
  title: 'Layout/Advertisement',
  component: Advertisement
} as Meta;

export const Default = Template.bind({});
