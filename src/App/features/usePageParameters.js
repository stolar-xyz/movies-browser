import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { selectTotalPages } from '../features/listSlice';
import { pageKey } from '../paramKeys';

export const usePageParameters = () => {
  const { search } = useLocation();
  const totalPages = useSelector(selectTotalPages);

  const page = new URLSearchParams(search).get(pageKey);

  return page < 1 || page > totalPages ? 1 : page;
};
