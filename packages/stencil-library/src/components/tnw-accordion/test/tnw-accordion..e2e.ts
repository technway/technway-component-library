import { expect } from '@playwright/test';
import { test } from '@stencil/playwright';

test.describe('tnw-accordion', () => {
    test('should render the tnw-accordion component', async ({ page }) => {
        await page.goto('/components/tnw-accordion/test/tnw-accordion.e2e.html');

        const component = page.locator('tnw-accordion');
        await expect(component).toBeVisible();
    });
});
