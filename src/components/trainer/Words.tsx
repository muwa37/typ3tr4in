type Props = { trainerText: string };

const Words = ({ trainerText }: Props) => {
  return <p className='h-[300px] flex flex-wrap'>{trainerText}</p>;
};

export default Words;
