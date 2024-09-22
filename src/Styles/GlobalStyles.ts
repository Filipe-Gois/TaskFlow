"use client";
import { createGlobalStyle } from "styled-components";
import { Theme } from "@/Styles/Theme";

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Open Sans';
    src: url('https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;700&display=swap');
  }

  * {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
      font-family: "Open Sans", sans-serif !important;

      
  /* Estilo do scrollbar para navegadores WebKit */
  ::-webkit-scrollbar {
    width: 12px; /* Largura do scrollbar */
  }

  ::-webkit-scrollbar-track {
    background: red; /* Cor do track (fundo do scrollbar) */
    border-radius: 10px; /* Arredonda as bordas do track */
  }

  ::-webkit-scrollbar-thumb {
    background-color: #888; /* Cor do polegar do scrollbar */
    border-radius: 10px; /* Arredonda as bordas do polegar */
    border: 3px solid red; /* Adiciona uma borda ao polegar */
  }

  ::-webkit-scrollbar-thumb:active {
    background-color: red; /* Cor ao clicar no polegar */
  }

  /* Estilos para Firefox */
  scrollbar-width: thin; /* Define a largura do scrollbar */
  scrollbar-color: white ${Theme.colors.primary}; /* Define as cores do polegar e da trilha */
  }

  html {
      font-size: 62.5%;
      font-family: "Open Sans", sans-serif !important;
      font-weight: 700;
  }
`;

export default GlobalStyles;
