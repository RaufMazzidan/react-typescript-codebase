import useAction from './hooks/useAction';

const HomeContainer = () => {
  const {
    pageName,
  } = useAction();

  return (
    <span>{`Container of: ${pageName}`}</span>
  );
};

export default HomeContainer;
