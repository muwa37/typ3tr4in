type Props = { pageTitle: string };

const PageTitle = ({ pageTitle }: Props) => {
  return (
    <h1 className='mt-4 text-3xl md:text-6xl font-extrabold'>{pageTitle}</h1>
  );
};

export default PageTitle;
