import { z } from "zod";

export type TarefaType = {
  idTarefa: string;
  titulo: string;
  completa: boolean;
};
export type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  texto?: string;
};

export enum ActionsEnum {
  Cadastrar,
  Atualizar,
}
export const schema = z.object({
  textoPesquisa: z.string(),
  inputModal: z.string().min(1, "Informe um nome à tarefa!"),
});

export type FormValues = z.infer<typeof schema>;
