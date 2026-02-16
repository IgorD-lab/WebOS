import { render } from '@testing-library/react';
import Welcome from '#components/Welcome';

/**
 * MANUAL TEST NOTICE:
 * This component uses GSAP and Variable Font manipulation based on
 * getBoundingClientRect() and MouseEvents.
 * * Automated unit testing for the "Hover Wave" effect is omitted due to:
 *   - JSDOM limitations regarding layout/rendering.
 * * TO TEST MANUALLY:
 *   1. Hover over "portfolio" and the greeting.
 *   2. Verify font-weight animates smoothly in a wave pattern.
 */

describe('Welcome Component', () => {
  it('renders without crashing (Smoke Test)', () => {
    const { container } = render(<Welcome />);
    expect(container).toBeDefined();
  });
});
