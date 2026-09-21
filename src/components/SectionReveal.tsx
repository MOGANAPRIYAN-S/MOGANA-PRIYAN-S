import React, { ReactNode } from 'react';
import { motion, HTMLMotionProps } from 'framer-motion';

interface SectionRevealProps extends HTMLMotionProps<'div'> {
  children: ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
}

export const SectionReveal: React.FC<SectionRevealProps> = ({
  children,
  id,
  className = '',
  delay = 0,
  duration = 0.7,
  yOffset = 40,
  ...props
}) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.12, margin: '0px 0px -40px 0px' }}
      transition={{
        duration,
        delay,
        ease: [0.22, 1, 0.36, 1] // Custom smooth cubic bezier for high-end deceleration
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};
