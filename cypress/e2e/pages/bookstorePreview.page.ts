// Import custom config
import { TEST_CONFIG } from "../config";

// Import custom modules
import { captureSreenshot } from "../util/common.util";

export class BookstorePreviewPages {
  
  btnLookInside = 'body > div.elementor.elementor-183744.elementor-location-single.post-183040.product.type-product.status-publish.has-post-thumbnail.product_cat-magazine.product_shipping_class-free-shipping.pa_product-language-product-language-bengali.pa_product-language-product-language-english.pa_product-language-product-language-hindi.product-template-type-product-template-type-variable.first.instock.taxable.shipping-taxable.purchasable.product-type-variable.has-default-attributes.product > section.elementor-section.elementor-top-section.elementor-element.elementor-element-aaefea4.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-837ac8b > div > div.elementor-element.elementor-element-377c090.yss_noboxshadow.jedv-enabled--yes.elementor-widget.elementor-widget-text-editor > div > div > div > div > div > div > a';
  
  btnLookInsideForBooks = 'a[href$=".pdf"]';

  clickEnglishLanguage() {
    cy.get(TEST_CONFIG.bookstorePreview.buttonEnglish).click();
  }
  
  clickHindiLanguage() {
    cy.get(TEST_CONFIG.bookstorePreview.buttonHindi).click();
  }
  
  clickBengaliLanguage() {
    cy.get(TEST_CONFIG.bookstorePreview.buttonBengali).click();
  }  

  validateNewlinkAndStatusCode200AfterClickScreenshot(selector: string) {
    captureSreenshot(1000);

    //Check if href contains new link
    this.checkHrefForNewLink(selector);

    //Check if new link is giving 200 OK response code
    this.checkStatus200ForNewLink(selector);
  }
  

  checkHrefForNewLink(selector: string) {
    cy.get(selector)
      .should("have.attr", "href")
      .and("include", TEST_CONFIG.bookstorePreview.link);
  }

  checkStatus200ForNewLink(selector: string) {
    cy.get(selector).then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);

      cy.log(`3DIssue link: ${link.prop("href")}`);

      //Open this new link and take screenshot
      // if (!TEST_CONFIG.bookstorePreview.skipOpenPDFAndTakeScreenshot){
      //   this.openPDFAndTakeScreenshot(link);
      // }
    });
  }

  openPDFAndTakeScreenshot(link: JQuery<Element>) {
    // cy.visit(link.prop("href")).wait(3000).screenshot(`3DIssue: ${Cypress.currentTest.title}`,{ overwrite: true });

    cy.visit(link.prop("href"))
      .get(".a44")
      .wait(TEST_CONFIG.waitForScreenshot)
      .screenshot();
  }

  validateNewlinkAndStatusCode200ForBooks(selector: string) {
    captureSreenshot();

    //Check if href contains new link
    this.checkHrefForNewLink(selector);

    //Check if new link is giving 200 OK response code
    this.checkStatus200ForNewLink(selector);
  }
}
