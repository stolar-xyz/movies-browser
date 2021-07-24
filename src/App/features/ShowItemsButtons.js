import { useDispatch } from 'react-redux';
import { setCastLength, setCrewLength } from './itemSlice';
import Button from '../common/styled/Button';

const ShowItemsButtons = ({
  cast,
  displayedCastItems,
  crew,
  displayedCrewItems,
}) => {
  const dispatch = useDispatch();

  return (
    (cast && displayedCastItems && (
      <>
        {cast.length > displayedCastItems * 2 && (
          <Button
            title={'Show more'}
            onClick={() => {
              dispatch(setCastLength(Math.ceil(cast.length / 2)));
            }}
          >
            Show more
          </Button>
        )}
        {cast.length > displayedCastItems && (
          <Button
            title={'Show all'}
            onClick={() => {
              dispatch(setCastLength(cast.length));
            }}
          >
            Show all
          </Button>
        )}
        {cast.length === displayedCastItems && displayedCastItems > 16 && (
          <Button
            title={'Show less'}
            onClick={() => {
              dispatch(setCastLength(Math.ceil(cast.length / 3)));
            }}
          >
            Show less
          </Button>
        )}
      </>
    )) ||
    (crew && displayedCrewItems && (
      <>
        {crew.length > displayedCrewItems * 2 && (
          <Button
            title={'Show more'}
            onClick={() => {
              dispatch(setCrewLength(Math.ceil(crew.length / 2)));
            }}
          >
            Show more
          </Button>
        )}
        {crew.length > displayedCrewItems && (
          <Button
            title={'Show all'}
            onClick={() => {
              dispatch(setCrewLength(crew.length));
            }}
          >
            Show all
          </Button>
        )}
        {crew.length === displayedCrewItems && displayedCrewItems > 16 && (
          <Button
            title={'Show less'}
            onClick={() => {
              dispatch(setCrewLength(Math.ceil(crew.length / 3)));
            }}
          >
            Show less
          </Button>
        )}
      </>
    ))
  );
};

export default ShowItemsButtons;
