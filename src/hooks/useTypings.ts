import { isKeyboardCodeAllowed } from '@/utils/helpers';
import { useCallback, useEffect, useRef, useState } from 'react';

const useTypings = (enabled: boolean) => {
  const [cursor, setCursor] = useState(0);
  const [typed, setTyped] = useState<string>('');
  const totalTyped = useRef(0);

  const keydownHandler = useCallback(
    ({ key, code }: KeyboardEvent) => {
      if (!enabled || !isKeyboardCodeAllowed(code)) {
        return;
      }

      switch (code) {
        case 'Backspace':
          setTyped(prev => prev.slice(0, -1));
          setCursor(cursor => Math.max(cursor - 1, 0));
          totalTyped.current = Math.max(totalTyped.current - 1, 0);
          break;
        case 'Space':
          setTyped(prev => prev.concat(' '));
          setCursor(cursor => cursor + 1);
          totalTyped.current += 1;
          break;
        default:
          setTyped(prev => prev.concat(key));
          setCursor(cursor => cursor + 1);
          totalTyped.current += 1;
      }
    },
    [enabled]
  );

  const clearTyped = useCallback(() => {
    setTyped('');
    setCursor(0);
  }, []);

  const resetTotalTyped = useCallback(() => {
    totalTyped.current = 0;
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', keydownHandler);

    return () => {
      window.removeEventListener('keydown', keydownHandler);
    };
  }, [keydownHandler]);

  return {
    typed,
    cursor,
    clearTyped,
    resetTotalTyped,
    totalTyped: totalTyped.current,
  };
};

export default useTypings;
