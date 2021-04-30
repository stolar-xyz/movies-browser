import styled from 'styled-components';

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

export const TextContent = styled.span`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
    color: #707489;
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
  color: #717487;
  margin-right: 0.5em;

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
