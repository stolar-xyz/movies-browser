import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchItem } from './itemSlice';
import { selectResult, selectStatus } from './itemSlice';
import { fetchGenres } from './movies/Genres/genresSlice';

const useItemResources = type => {
  const resultPage = useSelector(selectResult);
  const itemStatus = useSelector(selectStatus);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchItem({ id, type }));
    type === 'movie' && dispatch(fetchGenres());
  }, [dispatch, id, type]);

  return { resultPage, itemStatus };
};

export default useItemResources;
