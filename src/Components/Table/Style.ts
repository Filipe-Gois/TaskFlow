import styled, { css } from "styled-components";
import { Theme } from "@/Styles/Theme";

type TarefaProps = {
  $TarefaCompleta?: boolean;
  $IsIcon?: boolean;
};

export const TableStyle = styled.table`
  width: 90%;
  height: 100%;
  overflow-y: scroll;
`;

export const TheadStyle = styled.thead``;

export const TrStyle = styled.tr<TarefaProps>`
  width: 100%;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 1.6rem;
  border-radius: 0.8rem;
  cursor: pointer;
  background-color: ${(props) =>
    props.$TarefaCompleta ? "#6C45CE" : Theme.colors.whiteScale.v1};
  transition: 1s ease;

  &:hover {
    scale: 1.1;
  }

  @media screen and (min-width: 768px) {
    height: 6rem;
  }
`;

export const ThStyle = styled.th``;

export const TbodyStyle = styled.tbody`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 1.5rem;
`;

export const TdStyle = styled.span<TarefaProps>`
  font-family: ${Theme.fonts.openSans};
  font-size: 1.6rem;
  ${(props) =>
    props.$IsIcon &&
    css`
      padding: 0 1rem;
    `}
  color: ${(props) =>
    props.$TarefaCompleta ? Theme.colors.whiteScale.v1 : "#25282C"};
`;

export const TarefaActionsStyle = styled.td`
  display: flex;
  align-items: center;
  gap: 1.1rem;
  width: max-content;
  height: 100%;
`;
