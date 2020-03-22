import React from "react";
import { Card } from "../../components/Card";
import { useModal } from "../../components/Modal/useModal";
import { Modal } from "../../components/Modal";

export const ModalContext = React.createContext();

const Home = () => {
  const [handleModal, showModal] = useModal(false);

  return (
    <>
      <ModalContext.Provider value={handleModal}>
          <Card ></Card>
          <Modal status={showModal}></Modal>
      </ModalContext.Provider>
    </>
  );
};

export default Home;
