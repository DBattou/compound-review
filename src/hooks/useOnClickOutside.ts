import React, { useEffect } from 'react';

export function useOnClickOutside(
  ref: React.RefObject<HTMLElement | null>,
  action: () => void,
  enableEscKey: boolean = true
) {
  useEffect(() => {
    const clickListener = (event: TouchEvent | MouseEvent) => {
      if (!ref.current || ref.current.contains(event.target as Node)) {
        return;
      }

      action();
    };

    const keyListener = (event: KeyboardEvent) => {
      if (!enableEscKey || event.key !== 'Escape') {
        return;
      }

      action();
    };

    document.addEventListener('mousedown', clickListener, { passive: true });
    document.addEventListener('touchstart', clickListener, { passive: true });
    document.addEventListener('keydown', keyListener);

    return () => {
      document.removeEventListener('mousedown', clickListener);
      document.removeEventListener('touchstart', clickListener);
      document.removeEventListener('keydown', keyListener);
    };
  }, [action, ref, enableEscKey]);
}
