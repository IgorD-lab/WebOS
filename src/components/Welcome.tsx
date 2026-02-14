import { useRef } from 'react';

// Define the shape so FONT_WEIGHTS isn't "any"
interface WeightRange {
  min: number;
  max: number;
  default: number;
}

// Define the allowed keys
type FontWeightCategory = 'subtitle' | 'title';

const FONT_WEIGHTS: Record<FontWeightCategory, WeightRange> = {
  subtitle: { min: 100, max: 400, default: 100 },
  title: { min: 400, max: 900, default: 400 },
};

// Render text helper function
const renderText = (text: string, className: string, baseWeight = 400) => {
  return [...text].map((char, i) => (
    <span
      key={i}
      className={className}
      style={{
        fontVariationSettings: `'whgt ${baseWeight}`,
      }}
    >
      {char === '' ? '\u00A0' : char}
    </span>
  ));
};

// text hover helper function
const setupTextHover = (
  container: HTMLElement | null,
  type: FontWeightCategory,
) => {
  if (!container) return;

  const letters = container.querySelectorAll('span');
  const { min, max, default: base } = FONT_WEIGHTS[type];
};

const Welcome = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

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

      <div className="small-screen">
        <p>This Portfolio is designed f or desktop/tabled screens only.</p>
      </div>
    </section>
  );
};

export default Welcome;
