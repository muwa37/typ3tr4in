const Character = ({
  actual,
  expected,
}: {
  actual: string;
  expected: string;
}) => {
  const isCorrect = actual === expected;
  const isWhiteSpace = expected === ' ';

  return (
    <span
      className={`${!isCorrect && !isWhiteSpace && 'text-red-500'} 
        ${isCorrect && !isWhiteSpace && 'text-lime-700'} 
        ${!isCorrect && isWhiteSpace && 'bg-red-500-50'}`}
    >
      {expected}
    </span>
  );
};

export default Character;
