const WordsContainer = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='text-xl m-3 md:text-3xl relative leading-relaxed break-all md:m-0 md:mt-3 font-mono'>
      {children}
    </div>
  );
};

export default WordsContainer;
