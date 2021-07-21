import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchList, selectResult, selectStatus } from './listSlice';
import { fetchGenres } from './movies/Genres/genresSlice';
import { usePageParameters } from './usePageParameters';

const useListResources = type => {
  const listPage = useSelector(selectResult);
  const listStatus = useSelector(selectStatus);
  const page = +usePageParameters();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchList({ page, type }));
    type === 'movies' && dispatch(fetchGenres());
  }, [dispatch, page, type]);

  return { listPage, listStatus };
};

export default useListResources;
