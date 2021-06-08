import { useActionTypes } from '../../../types/home';

const useAction = (): useActionTypes => {
  const pageName = 'Home Page';

  return {
    pageName,
  };
};

export default useAction;
