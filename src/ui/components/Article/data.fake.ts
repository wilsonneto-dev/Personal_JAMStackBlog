import { IArticleProps } from '.';

const fakeData: IArticleProps = {
  title: 'Best Saas podcasts for bootstrapped (tech)? founders',
  date: new Date(2020, 6, 16),
  markdown: 'markup test',
  authorAvatar: 'https://avatars1.githubusercontent.com/u/20674439',
  authorName: 'Wilson Neto',
  authorRole: 'Engenheiro de Software',
  authorSocialLinks: [
    { type: 'linkedin', link: '#' },
    { type: 'github', link: '#' }
  ]
};

export default fakeData;
