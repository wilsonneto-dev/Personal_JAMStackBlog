import { Fragment } from 'react';

import ArticleList from 'shared/components/ArticleList';
import ArticleListItem from 'shared/components/ArticleListItem';
import { fakeData } from 'shared/components/ArticleList/fakeData';

export default function Home() {
  return (
    <ArticleList>
      {fakeData.map((article) => (
        <Fragment key={article.id}>
          <ArticleListItem {...article} />
        </Fragment>
      ))}
    </ArticleList>
  );
}
