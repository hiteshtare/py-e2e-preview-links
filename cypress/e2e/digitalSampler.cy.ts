import { DigitalSamplerPages } from "./pages/digitalSampler";

const digitalSamplerPages = new DigitalSamplerPages();

describe("Flipbooks / Digital Samplers", () => {
  //test.yssofindia.org/yss-lessons

  https: describe("yss-lessons", () => {
    beforeEach(() => {
      cy.visit("yss-lessons");
    });

    it("should have new link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });

    it("HINDI - should have new link and give 200 OK status", () => {
      //Navigate to Hindi Page
      digitalSamplerPages.clickHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });

    it("TAMIL - should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      digitalSamplerPages.clickTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });

    it("TELUGU - should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      digitalSamplerPages.clickTeluguPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });
  });

  describe("blog/6-spiritually-revolutionary-ideas", () => {
    beforeEach(() => {
      cy.visit(
        "blog/6-spiritually-revolutionary-ideas-that-paramahansa-yogananda-brought-to-the-world-by-swami-chidananda-giri"
      );
    });

    it("should have new link and give 200 OK status", () => {
      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });

    it("HINDI - should have new link and give 200 OK status", () => {
      //Navigate to Hindi Page
      digitalSamplerPages.clickHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });

    it("TAMIL - should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      digitalSamplerPages.clickTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });

    it("TELUGU - should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      digitalSamplerPages.clickTeluguPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });
  });

  describe("yogoda-satsanga-magazine", () => {
    beforeEach(() => {
      cy.visit("spiritual/yogoda-satsanga-magazine");
    });

    it("Tab2 >> A sampling of articles should have new link and give 200 OK status", () => {
      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickOnSecondTab();

      digitalSamplerPages.validateNewlinkAndStatusCode200woScreenshot(
        digitalSamplerPages.btnTab2ReadThisSample
      );
    });

    it("HINDI - Tab2 >> A sampling of articles should have new link and give 200 OK status", () => {
      //Navigate to Hindi Page
      digitalSamplerPages.clickHindiPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickOnSecondTab();

      digitalSamplerPages.validateNewlinkAndStatusCode200woScreenshot(
        digitalSamplerPages.btnTab2ReadThisSample
      );
    });

    it("TAMIL - Tab2 >> A sampling of articles should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      digitalSamplerPages.clickTamilPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickOnSecondTab();

      digitalSamplerPages.validateNewlinkAndStatusCode200woScreenshot(
        digitalSamplerPages.btnTab2ReadThisSample
      );
    });

    it("TELUGU - Tab2 >> A sampling of articles should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      digitalSamplerPages.clickTeluguPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickOnSecondTab();

      digitalSamplerPages.validateNewlinkAndStatusCode200woScreenshot(
        digitalSamplerPages.btnTab2ReadThisSample
      );
    });
  });
});
