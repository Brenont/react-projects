import React from "react";
import { ModalContainer, ModalContent, Header } from "./ModalStyled";

const Modal = ({ closeAction }) => {

  return (
      <ModalContainer >
        <ModalContent>
          <Header>
            <span onClick={() => closeAction()}>X</span>
          </Header>

          
        </ModalContent>
      </ModalContainer>
  );
};

export default Modal;


