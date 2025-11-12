import { test, expect } from '@playwright/test';

test('test-todo-app @sanity', async ({ page }) => {
  await page.goto('https://todomvc.com/examples/react/dist/');
  await page.getByTestId('text-input').click();
  await page.getByTestId('text-input').fill('fruits');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('car');
  await page.getByTestId('text-input').press('Enter');
  await page.getByTestId('text-input').fill('jobs');
  await page.getByTestId('text-input').press('Enter');
  await page.getByRole('link', { name: 'All' }).click();
  await page.getByRole('link', { name: 'Active' }).click();
  await page.getByRole('listitem').filter({ hasText: 'fruits' }).getByTestId('todo-item-toggle').check();
  await page.getByTestId('todo-item-label').click();
  await page.getByTestId('todo-item-toggle').check();
});