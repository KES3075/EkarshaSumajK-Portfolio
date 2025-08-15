import { useState } from 'react';

interface RedactedTextProps {
  children: React.ReactNode;
  className?: string;
  revealOnHover?: boolean;
}

export const RedactedText = ({ children, className = "", revealOnHover = true }: RedactedTextProps) => {
  const [isRevealed, setIsRevealed] = useState(false);

  const handleMouseEnter = () => {
    if (revealOnHover) {
      setIsRevealed(true);
    }
  };

  const handleMouseLeave = () => {
    if (revealOnHover) {
      setIsRevealed(false);
    }
  };

  return (
    <span
      className={`relative inline-block ${className}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <span
        className={`transition-all duration-300 ${
          isRevealed ? 'text-foreground' : 'text-transparent'
        }`}
      >
        {children}
      </span>
      <span
        className={`absolute inset-0 transition-all duration-300 ${
          isRevealed ? 'bg-transparent' : 'bg-redaction-bar'
        }`}
      />
    </span>
  );
};

export const ClassifiedStamp = ({ text = "CLASSIFIED" }: { text?: string }) => (
  <span className="classified-stamp">{text}</span>
);

export const TopSecretStamp = ({ text = "TOP SECRET" }: { text?: string }) => (
  <span className="top-secret-stamp">{text}</span>
);