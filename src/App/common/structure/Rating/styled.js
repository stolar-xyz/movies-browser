import styled from 'styled-components';
import { ReactComponent as Star } from '../../../assets/svgs/star.svg';

export const StyledRating = styled.div`
  white-space: nowrap;
  font-size: ${({ big }) => !big && '14px'};
  margin-top: ${({ small }) => small && '16px'};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    font-size: ${({ big }) => (big ? '10px' : '12px')};
  }
`;

export const StarIcon = styled(Star)`
  width: ${({ big }) => big && '40px'};
  height: auto;
  vertical-align: bottom;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    width: 16px;
  }
`;

export const Rate = styled.span`
  margin: ${({ small }) => (small ? '0 12px' : '0 8px')};
  font-size: ${({ big }) => (big ? '30px' : '18px')};
  font-weight: 500;

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    margin: ${({ big }) => big && '0 2px 0 6px'};
    margin: ${({ small }) => small && '0 8px'};
    font-weight: 600;
    font-size: 14px;
  }
`;

export const Limit = styled.span`
  display: ${({ big }) => !big && 'none'};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    margin-right: ${({ big }) => big && '8px'};
  }
`;

export const Votes = styled.span`
  color: ${({ small, theme }) => small && theme.color.text.secondaryText};
  display: ${({ big }) => big && 'block'};
  margin-top: ${({ big }) => big && '16px'};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    display: ${({ big }) => big && 'unset'};
  }
`;
