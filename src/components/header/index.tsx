import React from "react";
import logo from "../../Assets/FrontEnd IllusionRO/SEPARADOS/1.png";
import { ContainerHeader, ContainerLogo } from "./styles";

export const Header = () => {
  return (
    <ContainerHeader>
      <ContainerLogo>
        <img alt="Logo" src={logo} id="topo" />
      </ContainerLogo>
    </ContainerHeader>
  );
};
