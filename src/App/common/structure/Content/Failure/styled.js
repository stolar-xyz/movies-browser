import styled, { css } from 'styled-components';
import { ReactComponent as Danger } from '../../../../assets/svgs/danger.svg';

export const Container = styled.div`
  margin-top: ${({ search }) => !search && '10%'};
  text-align: center;

  ${({ search }) =>
    search &&
    css`
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      height: 100%;
    `}
`;

export const DangerIcon = styled(Danger)`
  margin-bottom: ${({ search }) => (search ? '8px' : '24px')};
  height: auto;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    width: ${({ search }) => (search ? '15vh' : '25vw')};
    margin-bottom: 12px;
  }
`;

export const Description = styled.p`
  color: ${({ search, theme }) =>
    search ? '#000000' : theme.color.text.primaryText};
  font-size: ${({ search }) => (search ? '14px' : '22px')};
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: ${({ search }) => (search ? '12px' : '14px')};
  }

  @media (max-width: ${({ theme }) =>
      theme.tabletMax}px) and (orientation: landscape) {
    padding: ${({ search }) => search && '0 5px'};
  }
`;
