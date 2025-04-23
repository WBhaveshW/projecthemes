'use client';
import React, { useEffect, useState } from 'react';

interface TypingTextProps {
  staticText?: string;
  texts: string[];
  variant?: 'heading' | 'subheading' | 'normal';
  color?: string;
  speed?: number;
  delay?: number;
}

const variantStyles = {
  heading: 'text-2xl sm:text-3xl md:text-4xl font-bold',
  subheading: 'text-xl sm:text-2xl font-semibold',
  normal: 'text-base sm:text-lg',
};

const TypingText: React.FC<TypingTextProps> = ({
  staticText = '',
  texts,
  variant = 'normal',
  color = 'text-black',
  speed = 100,
  delay = 1500,
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];

    if (!isDeleting && charIndex <= currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex));
        setCharIndex(charIndex + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }

    if (!isDeleting && charIndex > currentText.length) {
      const pause = setTimeout(() => {
        setIsDeleting(true);
      }, delay);
      return () => clearTimeout(pause);
    }

    if (isDeleting && charIndex >= 0) {
      const timeout = setTimeout(() => {
        setDisplayedText(currentText.substring(0, charIndex));
        setCharIndex(charIndex - 1);
      }, speed / 2);
      return () => clearTimeout(timeout);
    }

    if (isDeleting && charIndex < 0) {
      setIsDeleting(false);
      setTextIndex((prev) => (prev + 1) % texts.length);
    }
  }, [charIndex, isDeleting, textIndex, texts, speed, delay]);

  return (
    <p
      className={`
        ${variantStyles[variant]} 
        ${color} 
        font-mono 
        whitespace-normal break-words 
        text-center px-4 sm:px-0
      `}
    >
      {staticText}
      {displayedText}
      <span className="animate-pulse">|</span>
    </p>
  );
};

export default TypingText;
