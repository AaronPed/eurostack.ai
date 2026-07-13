import { useRef, useEffect, useCallback } from 'react';

function map(x: number, a: number, b: number, c: number, d: number): number {
  return (x - a) * (d - c) / (b - a) + c;
}

// Manual text splitting into chars (avoiding splitting npm issues)
function splitTextIntoChars(element: HTMLElement): HTMLSpanElement[] {
  const text = element.textContent || '';
  element.innerHTML = '';
  element.setAttribute('aria-label', text);

  const words = text.split(' ');
  const allChars: HTMLSpanElement[] = [];

  words.forEach((word, wordIndex) => {
    const wordSpan = document.createElement('span');
    wordSpan.className = 'word';
    wordSpan.style.display = 'inline-block';
    wordSpan.style.overflow = 'hidden';
    wordSpan.style.margin = '0 1vw';

    for (let i = 0; i < word.length; i++) {
      const charSpan = document.createElement('span');
      charSpan.className = 'char';
      charSpan.textContent = word[i];
      charSpan.style.display = 'inline-block';
      charSpan.style.willChange = 'transform';
      charSpan.style.transformOrigin = '50% 0%';
      wordSpan.appendChild(charSpan);
      allChars.push(charSpan);
    }

    element.appendChild(wordSpan);

    if (wordIndex < words.length - 1) {
      const space = document.createTextNode(' ');
      element.appendChild(space);
    }
  });

  return allChars;
}

export default function VelocityStatement() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const scrollCache = useRef({ cache: 0, current: 0 });
  const charsRef = useRef<HTMLSpanElement[]>([]);
  const rectTopRef = useRef(0);
  const heightRef = useRef(window.innerHeight);
  const rafRef = useRef<number>(0);

  const refresh = useCallback(() => {
    heightRef.current = window.innerHeight;
    if (textRef.current) {
      rectTopRef.current = textRef.current.getBoundingClientRect().top + window.scrollY;
    }
  }, []);

  const handleScroll = useCallback(() => {
    scrollCache.current.current = window.scrollY;
    if (textRef.current) {
      rectTopRef.current = textRef.current.getBoundingClientRect().top + window.scrollY;
    }
  }, []);

  useEffect(() => {
    const textElement = textRef.current;
    if (!textElement) return;

    charsRef.current = splitTextIntoChars(textElement);
    refresh();

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', refresh);

    const render = () => {
      rafRef.current = requestAnimationFrame(render);

      const scroll = scrollCache.current;
      const distance = scroll.current - scroll.cache;
      scroll.cache += (scroll.current - scroll.cache) * 0.1;

      const translateY = ((scroll.cache - (heightRef.current / 2 - heightRef.current / 2)) / heightRef.current) - (rectTopRef.current / heightRef.current);
      const scaleY = map(Math.abs(distance), 0, 150, 1, 1.6);

      for (const char of charsRef.current) {
        if (Math.abs(distance) < 5) {
          char.style.transform = `translateY(${translateY * 40}px)`;
        } else {
          char.style.transform = `translateY(${translateY * 40}px) scaleY(${scaleY})`;
        }
      }
    };

    rafRef.current = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', refresh);
    };
  }, [refresh, handleScroll]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-navy-100 flex items-center justify-center overflow-hidden"
      style={{ height: '150vh' }}
    >
      <div className="sticky top-0 h-screen flex items-center justify-center">
        <div
          ref={textRef}
          className="kinetic-text"
          style={{ fontSize: 'clamp(3rem, 12vw, 14rem)' }}
        >
          SOVEREIGN
        </div>
      </div>
    </section>
  );
}
