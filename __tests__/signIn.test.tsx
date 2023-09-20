import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Home from '../app/page';

test('Displays log in if user exisits in clerk', async () => {
  const home = render(<Home />);
  const homeButton = await home.findByTestId('login-button');
  expect(homeButton.textContent).toBe('Log in');
  home.unmount();
});
