// Import pages
import { ProductPreviewPages } from "./pages/productPreview";

// Import custom modules
import { openHindiPage, openTamilPage, openTeluguPage } from "./util/common.util";

const productPreviewPages = new ProductPreviewPages();

describe("Magazines & Product Preview", () => {
  describe("yogoda-satsanga-magazine", () => {
    beforeEach(() => {
      cy.visit("spiritual/yogoda-satsanga-magazine");
    });

    it("Tab1 >> Yogoda Satsanga Magazine should have new link and give 200 OK status", () => {
      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("HINDI - Tab1 >> Yogoda Satsanga Magazine should have new link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("TAMIL - Tab1 >> Yogoda Satsanga Magazine should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("TELUGU - Tab1 >> Yogoda Satsanga Magazine should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });
  });
});
