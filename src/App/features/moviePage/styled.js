import styled from 'styled-components';
import { ReactComponent as Star } from '../../images/svgs/star.svg';

export const ImageFill = styled.div`
  background: #000000;
`;

export const ImageContainer = styled.div`
  position: relative;
  max-width: 1400px;
  margin: 0 10%;
`;

export const ImageOverlay = styled.div`
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
`;

export const Image = styled.img`
  width: 100%;
`;

export const Wrapper = styled.div`
  color: #ffffff;
  position: absolute;
  bottom: 5%;
`;

export const Title = styled.h2`
  font-size: 64px;
  margin: 0 0 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`;

export const Container = styled.div`
  margin-bottom: 18px;
`;

export const StarIcon = styled(Star)`
  width: 40px;
  height: auto;

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
