import styled from "styled-components";

const ModalContainer = styled.div`
  z-index: 10;
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.5);
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #fafafa;
  min-width: 250px;
  min-height: 250px;
  padding: 15px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
`;

const Header = styled.div`
  display: flex;
  justify-content: flex-end;
  width: 100%;

  span {
      cursor: pointer;
  }
`;

export { ModalContainer, ModalContent, Header };
