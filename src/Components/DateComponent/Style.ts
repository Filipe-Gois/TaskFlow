import styled from "styled-components";
import { Theme } from "@/Styles/Theme";

export const TitleStyle = styled.h1`
  color: ${Theme.colors.whiteScale.v2};
  font-size: 2rem !important;
  font-family: ${Theme.fonts.openSans};
  text-align: center;
  font-size: 3rem;

  @media screen and (min-width: 768px) {
    font-size: 3rem !important;
  }
`;

export const DiaNumericoStyle = styled.span`
  color: #8758ff;
`;
