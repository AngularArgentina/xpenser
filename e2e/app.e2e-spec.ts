import { XpenserPage } from './app.po';

describe('xpenser App', () => {
  let page: XpenserPage;

  beforeEach(() => {
    page = new XpenserPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
