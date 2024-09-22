import styled from "styled-components";
import { Theme } from "@/Styles/Theme";

export const SearchBarStyle = styled.div`
  border-radius: 0.8rem;
  border: 0.2rem solid ${Theme.colors.whiteScale.v2};
  width: 100%;
  height: 4.5rem;
  display: flex;
  align-items: center;
  padding: 0 5%;

  @media screen and (min-width: 768px) {
    max-width: 31rem;
    align-self: center;
    padding: 0 10px;
  }
`;

export const SearchInputStyle = styled.input.attrs({
  placeholder: "Procurar tarefa",
})`
  outline: none;
  background-color: transparent;
  border: none;
  color: ${Theme.colors.whiteScale.v2};
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  padding-left: 1rem;
  text-align: end;
  &::placeholder {
    color: ${Theme.colors.whiteScale.v2};
  }
`;
