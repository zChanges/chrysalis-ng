import { ChrysalisNgPage } from './app.po';

describe('chrysalis-ng App', () => {
  let page: ChrysalisNgPage;

  beforeEach(() => {
    page = new ChrysalisNgPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
