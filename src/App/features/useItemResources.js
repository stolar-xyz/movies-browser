import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  selectResult,
  selectStatus,
  fetchItem,
  selectResultDetails,
  selectDisplayedCast,
  selectDisplayedCrew,
} from './itemSlice';
import { fetchGenres } from './movies/Genres/genresSlice';

const useItemResources = type => {
  const itemPage = useSelector(selectResult);
  const itemDetails = useSelector(selectResultDetails);
  const itemStatus = useSelector(selectStatus);
  const displayedCastItems = useSelector(selectDisplayedCast);
  const displayedCrewItems = useSelector(selectDisplayedCrew);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchItem({ id, type }));
  }, [dispatch, id, type]);

  return {
    itemPage,
    itemDetails,
    itemStatus,
    displayedCastItems,
    displayedCrewItems,
  };
};

export default useItemResources;
