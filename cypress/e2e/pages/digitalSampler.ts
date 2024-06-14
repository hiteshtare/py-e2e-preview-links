export class DigitalSamplerPages {

  oldLink = 'https://yssofindia.org/digitalSamplers/';
  newLink = 'https://wsfb.yssofindia.org/digitalsamplers/'

  anchorIntroduction = ".elementor-element-ff6504f > .elementor-container > .elementor-column > .elementor-widget-wrap > .elementor-element > .elementor-widget-container > :nth-child(3) > a";
  
  //WPMLs
  buttonHindi = ".wpml-ls-item-hi";
  buttonTamil = ".wpml-ls-item-ta";
  buttonTelugu = ".wpml-ls-item-te";

  checkHrefForNewLink(selector:string) { 
    cy.get(selector)
        .should("have.attr", "href")
        .and("include", this.newLink);
  }

  checkStatus200ForNewLink(selector:string) { 
    cy.get(selector).then((link) => {
      cy.request("HEAD", link.prop("href")).its("status").should("eq", 200);

      cy.log("3DIssue link: ", link.prop("href"));

      //Open this new link and take screenshot
      this.open3DIssueAndTakeScreenshot(link);
    });
  }

  open3DIssueAndTakeScreenshot(link: JQuery<Element>) { 
    cy.visit(link.prop('href')).wait(3000).screenshot({ overwrite: true });
  }

  clickHindiPage() {
    cy.get(this.buttonHindi).click();
  }

  clickTamilPage() {
    cy.get(this.buttonTamil).click();
  }

  clickTeluguPage() {
    cy.get(this.buttonTelugu).click();
  }
}
