import React from 'react';
import Caret from './Caret';
import Character from './Character';

type UserTypingsProps = {
  userInput: string;
  words: string;
  className?: string;
};

const UserTypings: React.FC<UserTypingsProps> = ({
  userInput,
  words,
  className = '',
}) => {
  const typedCharacters = userInput.split('');

  const renderedCharacters = typedCharacters.map((char, index) => (
    <Character
      key={`${char}_${index}`}
      actual={char}
      expected={words[index] || ''}
    />
  ));

  return (
    <div className={className}>
      {renderedCharacters}
      <Caret />
    </div>
  );
};

export default UserTypings;
