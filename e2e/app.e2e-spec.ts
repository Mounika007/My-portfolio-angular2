import { ProtfolioPage } from './app.po';

describe('protfolio App', () => {
  let page: ProtfolioPage;

  beforeEach(() => {
    page = new ProtfolioPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
