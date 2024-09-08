import React from 'react';

type WordsProps = { trainerText: string };

const Words = React.memo(({ trainerText }: WordsProps) => {
  return <p className='h-[300px] flex flex-wrap'>{trainerText}</p>;
});

export default Words;
