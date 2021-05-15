import styled from 'styled-components';
import Container from '../../../common/styled/Container';
import { ReactComponent as Danger } from '../../../assets/svgs/danger.svg';

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

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background: #0044cc;
  padding: 16px 24px;
  color: #ffffff;
  border-radius: 5px;
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: 12px;
    padding: 10px 14px;
    font-weight: 400;
  }
`;
