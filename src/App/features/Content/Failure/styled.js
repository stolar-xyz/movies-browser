import styled from 'styled-components';
import { ReactComponent as Danger } from '../../../assets/svgs/danger.svg';

export const DangerIcon = styled(Danger)`
  margin-bottom: 24px;
`;

export const Description = styled.p`
  font-size: 22px;
  font-weight: 500;
  text-align: center;
  line-height: 1.4;
`;

export const Button = styled.button`
  border: none;
  cursor: pointer;
  background: #0044cc;
  padding: 16px 24px;
  color: #ffffff;
  border-radius: 5px;
  font-weight: 500;
`;
