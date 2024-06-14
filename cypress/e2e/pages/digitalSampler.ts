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

  checkHrefForNewLink(selector: string) {
    cy.get(selector)
      .should("have.attr", "href")
      .and("include", TEST_CONFIG.digitalSampler.link);
  }

  checkStatus200ForNewLink(selector: string) {
    cy.get(selector).then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);

      cy.log("3DIssue link: ", link.prop("href"));

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
