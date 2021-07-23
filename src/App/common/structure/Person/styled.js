import styled from 'styled-components';

export const StyledPerson = styled.li`
  display: flex;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.element.boxShadow};
`;

export const Wrapper = styled.div`
  display: grid;
  padding: 14px;
  overflow-wrap: anywhere;
  flex-grow: 1;
  text-align: center;
  background: ${({ theme }) => theme.color.background.secondaryBackground};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    padding: 8px;
  }
`;

export const Name = styled.span`
  font-size: 18px;
  font-weight: 500;
  align-self: center;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 14px;
  }
`;

export const Role = styled.span`
  margin-top: 0.2em;
  color: ${({ theme }) => theme.color.text.secondaryText};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: 10px;
  }
`;
