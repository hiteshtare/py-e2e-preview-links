// Import pages
import { BookstorePreviewPages } from "./pages/bookstorePreview.page";

// Import custom modules
const bookstorePreviewPages = new BookstorePreviewPages();

//Import test data for Books
const testDataForAudio = require("../fixtures/imageTest.json");

describe.only("Image Test ", () => {
  describe("image: Dynamic link test", () => {
    testDataForAudio.forEach((testCase: any, index: number) => {
      it(`#${index+1} Image with Title:${testCase['Post Title']} should have new Preview link and give 200 OK status`, () => {
        cy.request("HEAD", `${testCase['Featured Image (URL)']}`).its("status").should("eq", 200);
        
        cy.log(`#${index+1} Image with Title: ${testCase['Post Title']}`);
      });
    });
  });
});
