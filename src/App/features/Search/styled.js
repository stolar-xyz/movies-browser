import styled from 'styled-components';
import { ReactComponent as Loupe } from '../../assets/svgs/loupe.svg';

export const StyledSearch = styled.form`
  display: flex;
  align-items: center;
  flex-basis: 33%;
  background: ${({ theme }) => theme.color.text.whiteText};
  border-radius: 25px;
  padding: 0 22px;

  @media (max-width: ${({ theme }) =>
      theme.mobileMax}px) and (orientation: portrait) {
    flex-basis: 100%;
    margin-top: 24px;
    padding: 0 18px;
  }
`;

export const Button = styled.button`
  display: flex;
  border: none;
  cursor: pointer;
  padding: 0;
  background: none;
  margin-right: 16px;

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    margin-right: 10px;
  }
`;

export const SearchIcon = styled(Loupe)`
  height: auto;
  color: #6c6f81;

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    width: 16px;
  }
`;

export const Label = styled.label`
  flex-grow: 1;
  padding: 10px 0;
`;

export const Field = styled.input`
  width: 100%;
  padding: 0;
  line-height: normal;
  border: none;
  background: none;

  @media (max-width: ${({ theme }) => theme.tabletMax}px) {
    font-size: 14px;
  }

  &:focus {
    outline: none;
  }
`;
