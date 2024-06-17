// Import pages
import { BookstorePreviewPages } from "./pages/bookstorePreview.page";

// Import custom modules
const bookstorePreviewPages = new BookstorePreviewPages();

//Import test data for Books
const testDataForBooks = require("../fixtures/bookstore_book.json");
const testDataForAudio = require("../fixtures/bookstore_audio.json");

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

  describe("books: Dynamic data test", () => {
    testDataForBooks.forEach((testCase: any, index: number) => {
      let pattern = /-\d+$/;

      const isMatch = pattern.test(testCase.post_name);

      //To check if match is true skip else open the page and run tests
      if (!isMatch) {
        it(`#${index} Book with Title:${testCase.post_title} should have new Preview link and give 200 OK status`, () => {
          cy.visit(`product/${testCase.post_name}`);

          cy.log(`#${index} Book with postname: ${testCase.post_name}`);

          bookstorePreviewPages.validateNewlinkAndStatusCode200ForBooks(
            bookstorePreviewPages.btnLookInsideForBooks
          );
        });
      }
    });
  });

  describe.only("audio: Dynamic data test", () => {
    testDataForAudio.forEach((testCase: any, index: number) => {
      it(`#${index} Audio with Title:${testCase.post_title} should have new Preview link and give 200 OK status`, () => {
        cy.visit(`product/${testCase.post_name}`);

        cy.log(`#${index} Audio with postname: ${testCase.post_name}`);

        bookstorePreviewPages.validateNewlinkAndStatusCode200ForAudio(
          bookstorePreviewPages.btnForAudioPreview
        );
      });
    });
  });
});
