import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
  flex-grow: 1;
  text-align: center;
  transition: box-shadow 0.3s ease-out;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    padding: 8px;
  }
`;

export const StyledPerson = styled.li`
  display: flex;
  background: #ffffff;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  border-radius: 5px 5px 0 0;

  &:hover ${Wrapper} {
    box-shadow: 0 6px 0 0 #fcd420;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      box-shadow: 0 4px 0 0 #fcd420;
    }
  }
`;

export const Image = styled.img`
  //example sizes
  background: darkgray;
  height: 295px;
  border-radius: 5px 5px 0 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    height: 195px;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Role = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 16px;
  color: #7e839a;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    margin-top: 4px;
  }
`;
