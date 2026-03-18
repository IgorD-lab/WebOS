import { render, screen } from '@testing-library/react';
import { describe, it, expect, vi } from 'vitest';

import { Terminal } from '#windows/Terminal';
import { TECH_STACK } from '#constants';

// 1. Mock the WindowControls component so it doesn't trigger the Zustand store
vi.mock('#components/WindowControls', () => ({
  default: () => <div data-testid="mock-window-controls" />,
}));

describe('Terminal Component', () => {
  it('renders the terminal header successfully', () => {
    render(<Terminal />);

    // Check if the title rendered
    expect(screen.getByText('Tech Stack')).toBeInTheDocument();

    // Check if our faked WindowControls rendered
    expect(screen.getByTestId('mock-window-controls')).toBeInTheDocument();
  });

  it('renders the tech stack categories from constants', () => {
    render(<Terminal />);

    // Check that at least the first category from your constants renders
    // (Assuming TECH_STACK has at least one item with a 'category' string)
    if (TECH_STACK.length > 0) {
      const firstCategory = TECH_STACK[0].category;
      expect(screen.getByText(firstCategory)).toBeInTheDocument();
    }
  });

  it('renders the bottom footnote correctly', () => {
    render(<Terminal />);

    // Check for specific text in the footnote
    expect(
      screen.getByText(/5 of 5 stacks loaded successfully/i),
    ).toBeInTheDocument();
  });
});
