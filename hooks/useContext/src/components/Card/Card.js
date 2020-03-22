import React, { useContext } from 'react';
import * as S from './CardStyled';
import { Button } from '../Button';
import { ModalContext } from '../../containers/Home/Home';

const Card = ({ children }) => {
  const handleModal = useContext(ModalContext)

  return (
    <S.CardContainer>
      { children }
      {console.log(handleModal)}
      <Button type="primary" text="Open Modal" action={() => handleModal()}>This Modal!</Button>
    </S.CardContainer>
  );
};

export default Card;