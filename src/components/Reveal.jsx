import { useEffect, useRef, useState } from 'react';
import { useReducedMotion } from '../hooks';

export default function Reveal({ as: Tag = 'div', className = '', children, ...props }) {
  const ref = useRef(null);
  const reducedMotion = useReducedMotion();
  const [visible, setVisible] = useState(reducedMotion);

  useEffect(() => {
    if (reducedMotion || !('IntersectionObserver' in window)) {
      setVisible(true);
      return undefined;
    }
    const node = ref.current;
    if (!node) return undefined;
    const observer = new IntersectionObserver(([entry]) => {
      if (!entry.isIntersecting) return;
      setVisible(true);
      observer.disconnect();
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    observer.observe(node);
    return () => observer.disconnect();
  }, [reducedMotion]);

  return <Tag ref={ref} className={`reveal ${visible ? 'is-visible' : ''} ${className}`.trim()} {...props}>{children}</Tag>;
}
