import styled from 'styled-components';
import Container from '../../../common/styled/Container';
import { ReactComponent as Danger } from '../../../assets/svgs/danger.svg';
import { Link } from 'react-router-dom';

export const StyledContainer = styled(Container)`
  text-align: center;
`;

export const DangerIcon = styled(Danger)`
  margin-bottom: 24px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 15vw;
    height: auto;
    margin-bottom: 12px;
  }
`;

export const Description = styled.p`
  font-size: 22px;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 14px;
  }
`;

export const StyledLinkButton = styled(Link)`
  border: none;
  cursor: pointer;
  text-decoration: none;
  background: #0044cc;
  padding: 16px 24px;
  color: #ffffff;
  border-radius: 5px;
  font-weight: 500;
  transition: filter 0.2s;

  &:hover {
    filter: brightness(1.2);
  }

  &:active {
    box-shadow: inset 0px 0px 5px #c1c1c1;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 10px 14px;
    font-weight: 400;
  }
`;
