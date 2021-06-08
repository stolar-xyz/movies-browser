import styled from 'styled-components';

export const Wrapper = styled.div`
  background: ${({ theme }) => theme.color.background.secondaryBackground};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 16px;
  transition: box-shadow 0.3s ease-out;
`;

export const StyledMovie = styled.li`
  color: ${({ theme }) => theme.color.text.primaryText};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.element.boxShadow};
  min-height: 650px;
  cursor: pointer;

  &:hover ${Wrapper} {
    box-shadow: 0 6px 0 0 #fcd420;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
      box-shadow: 4px 0 0 0 #fcd420;
    }
  }

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    flex-direction: row;
    min-height: unset;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 5px 5px 0px 0px;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    height: 215px;
    width: 145px;
    border-radius: 5px 0 0 5px;
  }
`;

export const OverlayContainer = styled.div`
  height: 100%;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    height: 215px;
    min-width: 145px;
  }
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

export const Year = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.color.text.secondaryText};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 13px;
  }
`;
