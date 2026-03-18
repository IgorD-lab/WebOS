import { render, screen } from '@testing-library/react';
import Navbar from '#components/Navbar'; // Using cool # alias!

describe('Navbar Component', () => {
  it('should render the portfolio name', () => {
    render(<Navbar />);

    // This checks if the text exists in the document
    const titleElement = screen.getByText(/IgorD's Portfolio/i);
    expect(titleElement).toBeDefined();
  });

  it('should render all navigation links', () => {
    render(<Navbar />);

    // We check for the list items we mapped earlier
    expect(screen.getByText(/Portfolio/i)).toBeDefined();
    expect(screen.getByText(/Contact/i)).toBeDefined();
    expect(screen.getByText(/Projects/i)).toBeDefined();
  });
});
