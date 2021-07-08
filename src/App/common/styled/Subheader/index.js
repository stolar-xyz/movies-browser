import styled, { css } from 'styled-components';

const Subheader = styled.h2`
  color: ${({ search, theme }) =>
    search ? '#000000' : theme.color.text.primaryText};
  font-size: ${({ search }) => (search ? '18px' : '36px')};
  font-weight: 600;
  margin: 0;

  ${({ extra }) =>
    extra &&
    css`
      display: flex;
      justify-content: space-between;
      align-items: center;
    `}

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: ${({ search }) => (search ? '16px' : '18px')};
    font-weight: 500;
  }
`;

export default Subheader;
