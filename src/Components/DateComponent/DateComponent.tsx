import { DiaNumericoStyle, TitleStyle } from "./Style";

enum DiasSemana {
  Domingo,
  Segunda,
  Terça,
  Quarta,
  Quinta,
  Sexta,
  Sábado,
}

enum MesesDoAno {
  Janeiro,
  Fevereiro,
  Março,
  Abril,
  Maio,
  Junho,
  Julho,
  Agosto,
  Setembro,
  Outubro,
  Novembro,
  Dezembro,
}

const DateComponent = () => {
  const data = new Date();

  const dia = data.getDay();
  const diaNumerico = data.getDate();
  const mes = data.getMonth();

  return (
    <TitleStyle>
      {DiasSemana[dia]}, <DiaNumericoStyle> {diaNumerico}</DiaNumericoStyle> de{" "}
      {MesesDoAno[mes]}
    </TitleStyle>
  );
};

export default DateComponent;
