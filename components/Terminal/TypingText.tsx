'use client';

import { useState, useEffect } from 'react';

interface TypingTextProps {
  text: string;
  speed?: number;
  onComplete?: () => void;
  className?: string;
  startDelay?: number;
}

export default function TypingText({ 
  text, 
  speed = 50, 
  onComplete, 
  className = '',
  startDelay = 0 
}: TypingTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (startDelay > 0) {
      const delayTimer = setTimeout(() => {
        setStarted(true);
      }, startDelay);
      return () => clearTimeout(delayTimer);
    } else {
      setStarted(true);
    }
  }, [startDelay]);

  useEffect(() => {
    if (!started) return;

    if (currentIndex < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(prev => prev + 1);
      }, speed);

      return () => clearTimeout(timer);
    } else if (onComplete && currentIndex === text.length) {
      onComplete();
    }
  }, [currentIndex, text, speed, onComplete, started]);

  return <span className={className}>{displayedText}</span>;
}
