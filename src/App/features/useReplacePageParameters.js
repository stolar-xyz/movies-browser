import { useHistory } from 'react-router-dom';

export const useReplacePageParameters = () => {
  const history = useHistory();
  const searchParams = new URLSearchParams();

  const replacePageParameters = ({ key, value }) => {
    if (value) {
      searchParams.set(key, value);
      history.push(`?${searchParams}`);
    }
  };

  return replacePageParameters;
};
