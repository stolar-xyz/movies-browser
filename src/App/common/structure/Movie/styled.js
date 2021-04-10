import styled from 'styled-components';
import { ReactComponent as Star } from '../../../images/svgs/star.svg';

export const StyledMovie = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  min-height: 650px;
  padding: 16px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    min-height: unset;
  }
`;

export const Image = styled.div`
  //example sizes and div
  background: darkgray;
  height: 434px;
  border-radius: 5px;
  margin: 0 0 16px;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 169px;
    width: 114px;
    margin: 0 16px 0 0;
  }
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
    margin: 0 0 4px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
    padding: 4px 8px;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: center;
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
