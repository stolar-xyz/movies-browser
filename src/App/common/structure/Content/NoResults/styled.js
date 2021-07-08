import styled from 'styled-components';
import { ReactComponent as Picture } from '../../../../assets/svgs/picture.svg';
import Subheader from '../../../styled/Subheader';

export const StyledSubheader = styled(Subheader)`
  margin: ${({ search }) => search && '14px 14px 0'};
  font-size: ${({ search }) => search && '22px'};

  @media (max-width: ${({ theme }) => theme.mobileMax}px) {
    margin: ${({ search }) => search && '12px 12px 0'};
    font-size: ${({ search }) => search && '18px'};
  }

  @media (max-width: ${({ theme }) =>
      theme.tabletMax}px) and (orientation: landscape) {
    font-size: ${({ search }) => search && '18px'};
  }
`;

export const Wrapper = styled.div`
  display: grid;
  place-items: center;
  margin-top: ${({ search }) => !search && '10%'};
  height: ${({ search }) => search && '100%'};
`;

export const NoResultsPicture = styled(Picture)`
  width: 40%;
  max-width: 450px;
  height: auto;
`;
