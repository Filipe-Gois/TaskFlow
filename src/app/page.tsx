"use client";
import { useCallback, useEffect, useState } from "react";
import DateComponent from "@/Components/DateComponent/DateComponent";
import SearchBar from "@/Components/SearchBar/SearchBar";
import {
  Container,
  ContainerBottom,
  ContainerTop,
  MainStyle,
} from "@/Styles/styles";
import { ButtonNovaTarefa } from "@/Components/Button/Button";
import { ActionsEnum, TarefaType } from "@/Types/index";
import Table from "@/Components/Table/Table";
import Modal from "@/Components/Modal/Modal";
import { NotFoundImage } from "@/Components/Image/Image";

const Home = () => {
  const [action, setAction] = useState(ActionsEnum.Atualizar);
  const [tarefas, setTarefas] = useState<TarefaType[]>([]);

  const [textoPesquisa, setTextoPesquisa] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<TarefaType | null>(
    null
  );

  const [tarefasFiltradas, setTarefasFiltradas] = useState<TarefaType[]>([]);

  const abrirModal = () => setIsOpenModal(true);

  const fecharModal = () => setIsOpenModal(false);

  const limparCampos = () => {
    fecharModal();
    setTextoPesquisa("");
    setTarefaSelecionada(null);
  };

  const adicionarTarefa = (): void => {
    if (tarefaSelecionada) {
      const existeEssaTarefa = tarefas.some(
        (tarefaPercorrida) =>
          tarefaPercorrida.titulo.toLocaleLowerCase().trim() ===
          tarefaSelecionada.titulo.toLocaleLowerCase().trim()
      );

      if (existeEssaTarefa || !tarefaSelecionada) {
        alert("Essa tarefa já está cadastrada!");
        return;
      }

      const novaTarefa: TarefaType = {
        completa: false,
        idTarefa: Math.random().toString(),
        titulo: tarefaSelecionada.titulo,
      };

      setTarefas([...tarefas, novaTarefa]);
      limparCampos();
    }
  };

  const filtrarTarefas = useCallback(() => {
    setTarefasFiltradas(
      tarefas.filter((tarefa) =>
        tarefa.titulo.toLowerCase().includes(textoPesquisa.toLowerCase())
      )
    );
  }, [tarefas, textoPesquisa]);

  const excluirTarefa = (tarefa: TarefaType): void => {
    const existeEssaTarefa = tarefas.some(
      (tarefaPercorrida) => tarefaPercorrida.idTarefa === tarefa.idTarefa
    );

    if (existeEssaTarefa) {
      setTarefas(
        tarefas.filter(
          (tarefaPercorrida) => tarefaPercorrida.idTarefa !== tarefa.idTarefa
        )
      );
      fecharModal();
      return;
    }
    alert("Essa tarefa não existe!");
  };
  const atualizarTarefa = (): void => {
    if (tarefaSelecionada) {
      // Verifica se a tarefa existe pelo id
      const existeEssaTarefa = tarefas.some(
        (tarefa) => tarefa.idTarefa === tarefaSelecionada.idTarefa
      );

      if (!existeEssaTarefa) {
        alert("A tarefa que você está tentando atualizar não existe.");
        return;
      }

      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.idTarefa === tarefaSelecionada.idTarefa
            ? { ...tarefa, titulo: tarefaSelecionada.titulo }
            : tarefa
        )
      );
      limparCampos();
    }
  };

  const handleAtualizarTarefa = (tarefa: TarefaType) => {
    const existeEssaTarefa = tarefas.find(
      (tarefaAtual) => tarefaAtual.idTarefa === tarefa.idTarefa
    );

    if (existeEssaTarefa) {
      setTarefaSelecionada(existeEssaTarefa);
      abrirModal();
      console.log("Tarefa selecionada para atualização:", existeEssaTarefa);
      return;
    }

    alert("Essa tarefa não existe!");
  };

  useEffect(() => {
    filtrarTarefas();
  }, [filtrarTarefas]);

  useEffect(() => {
    if (isOpenModal && tarefaSelecionada) {
      setAction(ActionsEnum.Atualizar);
    }
  }, [action, isOpenModal]);

  return (
    <MainStyle>
      <Container>
        <ContainerTop>
          <DateComponent />
          <SearchBar
            value={textoPesquisa}
            onChange={(txt) => setTextoPesquisa(txt.target.value)}
          />
        </ContainerTop>

        <ContainerBottom>
          {tarefasFiltradas.length === 0 || tarefas.length === 0 ? (
            <NotFoundImage />
          ) : (
            <Table
              setDados={setTarefas}
              handleAtualizarTarefa={handleAtualizarTarefa}
              handleExcluirTarefa={excluirTarefa}
              dados={textoPesquisa.length > 0 ? tarefasFiltradas : tarefas}
            />
          )}
        </ContainerBottom>
      </Container>
      <ButtonNovaTarefa
        onClick={() => {
          setAction(ActionsEnum.Cadastrar);
          abrirModal();
        }}
      />

      <Modal
        tarefaSelecionada={tarefaSelecionada}
        setTarefaSelecionada={setTarefaSelecionada}
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        action={action}
        atualizarTarefa={atualizarTarefa}
        cadastrarTarefa={adicionarTarefa}
      />
    </MainStyle>
  );
};

export default Home;
