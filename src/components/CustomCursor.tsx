import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';

export const CustomCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorText, setCursorText] = useState('');
  const [isHovered, setIsHovered] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices with fine pointers
    if (typeof window === 'undefined' || window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const updatePosition = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const cursorTarget = target.closest('[data-cursor]') as HTMLElement | null;
      if (cursorTarget) {
        setCursorText(cursorTarget.getAttribute('data-cursor') || '');
        setIsHovered(true);
      } else if (target.closest('button, a, input, textarea, select')) {
        setCursorText('');
        setIsHovered(true);
      } else {
        setCursorText('');
        setIsHovered(false);
      }
    };

    const handleMouseLeave = () => setIsVisible(false);

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mouseover', handleMouseOver);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      <motion.div
        className="fixed top-0 left-0 flex items-center justify-center rounded-full pointer-events-none font-display font-semibold tracking-wider text-[11px] uppercase text-black shadow-2xl backdrop-blur-xs"
        animate={{
          x: position.x,
          y: position.y,
          translateX: '-50%',
          translateY: '-50%',
          width: cursorText ? 84 : isHovered ? 48 : 12,
          height: cursorText ? 84 : isHovered ? 48 : 12,
          backgroundColor: cursorText
            ? 'rgba(242, 125, 38, 0.96)'
            : isHovered
            ? 'rgba(242, 125, 38, 0.25)'
            : 'rgba(245, 245, 240, 0.9)',
          borderColor: isHovered ? 'rgba(242, 125, 38, 0.8)' : 'transparent',
          borderWidth: isHovered && !cursorText ? 1 : 0
        }}
        transition={{
          type: 'spring',
          damping: 28,
          stiffness: 350,
          mass: 0.4
        }}
      >
        {cursorText && (
          <motion.span
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center px-1 leading-tight font-medium"
          >
            {cursorText}
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
