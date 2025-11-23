// tests/example.spec.ts

import { test, expect } from "@playwright/test";

test("Google Search", async ({ page }) => {
  await page.goto("https://www.ggle.com/");
  await page.fill("[name='q']", "LambdaTest Playwright");
  await page.keyboard.press("Enter");
  await page.waitForTimeout(3000);
});
