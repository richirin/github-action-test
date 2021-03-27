const { setHeadlessWhen } = require('@codeceptjs/configure');
require('dotenv').config()

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(true);

exports.config = {
  tests: './tests/*.js',
  output: './output',
  helpers: {
    Playwright: {
      url: process.env.BASE_URL,
      show: true,
      browser: 'chromium',
      waitForNavigation: 'networkidle0'
    }
  },
  include: {
    I: './steps_file.js'
  },
  bootstrap: null,
  mocha: {},
  name: 'Sudah Install',
  plugins: {
    pauseOnFail: {},
    retryFailedStep: {
      enabled: true
    },
    tryTo: {
      enabled: true
    },
    screenshotOnFail: {
      enabled: true
    }
  }
}