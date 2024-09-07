type Props = { onClickFn: () => void; buttonText: string; isActive?: boolean };

const CustomButton = ({ onClickFn, buttonText, isActive }: Props) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    onClickFn();
    e.currentTarget.blur();
  };

  return (
    <button
      className={`m-3 p-3 border-2 rounded-md   hover:border-blue-300 hover:text-blue-300 flex items-center justify-center italic ${
        isActive
          ? 'border-lime-700 text-lime-700'
          : 'border-red-300 text-red-300'
      }`}
      onClick={handleClick}
    >
      {buttonText}
    </button>
  );
};

export default CustomButton;
