import styled from "styled-components";
import { Theme } from "@/Styles/Theme";

export const ButtonNovaTarefaStyle = styled.button`
  background-color: #6c45ce;
  border: 2px solid ${Theme.colors.whiteScale.v2};
  height: 5rem;
  width: 100%;
  max-width: 20rem;
  color: white;
  outline: none;
  border-radius: 0.8rem;
  font-size: 1.8rem;
  align-self: flex-end;
  cursor: pointer;
`;

export const ButtonConfirmarTarefaStyle = styled(ButtonNovaTarefaStyle)`
  height: 4.5rem;
  width: 100%;
  max-width: 26rem;
  align-self: center;
`;
