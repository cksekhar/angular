import { AngUiPage } from './app.po';

describe('ang-ui App', function() {
  let page: AngUiPage;

  beforeEach(() => {
    page = new AngUiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
