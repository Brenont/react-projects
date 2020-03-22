import { useState } from "react";

export const useModal = (initialState)=> {

  const [state, setState] = useState(initialState);
  
  const handleModal = () => {
    setState(!state)
  };
  
  return [handleModal, state, setState]
  
};