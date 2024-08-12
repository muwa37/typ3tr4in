const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='text-3xl relative leading-relaxed break-all mt-3 font-mono'>
      {children}
    </div>
  );
};

export default WordsContainer;
