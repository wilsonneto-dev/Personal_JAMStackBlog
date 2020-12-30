import { Story, Meta } from '@storybook/react/types-6-0';
import SocialIcon, { ISocialIconProps } from '.';

export default {
  title: 'SocialIcon',
  component: SocialIcon
} as Meta;

export const Default: Story<ISocialIconProps> = (args) => (
  <SocialIcon {...args} />
);
