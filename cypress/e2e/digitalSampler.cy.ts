// Import pages
import { DigitalSamplerPages } from "./pages/digitalSampler.page";

// Import custom modules
import { openHindiPage, openTamilPage, openTeluguPage } from "./util/common.util";

const digitalSamplerPages = new DigitalSamplerPages();

describe.skip("Flipbooks / Digital Samplers", () => {
  describe("yss-lessons", () => {
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
      openHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });

    it("TAMIL - should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btnYSSLessons
      );
    });

    it("TELUGU - should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

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
      openHindiPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });

    it("TAMIL - should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });

    it("TELUGU - should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      digitalSamplerPages.validateNewlinkAndStatusCode200(
        digitalSamplerPages.btn6SpirituallyRevolutionaryIdeas
      );
    });
  });

  describe("yogoda-satsanga-magazine", () => {
    beforeEach(() => {
      cy.visit("spiritual/yogoda-satsanga-magazine");
    });

    it("Tab2 >> A sampling of articles:Read this sample and other 6 Magazine links should have new link and give 200 OK status", () => {
      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot();
    });

    it("HINDI - Tab2 >> A sampling of articles:Read this sample and other 6 Magazine links should have new link and give 200 OK status", () => {
      //Navigate to Hindi Page
      openHindiPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot();
    });

    it("TAMIL - Tab2 >> A sampling of articles:Read this sample and other 6 Magazine links should have new link and give 200 OK status", () => {
      //Navigate to Tamil Page
      openTamilPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot();
    });

    it("TELUGU - Tab2 >> A sampling of articles:Read this sample and other 6 Magazine links should have new link and give 200 OK status", () => {
      //Navigate to Telugu Page
      openTeluguPage();

      //Select second Tab: A sampling of articles
      digitalSamplerPages.clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot();
    });
  });
});
