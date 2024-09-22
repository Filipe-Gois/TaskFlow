import {
  TableStyle,
  TarefaActionsStyle,
  TbodyStyle,
  TdStyle,
  TrStyle,
} from "./Style";
import { TarefaType } from "../../Types";
import CheckBox from "../CheckBox/CheckBox";
import { FaPen } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Theme } from "../../Styles/Theme";

type TableProps = {
  setDados: (dados: TarefaType[]) => void;
  dados: TarefaType[];
  handleAtualizarTarefa: (tarefa: TarefaType) => void;
  handleExcluirTarefa: (tarefa: TarefaType) => void;
};

const Table = ({
  dados,
  handleAtualizarTarefa,
  handleExcluirTarefa,
  setDados,
}: TableProps) => {
  const alterarStatusTarefa = (id: string): void => {
    setDados(
      dados.map((tarefa) =>
        tarefa.idTarefa === id
          ? { ...tarefa, completa: !tarefa.completa }
          : tarefa
      )
    );
  };

  return (
    <TableStyle>
      <TbodyStyle>
        {dados.map((tarefa) => (
          <TrStyle
            onClick={() => alterarStatusTarefa(tarefa.idTarefa)}
            $TarefaCompleta={tarefa.completa}
            key={tarefa.idTarefa}
          >
            <TarefaActionsStyle>
              <TdStyle>
                <CheckBox
                  checked={tarefa.completa}
                  onChange={(event) => {
                    event.stopPropagation();
                    alterarStatusTarefa(tarefa.idTarefa);
                  }}
                />
              </TdStyle>

              <TdStyle $TarefaCompleta={tarefa.completa}>
                {tarefa.titulo.length > 5
                  ? tarefa.titulo.substring(0, 5) + "..."
                  : tarefa.titulo}
              </TdStyle>
            </TarefaActionsStyle>
            <TarefaActionsStyle>
              <TdStyle
                $IsIcon
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.stopPropagation();
                  handleExcluirTarefa(tarefa);
                }}
              >
                <RiDeleteBin6Fill
                  size={20}
                  color={tarefa.completa ? "white" : Theme.colors.secondary}
                />
              </TdStyle>

              <TdStyle
                $IsIcon
                onClick={(event: React.MouseEvent<HTMLButtonElement>) => {
                  event.stopPropagation();
                  handleAtualizarTarefa(tarefa);
                }}
              >
                <FaPen
                  size={20}
                  color={tarefa.completa ? "white" : Theme.colors.secondary}
                />
              </TdStyle>
            </TarefaActionsStyle>
          </TrStyle>
        ))}
      </TbodyStyle>
    </TableStyle>
  );
};

export default Table;
