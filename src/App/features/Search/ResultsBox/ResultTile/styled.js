import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Wrapper = styled(Link)`
  display: flex;
  padding: 16px;
  border-top: 1px solid #cccccc;
  text-decoration: none;
  color: #000000;
  align-items: center;
  background: inherit;

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    padding: 8px;
  }

  :hover {
    filter: brightness(0.95);
  }
`;

export const Text = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    font-size: 13px;
  }
`;
