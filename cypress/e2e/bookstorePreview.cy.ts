// Import pages
import { BookstorePreviewPages } from "./pages/bookstorePreview";

// Import custom modules
const bookstorePreviewPages = new BookstorePreviewPages();

describe("Bookstore", () => {
  describe("magazine:Subscription", () => {
    beforeEach(() => {
      cy.visit("product/yogoda-satsanga-magazine-subscription");
    });

    it("Yogoda Satsanga Magazine Subscription should have new link and give 200 OK status", () => {
      bookstorePreviewPages.validateNewlinkAndStatusCode200(
        bookstorePreviewPages.btnLookInside
      );
    });

    it("HINDI - Yogoda Satsanga Magazine Subscription should have new link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickHindiLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInside
      );
    });

    it("BENGALI - Yogoda Satsanga Magazine Subscription should have new link and give 200 OK status", () => {
      //Select Hindi Language
      bookstorePreviewPages.clickBengaliLanguage();

      bookstorePreviewPages.validateNewlinkAndStatusCode200AfterClickScreenshot(
        bookstorePreviewPages.btnLookInside
      );
    });
  });
});
