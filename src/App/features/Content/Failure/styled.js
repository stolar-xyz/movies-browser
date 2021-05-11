import styled from 'styled-components';
import { ReactComponent as Picture } from '../../../assets/svgs/picture.svg';

export const PictureContainer = styled.div`
  margin-top: 10%;
  display: grid;
  place-items: center;
`;

export const FailurePicture = styled(Picture)`
  width: 50%;
  max-width: 450px;
  height: auto;
`;
