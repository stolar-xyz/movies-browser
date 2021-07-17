import styled from 'styled-components';

export const StyledTile = styled.div`
  color: ${({ theme }) => theme.color.text.primaryText};
  background: ${({ theme }) => theme.color.background.secondaryBackground};
  padding: 26px;
  margin-bottom: 56px; //test
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.element.boxShadow};
  border-radius: 5px;
  overflow: hidden;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    padding: 16px;
    margin-bottom: 24px; //test
  }
`;

export const Wrapper = styled.div`
  display: grid;
  grid-gap: 24px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    grid-gap: 8px;
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
