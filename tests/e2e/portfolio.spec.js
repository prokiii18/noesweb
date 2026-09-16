import { expect, test } from '@playwright/test';

const projectNames = ['Becherovka', 'Kiri', 'Biolage', 'Kérastase'];

async function expectLoadedImage(image) {
  await expect(image).toBeVisible();
  await expect
    .poll(() => image.evaluate((node) => node.complete && node.naturalWidth > 0), {
      message: 'Expected the project image to load successfully',
    })
    .toBe(true);
}

test.beforeEach(async ({ page }) => {
  await page.goto('/');
  await page.locator('#projects').scrollIntoViewIfNeeded();
});

test('loads every project image and opens its detail', async ({ page }) => {
  const status = page.locator('.case-status');
  const next = page.getByRole('button', { name: 'Další realizace' });

  for (const [index, name] of projectNames.entries()) {
    await expect(status).toContainText(name);

    const cardImage = page.locator('.project-visual img');
    await expect(cardImage).toHaveAttribute('alt', new RegExp(`^${name}`));
    await expectLoadedImage(cardImage);

    await page.getByRole('button', { name: 'Prohlédnout detail' }).click();
    const dialog = page.locator('dialog[open]');
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole('heading', { name })).toBeVisible();
    await expectLoadedImage(dialog.locator('.dialog-image'));

    await dialog.getByRole('button', { name: 'Zavřít detail realizace' }).click();
    await expect(dialog).toBeHidden();

    if (index < projectNames.length - 1) {
      await next.click();
      await expect(status).toContainText(projectNames[index + 1]);
    }
  }
});

test('mobile layout has no horizontal page overflow', async ({ page }, testInfo) => {
  test.skip(testInfo.project.name !== 'mobile-chromium', 'Mobile-only layout check');

  const overflow = await page.evaluate(() => ({
    viewportWidth: document.documentElement.clientWidth,
    contentWidth: Math.max(
      document.documentElement.scrollWidth,
      document.body.scrollWidth,
    ),
  }));

  expect(overflow.contentWidth).toBeLessThanOrEqual(overflow.viewportWidth + 1);
});
