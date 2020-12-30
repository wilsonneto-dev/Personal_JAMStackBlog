import { Fragment } from 'react';

import ArticleList from 'ui/components/ArticleList';
import ArticleListItem from 'ui/components/ArticleListItem';
import { fakeData } from 'ui/components/ArticleList/data.fake';

const Home = () => (
  <ArticleList>
    {fakeData.map((article) => (
      <Fragment key={article.id}>
        <ArticleListItem {...article} />
      </Fragment>
    ))}
  </ArticleList>
);

export default Home;
