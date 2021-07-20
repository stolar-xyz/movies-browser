import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const ListItem = styled.li`
  padding: 16px;
  border-top: 1px solid #cccccc;
  background: inherit;

  &:hover {
    filter: brightness(0.95);
  }

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    padding: 8px;
  }
`;

export const StyledLink = styled(Link)`
  display: flex;
  text-decoration: none;
  color: #000000;
  align-items: center;
`;

export const Text = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 0;

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    font-size: 13px;
  }
`;
