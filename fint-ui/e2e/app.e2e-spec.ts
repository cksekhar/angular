import { NgGuiPage } from './app.po';

describe('ng-gui App', function() {
  let page: NgGuiPage;

  beforeEach(() => {
    page = new NgGuiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
