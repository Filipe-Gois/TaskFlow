import { useCallback, useEffect, useState } from "react";
import DateComponent from "../../Components/DateComponent/DateComponent";
import SearchBar from "../../Components/SearchBar/SearchBar";
import { Container, ContainerBottom, ContainerTop, MainStyle } from "./Style";
import { ButtonNovaTarefa } from "../../Components/Button/Button";
import { ActionsEnum, TarefaType } from "../../Types";
import Table from "../../Components/Table/Table";
import Modal from "../../Components/Modal/Modal";
import { NotFoundImage } from "../../Components/Image/Image";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

type FormValues = z.infer<typeof schema>;

const schema = z.object({
  textoPesquisa: z.string(),
  inputModal: z.string().min(1),
});

const Home = () => {
  const [action, setAction] = useState(ActionsEnum.Atualizar);
  const [tarefas, setTarefas] = useState<TarefaType[]>([
    // { completa: true, idTarefa: Math.random.toString(), titulo: "akjbndfjkas" },
  ]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const [textoPesquisa, setTextoPesquisa] = useState<string>("");
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);
  const [tarefaSelecionada, setTarefaSelecionada] = useState<TarefaType | null>(
    null
  );

  const [tarefasFiltradas, setTarefasFiltradas] = useState<TarefaType[]>([]);

  // const tarefasFiltradas =
  //   textoPesquisa.trim().length > 0
  //     ? tarefas.filter((tarefa) =>
  //         tarefa.titulo.toLowerCase().includes(textoPesquisa.toLowerCase())
  //       )
  //     : [];

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
      setTarefas(
        tarefas.map((tarefa) =>
          tarefa.idTarefa === tarefaSelecionada.idTarefa
            ? { ...tarefa, titulo: tarefaSelecionada.titulo }
            : tarefa
        )
      );
      console.log(tarefas);
      console.log("Tarefa atualizada com sucesso!");
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
      return;
    }
    alert("Essa tarefa não existe!");
  };

  useEffect(() => {
    filtrarTarefas();
  }, [filtrarTarefas]);

  console.log("renderizou");

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
              // setDados={
              //   textoPesquisa.length > 0 ? setTarefasFiltradas : setTarefas
              // }
              handleAtualizarTarefa={handleAtualizarTarefa}
              handleExcluirTarefa={excluirTarefa}
              // dados={tarefas}
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
        onClickButton={
          action === ActionsEnum.Atualizar ? atualizarTarefa : adicionarTarefa
        }
      />
    </MainStyle>
  );
};

export default Home;
