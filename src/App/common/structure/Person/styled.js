import styled from 'styled-components';

export const Wrapper = styled.div`
  padding: 16px;
  overflow-wrap: anywhere;
  flex-grow: 1;
  text-align: center;
  transition: box-shadow 0.3s ease-out;
  background: ${({ theme }) => theme.color.background.secondaryBackground};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    padding: 8px;
  }
`;

export const StyledPerson = styled.li`
  color: ${({ theme }) => theme.color.text.primaryText};
  display: flex;
  flex-direction: column;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.element.boxShadow};
  border-radius: 5px 5px 0 0;
  cursor: pointer;

  &:hover ${Wrapper} {
    box-shadow: 0 6px 0 0 #fcd420;

    @media (max-width: ${({ theme }) => theme.mobileMax}px) {
      box-shadow: 0 4px 0 0 #fcd420;
    }
  }
`;

export const Image = styled.img`
  //example sizes
  background: darkgray;
  height: 295px;
  width: 100%;
  border-radius: 5px 5px 0 0;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    height: 195px;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Role = styled.span`
  display: block;
  margin-top: 8px;
  font-size: 16px;
  color: ${({ theme }) => theme.color.text.secondaryText};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 12px;
    margin-top: 4px;
  }
`;
