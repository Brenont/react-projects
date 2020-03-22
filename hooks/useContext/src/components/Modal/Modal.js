import React, { useContext } from "react";
import { ModalContainer, ModalContent, Header } from "./ModalStyled";
import { ModalContext } from '../../containers/Home/Home';


const Modal = ({ status }) => {
  const close = useContext(ModalContext)

  return (
    <>
      {status ? (
        <ModalContainer>
          <ModalContent>
            <Header>
              <span onClick={() => close()}>X</span>
            </Header>
          </ModalContent>
        </ModalContainer>
      ) : null}
    </>
  );
};

export default Modal;
