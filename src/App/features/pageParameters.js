import { useHistory, useLocation } from 'react-router-dom';

export const usePageParameter = paramName => {
  const location = useLocation();

  return new URLSearchParams(location.search).get(paramName);
};

export const useReplacePageParameters = () => {
  const history = useHistory();
  const searchParams = new URLSearchParams();

  const replacePageParameters = ({ key, value }) => {
    searchParams.set(key, value);
    history.push(`?${searchParams}`);
  };

  return replacePageParameters;
};
