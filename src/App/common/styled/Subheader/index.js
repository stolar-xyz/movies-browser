import styled, { css } from 'styled-components';

const Subheader = styled.h2`
  color: ${({ theme }) => theme.color.text.primaryText};
  font-size: 36px;
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
    font-size: 18px;
    font-weight: 500;
  }
`;

export default Subheader;
