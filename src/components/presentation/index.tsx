import React from "react";
import presentationImg from "../../Assets/FrontEnd IllusionRO/SEPARADOS/2.png";
import { ContainerPresentation } from "./styles";

export const Presentation = () => {
  return (
    <ContainerPresentation>
      <figure>
        <img alt="Presentation_image" src={presentationImg} />
      </figure>
    </ContainerPresentation>
  );
};
