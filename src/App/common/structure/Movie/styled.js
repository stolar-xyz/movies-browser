import styled from 'styled-components';
import { ReactComponent as Star } from '../../../images/svgs/star.svg';

export const StyledMovie = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  min-height: 650px;
  padding: 16px;
`;

export const Image = styled.div`
  //example sizes and div
  background: darkgray;
  width: 292px;
  height: 434px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 8px;
`;

export const Year = styled.span`
  font-weight: 400;
  color: #7e839a;
`;

export const GenresWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -4px;
  padding: 0;
  list-style: none;
`;

export const Genres = styled.li`
  background: #e4e6f0;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 5px;
  margin: 4px;
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
`;

export const StarIcon = styled(Star)``;

export const Rate = styled.span`
  font-weight: 600;
  margin: 0 12px;
`;

export const Votes = styled.span`
  color: #7e839a;
`;
