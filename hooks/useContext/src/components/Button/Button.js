import React from "react";
import * as S from "./ButtonStyled";

const Button = ({ type, action, text }) => {
return <S.ButtonContainer type={type} onClick={action}>{text ? text : "My Button"}</S.ButtonContainer>;
};

export default Button;
