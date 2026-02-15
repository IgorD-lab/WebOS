import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

/**
 * TYPESCRIPT DEFINITIONS
 */

// This defines what a "Weight Range" looks like: a min, max, and starting value.
interface WeightRange {
  min: number;
  max: number;
  default: number;
}

// This limits our categories to ONLY 'subtitle' or 'title'.
type FontWeightCategory = 'subtitle' | 'title';

// This is the actual data: Subtitles are thin (100-400), Titles are thick (400-900).
const FONT_WEIGHTS: Record<FontWeightCategory, WeightRange> = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

/**
 * HELPER FUNCTIONS
 */

// This function takes a string and turns every letter into a <span> tag.
const renderText = (text: string, className: string, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i} // React needs a unique key for list items
      className={className}
      style={{
        // fontVariationSettings is the CSS property for Variable Fonts
        fontVariationSettings: `'wght' ${baseWeight}`,
      }}
    >
      {/* If the character is a space, use a "non-breaking space" so it doesn't collapse */}
      {char === ' ' ? '\u00A0' : char}
    </span>
  ));
};

// This function handles the "Magic": watching the mouse and moving the font weight.
const setupTextHover = (
  container: HTMLElement | null,
  type: FontWeightCategory,
) => {
  if (!container) return; // Safety check: if the element doesn't exist, do nothing.

  const letters = container.querySelectorAll('span'); // Find all letters we created earlier
  const { min, max, default: base } = FONT_WEIGHTS[type]; // Get the weight rules for this text

  // A small helper to run the GSAP animation
  const animateLetter = (
    letter: HTMLSpanElement,
    weight: number,
    duration = 0.25,
  ) => {
    return gsap.to(letter, {
      duration,
      ease: 'power2.out', // Makes the movement feel organic rather than robotic
      fontVariationSettings: `'wght' ${weight}`,
    });
  };

  const handleMouseMove = (e: MouseEvent) => {
    // 1. PROJECT MOUSE TO LOCAL SPACE
    // e.clientX is where the mouse is on the ENTIRE screen.
    // container.getBoundingClientRect().left is where the text starts.
    // mouseX is now the position of the mouse relative only to the text.
    const { left } = container.getBoundingClientRect();
    const mouseX = e.clientX - left;

    letters.forEach((letter) => {
      // 2. FIND THE CENTER OF THE INDIVIDUAL LETTER
      // 'l' is the letter's left edge, 'w' is its width.
      const { left: l, width: w } = letter.getBoundingClientRect();
      const letterCenterX = l - left + w / 2;

      // 3. CALCULATE DISTANCE (The 'x' in our math)
      // How many pixels away is the mouse from the center of THIS letter?
      const distance = Math.abs(mouseX - letterCenterX);

      // 4. THE GAUSSIAN BELL CURVE (The Magic)
      // Formula: e^(- (x^2) / (2 * variance))
      // - Math.exp: The constant 'e' raised to a power.
      // - (distance ** 2): Squaring the distance makes the drop-off symmetrical.
      // - 20000: This is the "Variance."
      //   INCREASE this (e.g., 50000) for a wider, softer wave.
      //   DECREASE this (e.g., 5000) for a sharp, narrow "spike" of boldness.
      const intensity = Math.exp(-(distance ** 2) / 20000);

      // 5. INTERPOLATION (Blending the weights)
      // If intensity is 1 (mouse is exactly on letter), we get the MAX weight.
      // If intensity is 0 (mouse is far away), we get the MIN weight.
      const targetWeight = min + (max - min) * intensity;

      animateLetter(letter, targetWeight);
    });
  };

  // Reset all letters to their original weight when the mouse leaves
  const handleMouseLeave = () =>
    letters.forEach((letter) => animateLetter(letter, base, 0.3));

  // Add the "Listeners" so the browser watches for these events
  container.addEventListener('mousemove', handleMouseMove);
  container.addEventListener('mouseleave', handleMouseLeave);

  // This "Cleanup" function removes the listeners when the page closes (prevents memory leaks)
  return () => {
    container.removeEventListener('mousemove', handleMouseMove);
    container.removeEventListener('mouseleave', handleMouseLeave);
  };
};

/**
 * THE REACT COMPONENT
 */
const Welcome = () => {
  // "Refs" are pointers. We use them to grab the <h1> and <p> tags later.
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  // useGSAP is a specialized hook that runs the animation logic once the page loads.
  useGSAP(() => {
    const titleCleanup = setupTextHover(titleRef.current, 'title');
    const subtitleCleanup = setupTextHover(subtitleRef.current, 'subtitle');

    return () => {
      titleCleanup?.();
      subtitleCleanup?.();
    };
  }, []);

  return (
    <section id="welcome">
      <p ref={subtitleRef}>
        {renderText(
          "Hey, I'm Y2K! Welcome to my",
          'text-3xl font-georama',
          100,
        )}
      </p>

      <h1 ref={titleRef} className="mt-7">
        {renderText('portfolio', 'text-9xl italic font-georama')}
      </h1>

      {/* A simple message for mobile users since you can't "hover" or do desktop displays on a phone */}
      <div className="small-screen">
        <p>This Portfolio is designed for desktop/tablet screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
