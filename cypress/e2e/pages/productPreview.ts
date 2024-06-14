export class ProductPreviewPages {
  oldLink = "https://yssofindia.org/wp-content/uploads/preview/";
  newLink = "https://wsfb.yssofindia.org/product-preview/";

  //First Tab
  btnYSSMagazineTab1 =
    ".elementor-element-90984c6 > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > .elementor-button-wrapper > .elementor-button";
  //First Tab

  validateNewlinkAndStatusCode200(selector: string) {
    // cy.screenshot(`Page: ${Cypress.currentTest.titlePath[0]} >> ${Cypress.currentTest.titlePath[1]}`,{ overwrite: true, capture:"viewport" });
    cy.screenshot({ capture: "viewport" });

    //Check if href contains new link
    this.checkHrefForNewLink(selector);

    //Check if new link is giving 200 OK response code
    this.checkStatus200ForNewLink(selector);
  }

  checkHrefForNewLink(selector: string) {
    cy.get(selector).should("have.attr", "href").and("include", this.newLink);
  }

  checkStatus200ForNewLink(selector: string) {
    cy.get(selector).then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);

      cy.log("3DIssue link: ", link.prop("href"));

      //Open this new link and take screenshot
      this.open3DIssueAndTakeScreenshot(link);
    });
  }

  open3DIssueAndTakeScreenshot(link: JQuery<Element>) {
    // cy.visit(link.prop("href")).wait(3000).screenshot(`3DIssue: ${Cypress.currentTest.title}`,{ overwrite: true });

    cy.visit(link.prop("href")).get(".a44").wait(2000).screenshot();
  }
}
