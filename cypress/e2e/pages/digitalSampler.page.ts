// Import custom config
import { TEST_CONFIG } from "../config";

export class DigitalSamplerPages {
  btn6SpirituallyRevolutionaryIdeas =
    ".elementor-element-ff6504f > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > :nth-child(3) > a";
  btnYSSLessons = ".elementor-button.elementor-button-link.elementor-size-sm";

  //Second Tab
  btnSecondTab = "#samplearticles";
  btnTab2ReadThisSample =
    ".elementor-element-e50625e > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button";
  
  //Other 6 magazine links:
  btnTab2AreWeReallyEnteringaBetterAge = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-2b34f0f.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-514222e > div > div.elementor-element.elementor-element-b1cbdc3.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2CouragetoFaceOurFears = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-2b34f0f.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-1907ebe > div > div.elementor-element.elementor-element-366a0c6.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2YogaandtheEmotions = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-2b34f0f.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-6a12445 > div > div.elementor-element.elementor-element-8ee2b27.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2TheYogaSadhana  = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7d696bc.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-afef2b3 > div > div.elementor-element.elementor-element-bfe478d.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2PurchasingEternity = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7d696bc.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-54cc0e8 > div > div.elementor-element.elementor-element-a4abb29.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  btnTab2PractisingtheDivinePresence = "#samplearticles-tab > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-7d696bc.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div.elementor-column.elementor-col-25.elementor-top-column.elementor-element.elementor-element-b9e0629 > div > div.elementor-element.elementor-element-d248fa7.elementor-flip-box--effect-fade.elementor-widget.elementor-widget-flip-box > div > div > a";
  //Second Tab

  validateNewlinkAndStatusCode200(selector: string) {
    // cy.screenshot(`Page: ${Cypress.currentTest.titlePath[0]} >> ${Cypress.currentTest.titlePath[1]}`,{ overwrite: true, capture:"viewport" });
    cy.screenshot({ capture: "viewport" });

    //Check if href contains new link
    this.checkHrefForNewLink(selector);

    //Check if new link is giving 200 OK response code
    this.checkStatus200ForNewLink(selector);
  }

  validateNewlinkAndStatusCode200woScreenshot(selector: string) {
    // cy.screenshot({capture:"viewport" });

    //Check if href contains new link
    this.checkHrefForNewLink(selector);

    //Check if new link is giving 200 OK response code
    this.checkStatus200ForNewLink(selector);
  }

  clickSecondTabAndValidateAllMagazineNewLinksAndStatusCode200woScreenshot() { 
    //Select second Tab: A sampling of articles
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2ReadThisSample
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    //Other 6 magazine links:
    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2AreWeReallyEnteringaBetterAge
    );
    
    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2CouragetoFaceOurFears
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2YogaandtheEmotions
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2TheYogaSadhana
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();

    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2PurchasingEternity
    );

    //Go back and again Select second Tab: A sampling of articles
    cy.go('back');
    this.clickOnSecondTab();
    
    this.validateNewlinkAndStatusCode200woScreenshot(
      this.btnTab2PractisingtheDivinePresence
    );
    //Other 6 magazine links:
  }

  checkHrefForNewLink(selector: string) {
    cy.get(selector)
      .should("have.attr", "href")
      .and("include", TEST_CONFIG.digitalSampler.link);
  }

  checkStatus200ForNewLink(selector: string) {
    cy.get(selector).then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);

      cy.log(`3DIssue link: ${link.prop("href")}`);

      //Open this new link and take screenshot
      if (!TEST_CONFIG.digitalSampler.skipOpen3DIssueAndTakeScreenshot) {
        this.open3DIssueAndTakeScreenshot(link);
      }
    });
  }

  open3DIssueAndTakeScreenshot(link: JQuery<Element>) {
    // cy.visit(link.prop("href")).wait(3000).screenshot(`3DIssue: ${Cypress.currentTest.title}`,{ overwrite: true });

    cy.visit(link.prop("href"))
      .get(".a44")
      .wait(TEST_CONFIG.digitalSampler.waitForScreenshot)
      .screenshot();
  }

  clickOnSecondTab() {
    cy.get(this.btnSecondTab).click();
  }
}
