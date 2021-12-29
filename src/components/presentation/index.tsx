import React from "react";
import presentationImg from "../../Assets/FrontEnd IllusionRO/SEPARADOS/2.png";
import { ContainerPresentation, Background } from "./styles";

export const Presentation = () => {
  return (
    <ContainerPresentation>
      <Background>
        <div className="bubble classInformation">
          <h3>
            Quartas Classses <br /> E sistemas Liberados
          </h3>
          <span>250 / 70</span>
        </div>
        <div className="bubble translateInformation">
          <h3>
            18.1 Completo <br /> E traduzido
          </h3>
          <span>em pt-br</span>
        </div>
        <h2>
          ESTÁ CHEGANDO O SERVIDOR <br /> MAIS ATUALIZADO DO BRASIL
        </h2>
      </Background>
    </ContainerPresentation>
  );
};
