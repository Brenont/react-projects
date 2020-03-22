import React, { useState } from "react";
import { Card } from "../../components/Card";
import { useModal } from "../../components/Modal/useModal";
import { Modal } from "../../components/Modal";

export const ModalContext = React.createContext();

const Home = () => {
  const [showModal, setShowModal, handleModal] = useModal(false);

  return (
    <>
      <ModalContext.Provider value={handleModal}>
          <Card ></Card>
          {showModal ? <Modal closeAction={handleModal}></Modal> : null}
      </ModalContext.Provider>
    </>
  );
};

export default Home;
