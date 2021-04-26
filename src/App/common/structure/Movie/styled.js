import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #ffffff;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: space-between;
  padding: 16px;
  transition: filter 0.3s, box-shadow 0.3s ease-out;
`;

export const StyledMovie = styled.li`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  min-height: 650px;

  &:hover ${Wrapper} {
    filter: brightness(0.9775);
    box-shadow: 0 6px 0 0 #fcd420;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      box-shadow: 4px 0 0 0 #fcd420;
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    flex-direction: row;
    min-height: unset;
  }
`;

export const Image = styled.img`
  //example sizes
  background: darkgray;
  height: 67.5%;
  width: 100%;
  border-radius: 5px 5px 0 0;
  flex-shrink: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    border-radius: 5px 0 0 5px;
    height: 177px;
    width: 114px;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    grid-gap: 4px;
  }
`;

export const Title = styled.h3`
  font-size: 22px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 16px;
  }
`;

export const Year = styled.span`
  font-weight: 400;
  color: #71758a;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 13px;
  }
`;