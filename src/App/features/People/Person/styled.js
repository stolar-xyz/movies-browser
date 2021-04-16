import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 16px;
  transition: filter 0.3s, box-shadow 0.3s ease-out;
`;

export const StyledPerson = styled.li`
  display: flex;
  background: #ffffff;
  flex-direction: column;
  box-shadow: 0px 4px 12px rgba(186, 199, 213, 0.5);
  min-height: 330px;

  &:hover ${Wrapper} {
    filter: brightness(0.9775);
    box-shadow: 0 6px 0 0 #fcd420;
  }
`;

export const Image = styled.img`
  //example sizes
  background: darkgray;
  height: 255px;
  border-radius: 5px 5px 0 0;
`;

export const Name = styled.h3`
  font-size: 20px;
  font-weight: 500;
  margin: 0;
`;
