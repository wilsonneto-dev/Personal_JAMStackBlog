import { IAuthorSocialLinkProps } from '../ArticleAuthor';
import * as S from './styles';

export interface IArticleProps {
  title: string;
  date: Date;
  authorName: string;
  authorRole: string;
  authorAvatar: string;
  authorSocialLinks: Array<IAuthorSocialLinkProps>;
  markdown: string;
}

const Article = ({
  title,
  date,
  markdown,
  authorAvatar,
  authorName,
  authorRole,
  authorSocialLinks
}: IArticleProps) => (
  <S.Wrapper>
    <h1>Article test</h1>
  </S.Wrapper>
);

export default Article;
