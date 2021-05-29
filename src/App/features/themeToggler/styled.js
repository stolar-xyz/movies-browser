import styled, { css } from 'styled-components';

export const Toggler = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  
  ${({ clicked }) =>
    clicked &&
    css`
      ${Ball} {
        transform: translateX(calc(100% + 4px));
      }
    `}
`;

export const TogglerField = styled.span`
  display: flex;
  padding: 2px;
  border-radius: 20px;
  border: 1px solid darkgrey;
  width: 50px;
  height: 25px;
`;

export const Ball = styled.span`
  background: darkgrey;
  border-radius: 50%;
  height: 20px;
  width: 20px;
  transition: transform 0.5s;
`;
