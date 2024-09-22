import { FigcaptionStyle, FigureStyle, ImageStyle } from "./style";

type ImageProps = React.ImgHTMLAttributes<HTMLImageElement> & {
  textoFigcaption?: string;
};

const NotFoundImage = ({
  textoFigcaption = "Nenhuma tarefa encontrada!",
  ...rest
}: ImageProps) => (
  <FigureStyle>
    <ImageStyle
      src="/Images/notFound.png"
      alt="Imagem indicando que nada foi encontrado."
      {...rest}
    />

    <FigcaptionStyle>{textoFigcaption}</FigcaptionStyle>
  </FigureStyle>
);

export { NotFoundImage };
