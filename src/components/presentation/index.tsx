import { ContainerPresentation, Background } from "./styles";

export const Presentation = () => {
  return (
    <ContainerPresentation>
      <Background>
        <div className="bubble classInformation">
          <h3>
            Quartas Classses <br /> E sistemas Liberados
          </h3>
          <span>250 / 50</span>
        </div>
        <div className="bubble translateInformation">
          <h3>
            Episódio 18.1 <br /> Completo e Traduzido
          </h3>
          <span>Em PT-BR</span>
        </div>
        <h2>
          ESTÁ CHEGANDO O SERVIDOR <br /> MAIS ATUALIZADO DO BRASIL
        </h2>
      </Background>
    </ContainerPresentation>
  );
};
