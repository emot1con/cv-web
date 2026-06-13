import { useState, useEffect, useRef } from 'react';

interface TypewriterOptions {
  strings: string[];
  typeSpeed?: number;
  backSpeed?: number;
  backDelay?: number;
  loop?: boolean;
}

export function useTypewriter({
  strings,
  typeSpeed = 50,
  backSpeed = 30,
  backDelay = 1200,
  loop = true,
}: TypewriterOptions) {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const stringIndex = useRef(0);
  const charIndex = useRef(0);
  const isDeleting = useRef(false);

  useEffect(() => {
    const currentString = strings[stringIndex.current];

    const timeout = setTimeout(() => {
      if (!isDeleting.current) {
        // Typing
        if (charIndex.current < currentString.length) {
          charIndex.current++;
          setDisplayText(currentString.slice(0, charIndex.current));
        } else {
          // Done typing, wait then delete
          setTimeout(() => {
            isDeleting.current = true;
          }, backDelay);
          return;
        }
      } else {
        // Deleting
        if (charIndex.current > 0) {
          charIndex.current--;
          setDisplayText(currentString.slice(0, charIndex.current));
        } else {
          // Done deleting, move to next string
          isDeleting.current = false;
          stringIndex.current = (stringIndex.current + 1) % strings.length;
          if (!loop && stringIndex.current === 0) return;
        }
      }
    }, isDeleting.current ? backSpeed : typeSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, strings, typeSpeed, backSpeed, backDelay, loop]);

  // Cursor blink
  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);
    return () => clearInterval(cursorInterval);
  }, []);

  return { displayText, showCursor };
}