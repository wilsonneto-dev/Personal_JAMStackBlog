import React, { Fragment } from 'react';
import ArticleListItem from '../ArticleListItem';

import * as S from './styles';

const fakeData = [
  {
    id: 1,
    thumbURL: '/img/350x160.png',
    title: 'Atualização aplicações React Native para a última versao',
    description:
      'Atualização aplicações React Native para a última versao Atualização aplicações React Atualização aplicações React Native para a última versao Atualização aplicações React',
    author: 'Wilson Neto',
    datetime: '2020-11-01 20:00',
    datetext: '01/11/2020'
  },
  {
    id: 2,
    thumbURL: '/img/350x160.png',
    title: 'Atualização aplicações React Native para a última versao',
    description:
      'Atualização aplicações React Native para a última versao Atualização aplicações React',
    author: 'Wilson Neto',
    datetime: '2020-11-01 20:00',
    datetext: '01/11/2020'
  },
  {
    id: 3,
    thumbURL: '/img/350x160.png',
    title: 'Atualização aplicações React Native para a última versao',
    description:
      'Atualização aplicações React Native para a última versao Atualização aplicações React',
    author: 'Wilson Neto',
    datetime: '2020-11-01 20:00',
    datetext: '01/11/2020'
  },
  {
    id: 4,
    thumbURL: '/img/350x160.png',
    title: 'Atualização aplicações React Native para a última versao',
    description:
      'Atualização aplicações React Native para a última versao Atualização aplicações React',
    author: 'Wilson Neto',
    datetime: '2020-11-01 20:00',
    datetext: '01/11/2020'
  },
  {
    id: 5,
    thumbURL: '/img/350x160.png',
    title: 'Atualização aplicações React Native para a última versao',
    description:
      'Atualização aplicações React Native para a última versao Atualização aplicações React Atualização aplicações React Native para a última versao Atualização aplicações React',
    author: 'Wilson Neto',
    datetime: '2020-11-01 20:00',
    datetext: '01/11/2020'
  }
];

const ArticleList = () => (
  <S.Wrapper>
    {fakeData.map((article) => (
      <Fragment key={article.id}>
        <ArticleListItem {...article} />
      </Fragment>
    ))}
  </S.Wrapper>
);

export default ArticleList;
