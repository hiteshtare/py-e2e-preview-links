// Import pages
import { BookstorePreviewPages } from "./pages/bookstorePreview.page";

// Import custom modules
const bookstorePreviewPages = new BookstorePreviewPages();

//Import test data for Books
const testData = require("../fixtures/bookstore_book.json");

describe("Bookstore", () => {
  describe.skip("magazine:Subscription", () => {
    beforeEach(() => {
      cy.visit("product/yogoda-satsanga-magazine-subscription");
    });

    it("Yogoda Satsanga Magazine Subscription should have new Preview link and give 200 OK status", () => {
      bookstorePreviewPages.validateNewlinkAndStatusCode200ForBooks(
        bookstorePreviewPages.btnLookInside
      );
    });

    it("HINDI - Yogoda Satsanga Magazine Subscription should have new Preview link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickHindiLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInside
      );
    });

    it("BENGALI - Yogoda Satsanga Magazine Subscription should have new Preview link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickBengaliLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInside
      );
    });
  });

  describe("Dynamic data test for Books", () => {
    testData.forEach((testCase: any) => {
      let pattern = /-\d+$/;

      const isMatch = pattern.test(testCase.post_name);
      console.debug(`Postname: ${testCase.post_name}`);

      //To check if match is true skip else open the page and run tests
      if (!isMatch) {

        it(`Book with Title:${testCase.post_title} should have new Preview link and give 200 OK status`, () => {
          cy.visit(`product/${testCase.post_name}`);

          cy.log(`Book with Postname: ${testCase.post_name}`);

          bookstorePreviewPages.validateNewlinkAndStatusCode200ForBooks(
            bookstorePreviewPages.btnLookInsideForBooks
          );
        });
      }
    });
  });
});
