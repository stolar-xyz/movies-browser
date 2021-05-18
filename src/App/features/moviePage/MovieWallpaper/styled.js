import styled from 'styled-components';

export const WallpaperFill = styled.div`
  background: #000000;
`;

export const WallpaperContainer = styled.div`
  position: relative;
  max-width: 1368px;
  margin: 0 auto;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
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
`;

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

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    margin: 0 0 14px;
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 24px;
    margin: 0 0 6px;
  }
`;
