import { defineConfig, devices } from '@playwright/test';

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',

  use: {
    trace: 'on-first-retry',
  },

  projects: [
    // -----------------------------
    // Local Browsers (your existing)
    // -----------------------------
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },

    // ---------------------------------
    // LambdaTest Chromium Configuration
    // ---------------------------------
    {
      name: 'lambdatest-chromium',
      use: {
        browserName: 'chromium',
        connectOptions: {
          wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(
            JSON.stringify({
              browserName: 'Chrome',
              browserVersion: 'latest',
              platform: 'Windows 11',
              'LT:Options': {
                user: process.env.LT_USERNAME,
                accessKey: process.env.LT_ACCESS_KEY,
                build: 'Playwright Build',
                name: 'LambdaTest Example',
                console: true,
                network: true,
                video: true,
                headless: true
              }
            })
          )}`,
          timeout: 120000
        }
      }
    }
  ]
});
