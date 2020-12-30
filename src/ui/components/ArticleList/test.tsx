import { renderWithTheme } from '../../../../.jest/test-utils';
import ArticleList from 'ui/components/ArticleList';

describe('ArticleListItem', () => {
  it('should render the children', () => {
    renderWithTheme(
      <ArticleList>
        <span test-id="children">just a test</span>
      </ArticleList>
    );
  });
});
