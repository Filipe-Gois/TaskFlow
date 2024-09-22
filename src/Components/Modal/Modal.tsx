import { FormEvent } from "react";
import { ButtonConfirmarTarefa } from "../Button/Button";
import { TitleStyle } from "../DateComponent/Style";
import {
  FadeContainer,
  FormModal,
  InputDescricao,
  ModalContainer,
} from "./Style";
import "./Style.css";
import { ActionsEnum, TarefaType } from "../../Types";

type ModalProps = {
  isOpenModal: boolean;
  setIsOpenModal: (isOpenModal: boolean) => void;
  tarefaSelecionada: TarefaType | null;
  setTarefaSelecionada: (tarefa: TarefaType | null) => void;
  atualizarTarefa: () => void;
  cadastrarTarefa: () => void;
  action: ActionsEnum;
};

const Modal = (props: ModalProps) => {
  const fecharModal = () => {
    props.setIsOpenModal(false);
    props.setTarefaSelecionada(null);
  };

  return (
    <>
      <FadeContainer
        onClick={fecharModal}
        className={!props.isOpenModal ? "hide" : ""}
        id="fade"
      ></FadeContainer>
      <ModalContainer className={!props.isOpenModal ? "hide" : ""} id="modal">
        <FormModal
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
          }}
          id="form-tarefa"
          action=""
        >
          <TitleStyle>Descreva sua tarefa</TitleStyle>
          <InputDescricao
            value={
              props.tarefaSelecionada?.titulo
                ? props.tarefaSelecionada?.titulo
                : ""
            }
            // onChange={(txt) => props.setDescricaoTarefa(txt.target.value)}
            onChange={(txt) =>
              props.setTarefaSelecionada({
                ...props.tarefaSelecionada!, //"!"
                titulo: txt.target.value,
              })
            }
          />

          <ButtonConfirmarTarefa
            onClick={
              props.action === ActionsEnum.Atualizar
                ? props.atualizarTarefa
                : props.cadastrarTarefa
            }
          />
        </FormModal>
      </ModalContainer>
    </>
  );
};

export default Modal;
