import styled from 'styled-components';

const Button = styled.button`
  font-weight: 600;
  font-size: 12px;
  margin: 0 6px;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  background: #fcd420;
  color: #18181b;
  box-shadow: 0px 4px 12px ${({ theme }) => theme.color.element.boxShadow};
  cursor: pointer;
  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }

  &:active {
    box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
  }
`;

export default Button;
