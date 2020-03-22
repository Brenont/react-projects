import styled, { css } from "styled-components";


const types = {
  disabled: css`
    cursor: not-allowed;
    background-color: maroon;
  `,
  primary: css`
    cursor: pointer;
    background-color: ${props => props.theme.colors.primary};
    color: white;
  `
};

export const ButtonContainer = styled.div`
  display: flex;
  ${props => types[props.type]};
  padding: 10px;
  border-radius: 2px;
  box-shadow: 2px 2px 7px 2px #adadad;
`;
