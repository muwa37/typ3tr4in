import React from 'react';

type Props = { trainerText: string };

const Words: React.FC<Props> = React.memo(({ trainerText }) => {
  return <p className='h-[300px] flex flex-wrap'>{trainerText}</p>;
});

export default Words;
