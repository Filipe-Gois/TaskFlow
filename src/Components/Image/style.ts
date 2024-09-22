import styled from "styled-components";
import { Theme } from "@/Styles/Theme";
export const ImageStyle = styled.img`
  max-width: 50rem;
  height: 21rem;
  border-radius: 0.8rem;
`;

export const FigureStyle = styled.figure`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const FigcaptionStyle = styled.figcaption`
  color: ${Theme.colors.whiteScale.v1};
  text-align: center;
  font-size: 1.5rem;
`;
