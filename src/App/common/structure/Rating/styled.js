import styled from 'styled-components';
import { ReactComponent as Star } from '../../../images/svgs/star.svg';

export const StyledRating = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: ${({ big }) => big && 'column'};
  font-size: ${({ big }) => (big ? '16px' : '14px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    font-size: ${({ big }) => (big ? '10px' : '12px')};
    flex-direction: ${({ big }) => big && 'row'};
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: baseline;
  margin-bottom: ${({ big }) => big && '16px'};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin-bottom: ${({ big }) => big && 'unset'};
  }
`;

export const StarIcon = styled(Star)`
  align-self: flex-end;
  width: ${({ big }) => (big ? '40px' : '24px')};
  height: auto;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  margin: 0 8px;
  font-weight: 500;
  font-size: ${({ big }) => (big ? '30px' : '22px')};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    margin: ${({ big }) => big && '0 2px 0 4px'};
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Limit = styled.span`
  margin-right: ${({ big }) => big || '12px'};

  @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
    display: ${({ big }) => big || 'none'};
    margin-right: ${({ big }) => big && '8px'};
  }
`;
