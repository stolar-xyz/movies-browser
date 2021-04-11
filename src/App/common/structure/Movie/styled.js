import styled from 'styled-components';
import { ReactComponent as Star } from '../../../images/svgs/star.svg';

export const StyledMovie = styled.div`
  display: flex;
  flex-direction: column;
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  min-height: 650px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: row;
    min-height: unset;
  }
`;

export const Image = styled.div`
  //example sizes and div
  background: darkgray;
  height: 434px;
  border-radius: 5px 5px 0 0;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    border-radius: 5px 0 0 5px;
    height: 177px;
    width: 114px;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 16px;
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 4px;
  }
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  font-weight: 400;
  color: #7e839a;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;

export const GenresWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -4px;
  padding: 0;
  list-style: none;
`;

export const Genres = styled.li`
  background: #e4e6f0;
  font-size: 14px;
  padding: 8px 16px;
  border-radius: 5px;
  margin: 4px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;
`;

export const StarIcon = styled(Star)`
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 600;
  margin: 0 14px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    margin: 0 8px;
  }
`;

export const Votes = styled.span`
  color: #7e839a;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;
