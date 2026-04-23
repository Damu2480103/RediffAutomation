import NewsPage from '../pages/NewsPage';

describe("Rediff News - Test Cases", () => {

  beforeEach(() => {
    cy.visit('https://www.rediff.com/news');
  });

  it("TC01: should load the Rediff News page", () => {
    NewsPage.verifyNewsPageLoaded();
  });

  it("TC02: should display the page body on News page", () => {
    NewsPage.verifyPageBodyLoaded();
  });

  it("TC03: should have a valid page title", () => {
    NewsPage.verifyPageTitleNotEmpty();
  });

  it("TC04: should display a news heading on the page", () => {
    NewsPage.verifyNewsHeadingExists();
  });

  it("TC05: should have news links on the page", () => {
    NewsPage.verifyNewsLinksExist();
  });

  it("TC06: should display images on the news page", () => {
    NewsPage.verifyImagesVisible();
  });

  it("TC07: should display navigation bar on the page", () => {
    NewsPage.verifyNavBarVisible();
  });

  it("TC08: should have footer on the news page", () => {
    NewsPage.verifyFooterVisible();
  });

});