import { describe, test } from 'vitest';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { wips } from './wips';

describe('When the app renders', () => {
  test('it shows the title', () => {
    render(<App />);
    screen.getByText('Campbell Docherty');
  });

  test.each(wips)('it shows project', (wip) => {
    render(<App />);
    const title = screen.getByText(wip.title);
    fireEvent.click(title);
    screen.getByText(wip.description);
    screen.getAllByText(wip.tech);
  });
});
``;
