import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.background.secondaryBackground};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 16px;
`;

export const StyledMovie = styled.li`
  display: flex;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.element.boxShadow};
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    grid-gap: 4px;
  }
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Details = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.color.text.secondaryText};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 13px;
  }
`;
