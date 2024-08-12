import Caret from './Caret';
import Character from './Character';

const UserTypings = ({
  userInput,
  words,
  className = '',
}: {
  userInput: string;
  words: string;
  className?: string;
}) => {
  const typedCharacters = userInput.split('');

  return (
    <div className={className}>
      {typedCharacters.map((char, index) => (
        <Character
          key={`${char}_${index}`}
          actual={char}
          expected={words[index]}
        />
      ))}
      <Caret />
    </div>
  );
};

export default UserTypings;
