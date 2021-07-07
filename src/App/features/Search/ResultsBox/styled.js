import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 40px;
  right: 0px;
  width: 100%;
  height: 50vh;
  border-radius: 0 0 5px 5px;
  overflow: auto;
  background: inherit;
  z-index: 1;

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: #cccccc;
    border-radius: 5px;
  }
`;
