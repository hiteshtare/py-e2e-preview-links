import { ProductPreviewPages } from "./pages/productPreview";

const productPreviewPages = new ProductPreviewPages();

describe("Magazines & Product Preview", () => {
  https: describe("yogoda-satsanga-magazine", () => {
    beforeEach(() => {
      cy.visit("spiritual/yogoda-satsanga-magazine");
    });

    it("should have new link and give 200 OK status", () => {
      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("HINDI - should have new link and give 200 OK status", () => {
      //Navigate to Hindi Page
      productPreviewPages.clickHindiPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("TAMIL - should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      productPreviewPages.clickTamilPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });

    it("TELUGU - should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      productPreviewPages.clickTeluguPage();

      productPreviewPages.validateNewlinkAndStatusCode200(
        productPreviewPages.btnYSSMagazineTab1
      );
    });
  });
});
