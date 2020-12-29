import Link from 'next/link';
import IArticle from 'models/interfaces/IArticle';

import * as S from './styles';

export type IArticleListItem = Pick<
  IArticle,
  'thumbURL' | 'title' | 'description' | 'author' | 'datetime' | 'datetext'
>;

const ArticleListItem = ({
  thumbURL,
  title,
  description,
  author,
  datetext,
  datetime
}: IArticleListItem) => (
  <S.Article>
    <header>
      <Link href="/articles/[category]/[slug]" as="/articles/react/test01">
        <a>
          <img src={thumbURL} />
        </a>
      </Link>
      <Link href="/articles/[category]/[slug]" as="/articles/react/test01">
        <a>
          <h1>{title}</h1>
        </a>
      </Link>
    </header>
    <p>
      <Link href="/articles/[category]/[slug]" as="/articles/react/test01">
        <a>{description}</a>
      </Link>
    </p>
    <footer>
      Por <strong>{author}</strong> em{' '}
      <time dateTime={datetime}>{datetext}</time>
    </footer>
  </S.Article>
);

export default ArticleListItem;
