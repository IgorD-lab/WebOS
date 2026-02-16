import { render, screen } from '@testing-library/react';
import Welcome from '#components/Welcome';

describe('Welcome Component', () => {
  it('should render the welcome message', () => {
    render(<Welcome />);

    // This checks if the text exists in the document
    const titleElement = screen.getByText(/Hey, I'm Y2K! Welcome to my/i);
    const subtitleElement = screen.getByText(/portfolio/i);

    expect(titleElement).toBeDefined();
    expect(subtitleElement).toBeDefined();
  });
});
