import { ButtonProps } from "../../Types";
import { ButtonConfirmarTarefaStyle, ButtonNovaTarefaStyle } from "./style";

const ButtonNovaTarefa = (buttonProps: ButtonProps) => {
  return (
    <ButtonNovaTarefaStyle {...buttonProps}>Nova tarefa</ButtonNovaTarefaStyle>
  );
};

const ButtonConfirmarTarefa = (buttonProps: ButtonProps) => {
  return (
    <ButtonConfirmarTarefaStyle {...buttonProps}>
      Confirmar tarefa
    </ButtonConfirmarTarefaStyle>
  );
};

export { ButtonNovaTarefa, ButtonConfirmarTarefa };
