import React from "react";
import moreinformaton from "../../Assets/FrontEnd IllusionRO/SEPARADOS/3.png";
import { FigureContainer } from "./styles";

export const MoreInformation = () => {
  return (
    <section onClick={() => console.log("redirecionar")}>
      {/* no modelo do psb indica um redirecionamento de pagina, deixei o onClick esperando o redirecionamento */}
      <FigureContainer>
        <img alt="More_information_imgge" src={moreinformaton} />
      </FigureContainer>
    </section>
  );
};
