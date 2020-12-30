import * as S from './styles';
import GithubIcon from './svgs/GithubIcon';

export enum SocialIconTypes {
  GITHUB = 'github',
  YOUTUBE = 'youtube',
  INSTAGRAM = 'instagram',
  LINKEDIN = 'linkedin'
}

export enum SocialiconThemes {
  LIGHT = 'light',
  DARK = 'dark'
}

export interface ISocialIconProps {
  type: SocialIconTypes;
  link?: string;
  theme: SocialiconThemes;
}

const SocialIcon = ({
  type,
  link,
  theme = SocialiconThemes.LIGHT
}: ISocialIconProps) => {
  return (
    <S.LinkWrapper themeColor={theme}>
      <GithubIcon />
    </S.LinkWrapper>
  );
};

export default SocialIcon;
