import styled from 'styled-components';

export const StyledTile = styled.div`
  color: ${({ theme }) => theme.color.text.primaryText};
  background: ${({ theme }) => theme.color.background.secondaryBackground};
  padding: 26px;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.element.boxShadow};
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    padding: 16px;
  }
`;

export const Image = styled.img`
  margin-right: 36px;
  float: left;
  width: 30%;
  height: 100%;
  border-radius: 5px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    margin-right: 16px;
    min-width: 130px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    grid-gap: 8px;
  }
`;

export const TextContent = styled.span`
  font-size: 22px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 13px;
    color: ${({ theme }) => theme.color.text.secondaryText};
  }
`;

export const Informations = styled.div`
  display: grid;
  grid-gap: 8px;
  font-size: 18px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 12px;
  }
`;

export const Information = styled.span`
  color: ${({ theme }) => theme.color.text.secondaryText};
  margin-right: 0.5em;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    display: none;
  }
`;

export const Description = styled.p`
  margin: 24px 0 0;
  line-height: 1.6;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 14px;
    margin: 8px 0 0;
  }
`;
