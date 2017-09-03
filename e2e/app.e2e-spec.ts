import { MasterClassesPage } from './app.po';

describe('master-classes App', () => {
  let page: MasterClassesPage;

  beforeEach(() => {
    page = new MasterClassesPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
