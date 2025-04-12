import React, { useEffect } from 'react';

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  action: () => void
) {
  useEffect(() => {
    const listener = (event: TouchEvent | MouseEvent) => {
      const target = event.target;
      if (
        !ref.current ||
        !target ||
        !(target instanceof Node) ||
        ref.current.contains(event.target as Node)
      ) {
        return;
      }

      action();
    };

    document.addEventListener('mousedown', listener, { passive: true });
    document.addEventListener('touchstart', listener, { passive: true });

    return () => {
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [action, ref]);
}
