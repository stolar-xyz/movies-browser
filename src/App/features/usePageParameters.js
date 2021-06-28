import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectTotalPages } from '../features/listSlice';
import { pageKey } from '../paramKeys';

export const usePageParameters = () => {
  const location = useLocation();
  const totalPages = useSelector(selectTotalPages);

  const page = new URLSearchParams(location.search).get(pageKey);

  return page < 1 || page > totalPages ? 1 : page;
};
