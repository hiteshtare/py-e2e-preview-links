import { DigitalSamplerPages } from "./pages/digitalSampler";

const digitalSamplerPages = new DigitalSamplerPages();

describe("Flipbooks / Digital Samplers", () => {
  describe("1.6-spiritually-revolutionary-ideas", () => {
    beforeEach(() => {
      cy.visit(
        "blog/6-spiritually-revolutionary-ideas-that-paramahansa-yogananda-brought-to-the-world-by-swami-chidananda-giri"
      );
    });

    it("should have new link and give 200 OK status", () => {
      //Check if href contains new link
      digitalSamplerPages.checkHrefForNewLink(
        digitalSamplerPages.anchorIntroduction
      );

      //Check if new link is giving 200 OK response code
      digitalSamplerPages.checkStatus200ForNewLink(
        digitalSamplerPages.anchorIntroduction
      );
    });

    it("HINDI - should have new link and give 200 OK status", () => {
      //Navigate to Hindi Page
      digitalSamplerPages.clickHindiPage();

      //Check if href contains new link
      digitalSamplerPages.checkHrefForNewLink(
        digitalSamplerPages.anchorIntroduction
      );

      //Check if new link is giving 200 OK response code
      digitalSamplerPages.checkStatus200ForNewLink(
        digitalSamplerPages.anchorIntroduction
      );
    });

    it("TAMIL - should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      digitalSamplerPages.clickTamilPage();

      //Check if href contains new link
      digitalSamplerPages.checkHrefForNewLink(
        digitalSamplerPages.anchorIntroduction
      );

      //Check if new link is giving 200 OK response code
      digitalSamplerPages.checkStatus200ForNewLink(
        digitalSamplerPages.anchorIntroduction
      );
    });

    it("TELUGU - should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      digitalSamplerPages.clickTeluguPage();

      //Check if href contains new link
      digitalSamplerPages.checkHrefForNewLink(
        digitalSamplerPages.anchorIntroduction
      );

      //Check if new link is giving 200 OK response code
      digitalSamplerPages.checkStatus200ForNewLink(
        digitalSamplerPages.anchorIntroduction
      );
    });
  });
});
