import * as S from './styles';

export interface IAuthorSocialLinkProps {
  type: 'linkedin' | 'twitter' | 'instagram' | 'github' | 'youtube';
  link: string;
}

export interface IArticleAuthorProps {
  name: string;
  role: string;
  avatar: string;
  socialLinks?: Array<IAuthorSocialLinkProps>;
}

const ArticleAuthor = ({
  name,
  role,
  avatar,
  socialLinks = []
}: IArticleAuthorProps) => (
  <S.Wrapper>
    <S.Avatar>
      <img src={avatar} alt="Autor" />
    </S.Avatar>
    <S.Infos>
      <strong>{name}</strong>
      <br />
      {role}
    </S.Infos>
    <S.SocialLinksSection>
      {socialLinks.map(({ type, link }) => (
        <S.SocialIcon
          key={`${type}:${link}`}
          target="_blank"
          href="/"
          title={`${name} - ${type}`}
        >
          <img src={`/img/ic-${type}.svg`} alt={`${name} - ${type}`} />
          {type}
        </S.SocialIcon>
      ))}
    </S.SocialLinksSection>
  </S.Wrapper>
);

export default ArticleAuthor;
