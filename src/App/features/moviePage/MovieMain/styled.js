import styled from 'styled-components';
import { ReactComponent as Star } from '../../../images/svgs/star.svg';

export const WallpaperFill = styled.div`
  background: #000000;
`;

export const WallpaperContainer = styled.div`
  position: relative;
  max-width: 1368px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 5%;
  }
`;

export const WallpaperOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  background: linear-gradient(
        270deg,
        rgb(0, 0, 0) 14.11%,
        rgba(0, 0, 0, 0.875) 15.08%,
        rgba(0, 0, 0, 0.72) 16.51%,
        rgba(0, 0, 0, 0.294) 19.99%,
        rgba(0, 0, 0, 0.16) 21.88%,
        rgba(0, 0, 0, 0) 25.68%
      )
      center center / 140%,
    linear-gradient(
        90deg,
        rgb(0, 0, 0) 13.6%,
        rgba(0, 0, 0, 0.984) 14.58%,
        rgba(0, 0, 0, 0.97) 15.44%,
        rgba(0, 0, 0, 0.867) 16.3%,
        rgba(0, 0, 0, 0.23) 22.87%,
        rgba(0, 0, 0, 0) 26.64%
      )
      center center / 140%,
    linear-gradient(
      rgb(0, 0, 0) 0%,
      rgba(0, 0, 0, 0.69) 4.66%,
      rgba(0, 0, 0, 0.44) 9.34%,
      rgba(0, 0, 0, 0.208) 15.16%,
      rgba(0, 0, 0, 0) 24.22%
    ),
    linear-gradient(
      189.44deg,
      rgba(0, 0, 0, 0) 58.48%,
      rgba(0, 0, 0, 0.106) 63.17%,
      rgba(0, 0, 0, 0.235) 68.85%,
      rgba(0, 0, 0, 0.494) 78.08%,
      rgba(0, 0, 0, 0.74) 85.86%,
      rgb(0, 0, 0) 92.87%
    );
`; //+

export const Wallpaper = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

export const Wrapper = styled.div`
  color: #ffffff;
  position: absolute;
  left: 5%;
  bottom: 5%;
`;

export const Title = styled.h2`
  font-size: 64px;
  margin: 0 0 24px;
  overflow-wrap: anywhere;

  @media (max-width: ${({ theme }) => theme.breakpoints.tabletMax}px) {
    margin: 0 0 14px;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`;

export const Details = styled.div`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: flex;
    align-items: baseline;
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  margin: 0 0 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: 0 8px 0 0;
  }
`;

export const StarIcon = styled(Star)`
  width: 40px;
  height: auto;
  align-self: flex-end;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  font-weight: 500;
  font-size: 30px;
  margin: 0 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
    font-weight: 600;
    margin: 0 2px 0 4px;
  }
`;

export const TextContent = styled.span`
  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 10px;
  }
`;

export const StyledMovieTile = styled.div`
  background: #ffffff;
  padding: 26px;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 16px;
  }
`;

export const Poster = styled.img`
  //example
  display: block;
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

export const TileWrapper = styled.div`
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

export const InformationsWrapper = styled.div`
  display: grid;
  grid-gap: 8px;
`;

export const Informations = styled.div`
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Information = styled.span`
  color: #74788b;
  margin-right: 10px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: none;
  }
`;

export const InformationDetails = styled.span``;

export const Rating = styled.div`
  display: flex;
  align-items: flex-end;
  font-size: 13px;
`;

export const SmallStarIcon = styled(Star)`
  width: 24px;
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
  }
`;

export const TileRate = styled.span`
  margin: 0 8px;
  font-weight: 500;
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-weight: 600;
    font-size: 13px;
  }
`;

export const TileRateExtra = styled.span`
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
  }
`;
