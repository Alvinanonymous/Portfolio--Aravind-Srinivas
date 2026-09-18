import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'motion/react';

interface ScrollWordRevealProps {
  children: string;
  className?: string;
  wordClassName?: string;
  highlightWords?: string[];
  glowColor?: string;
}

interface WordProps {
  word: string;
  index: number;
  totalWords: number;
  progress: MotionValue<number>;
  isHighlight?: boolean;
}

function Word({ word, index, totalWords, progress, isHighlight }: WordProps) {
  // Determine start and end scroll thresholds for each word
  const start = index / totalWords;
  const end = Math.min(1, (index + 1.2) / totalWords);

  // Opacity transitions from 0.18 to 1.0 as scroll passes through
  const opacity = useTransform(progress, [start, end], [0.2, 1]);
  // Subtle vertical drift upward
  const y = useTransform(progress, [start, end], [4, 0]);
  // Slight scale / crispness
  const scale = useTransform(progress, [start, end], [0.98, 1]);

  return (
    <motion.span
      style={{ opacity, y, scale }}
      className={`inline-block mr-[0.28em] transition-colors duration-150 will-change-[transform,opacity] ${
        isHighlight
          ? 'text-cyan-300 font-normal drop-shadow-[0_0_12px_rgba(34,211,238,0.4)]'
          : 'text-cream'
      }`}
    >
      {word}
    </motion.span>
  );
}

export function ScrollWordReveal({
  children,
  className = '',
  wordClassName = '',
  highlightWords = [],
}: ScrollWordRevealProps) {
  const containerRef = useRef<HTMLParagraphElement>(null);

  // Measure scroll progress relative to this text element
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 85%', 'end 35%'],
  });

  const words = children.split(/\s+/).filter(Boolean);

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap items-center leading-relaxed ${className}`}
    >
      {words.map((word, i) => {
        // Strip punctuation for highlight check
        const cleanWord = word.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
        const isHighlight = highlightWords.some(
          (hw) => hw.toLowerCase() === cleanWord
        );

        return (
          <Word
            key={`${word}-${i}`}
            word={word}
            index={i}
            totalWords={words.length}
            progress={scrollYProgress}
            isHighlight={isHighlight}
          />
        );
      })}
    </p>
  );
}
