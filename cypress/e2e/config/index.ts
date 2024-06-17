export const TEST_CONFIG = {
  //WPMLs
  buttonHindi: ".wpml-ls-item-hi",
  buttonTamil: ".wpml-ls-item-ta",
  buttonTelugu: ".wpml-ls-item-te",
  //WPMLs
  digitalSampler: {
    //old - "https://yssofindia.org/digitalSamplers/"
    link: "https://wsfb.yssofindia.org/digitalsamplers/",
    waitForScreenshot: 2000,
    skipOpen3DIssueAndTakeScreenshot: false,
  },
  productPreview: {
    //old - "https://yssofindia.org/wp-content/uploads/preview/"
    link: "https://wsfb.yssofindia.org/product-preview/" ,
    waitForScreenshot: 2000,
    skipOpen3DIssueAndTakeScreenshot: false,
  },
  bookstorePreview: {
    buttonEnglish: ":nth-child(1) > .value > .iconic-was-swatches > :nth-child(1) > .iconic-was-swatch",
    buttonHindi: ":nth-child(1) > .value > .iconic-was-swatches > :nth-child(2) > .iconic-was-swatch",
    buttonBengali: ":nth-child(1) > .value > .iconic-was-swatches > :nth-child(3) > .iconic-was-swatch",
    //old - "https://yssofindia.org/wp-content/uploads/preview/"
    link: "https://wsfb.yssofindia.org/product-preview/" ,
    waitForScreenshot: 2000,
    skipOpenPDFAndTakeScreenshot: false,
  } 
};
