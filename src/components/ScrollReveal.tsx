import React, { ReactNode } from 'react';
import { motion, type Variants } from 'motion/react';

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  scale?: number;
  once?: boolean;
  threshold?: number;
}

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  duration = 0.65,
  yOffset = 24,
  scale = 1,
  once = false,
  threshold = 0.2,
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: yOffset,
        scale: scale < 1 ? scale : 1,
        filter: 'blur(4px)',
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)',
      }}
      viewport={{ once, amount: threshold }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * ScrollRevealHeading
 * Splits an H1/H2/H3 text into words that stagger upwards as you scroll into view.
 */
interface ScrollRevealHeadingProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p';
  className?: string;
  delay?: number;
  once?: boolean;
}

export function ScrollRevealHeading({
  text,
  as: Component = 'h2',
  className = '',
  delay = 0,
  once = false,
}: ScrollRevealHeadingProps) {
  const words = text.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: delay,
      },
    },
  };

  const child: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      filter: 'blur(4px)',
    },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: 0.3 }}
      className="inline-block"
    >
      <Component className={`flex flex-wrap ${className}`}>
        {words.map((word, index) => (
          <motion.span
            key={index}
            variants={child}
            className="inline-block mr-[0.25em]"
          >
            {word}
          </motion.span>
        ))}
      </Component>
    </motion.div>
  );
}
