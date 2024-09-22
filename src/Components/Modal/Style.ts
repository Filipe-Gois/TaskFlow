import styled from "styled-components";
import { Theme } from "@/Styles/Theme";

export const InputDescricao = styled.textarea.attrs({
  placeholder: "Exemplo de descrição",
})`
  resize: none;
  border: 1px solid white;
  outline: none;
  background-color: transparent;
  border-radius: 1rem;
  width: 100%;
  max-width: 80%;
  height: 20rem;
  color: ${Theme.colors.whiteScale.v2};
  padding: 2.5%;
  &::placeholder {
    color: ${Theme.colors.whiteScale.v2};
  }
`;

export const FadeContainer = styled.div``;
export const ModalContainer = styled.div``;
export const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 100%;
`;
