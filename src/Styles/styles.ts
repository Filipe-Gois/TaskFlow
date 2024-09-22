import styled from "styled-components";
import { Theme } from "./Theme";

export const HomeStyle = styled.div``;
export const GridStyle = styled.div``;

export const Container = styled.section`
  background-color: ${Theme.colors.secondary};
  width: 75vw;
  height: calc(80vh - 5rem);
  border-radius: 0.8rem;
  padding: 4rem 2rem;

  @media screen and (min-width: 768px) {
    padding: 4rem 3.5rem;
  }
`;

export const MainStyle = styled.main`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${Theme.colors.primary};
  padding: 0 12.5vw;
  gap: 1rem;
`;

export const ContainerTop = styled.div`
  width: 100%;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 7rem;
`;

// Estilo para o ContainerBottom
export const ContainerBottom = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow-y: auto; /* Adiciona o scroll vertical */
  max-height: calc(
    50vh - 5rem - 7rem
  ); /* Define a altura máxima do ContainerBottom */
  padding-right: 1rem;
`;
