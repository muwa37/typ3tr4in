import { TimeMode } from '@/types/common';

export const isKeyboardCodeAllowed = (code: string) => {
  return (
    code.startsWith('Key') ||
    code.startsWith('Digit') ||
    code === 'Backspace' ||
    code === 'Space' ||
    code === 'Comma' ||
    code === 'Period' ||
    code === 'Quote'
  );
};

export const countErrors = (actual: string, expected: string) => {
  const expectedCharacters = expected.split('');

  return expectedCharacters.reduce((errors, expectedChar, i) => {
    const actualChar = actual[i];
    if (actualChar !== expectedChar) {
      errors++;
    }
    return errors;
  }, 0);
};

export const calculateAccuracy = (errors: number, total: number) => {
  if (total > 0) {
    const corrects = total - errors;
    return (corrects / total) * 100;
  }

  return 0;
};

export const formatPercentage = (percentage: number) => {
  return percentage.toFixed(0) + '%';
};

export const calculateWPM = (time: TimeMode, total: number) => {
  if (total > 0) {
    if (time === 15) {
      return total * 4;
    }
    if (time === 30) {
      return total * 2;
    }
    if (time === 60) {
      return total;
    }
    if (time === 120) {
      return total * 0.5;
    }
  }

  return 0;
};
