import { Meta } from '@storybook/react/types-6-0';
import React, { Fragment } from 'react';
import ArticleList from '.';
import ArticleListItem from '../ArticleListItem';

import { fakeData } from './fakeData';

export default {
  title: 'Articles/ArticleList',
  component: ArticleList
} as Meta;

export const Default = () => (
  <ArticleList>
    {fakeData.map((article) => (
      <Fragment key={article.id}>
        <ArticleListItem {...article} />
      </Fragment>
    ))}
  </ArticleList>
);

export const WithOneItem = () => (
  <ArticleList>
    {fakeData.slice(0, 1).map((article) => (
      <Fragment key={article.id}>
        <ArticleListItem {...article} />
      </Fragment>
    ))}
  </ArticleList>
);
