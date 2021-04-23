import styled from 'styled-components';
import { ReactComponent as Star } from '../../../images/svgs/star.svg';

export const StyledTile = styled.div`
  background: #ffffff;
  padding: 26px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;

export const Image = styled.img`
  //example
  margin-right: 36px;
  float: left;
  background: darkgray;
  width: 312px;
  height: 464px;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-right: 16px;
    width: 114px;
    height: 169px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 8px;
  }
`;

export const Year = styled.span`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    color: #7e839a;
  }
`;

export const Informations = styled.div`
  display: grid;
  grid-gap: 8px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Information = styled.span`
  color: #74788b;
  margin-right: 0.5em;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Rating = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 13px;
`;

export const StarIcon = styled(Star)`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  margin: 0 8px;
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const TextContent = styled.span`
  margin-right: 12px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const Description = styled.p`
  margin: 24px 0 0;
  line-height: 1.6;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    margin: 8px 0 0;
  }
`;
