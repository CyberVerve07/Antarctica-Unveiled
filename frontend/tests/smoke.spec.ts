import { test, expect } from "@playwright/test";

test("home page renders", async ({ page }) => {
  await page.goto("/");
  await expect(
    page.getByRole("heading", { level: 1 }).filter({ hasText: "EXTREME" })
  ).toBeVisible();
});

test("blog index renders", async ({ page }) => {
  await page.goto("/blog");
  await expect(
    page.getByRole("heading", { level: 1, name: /explorer/i })
  ).toBeVisible();
});

