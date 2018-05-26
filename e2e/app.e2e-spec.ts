import { CarWashPage } from './app.po';

describe('car-wash App', () => {
  let page: CarWashPage;

  beforeEach(() => {
    page = new CarWashPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
