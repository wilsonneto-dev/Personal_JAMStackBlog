import * as S from './styles';

interface IAdvertisementProps {
  text?: string;
}

const Advertisement = ({ text }: IAdvertisementProps) => (
  <S.Wrapper>
    <p>
      {text ||
        'Caso tenha alguma dúvida ou sugestão para um vídeo ou um artigo: contato@wilsonneto.com.br'}
    </p>
  </S.Wrapper>
);

export default Advertisement;
