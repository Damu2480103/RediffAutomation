import NewsPage from '../Pages/NewsPage';

describe.only("Rediff News - Test Cases", () => {

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

});