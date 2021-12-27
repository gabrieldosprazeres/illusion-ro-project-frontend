/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { MoreInformationContainer } from "./styles";

export const MoreInformation = () => {
  return (
    <MoreInformationContainer>
      <div className="contentContainer">
        <h3>Olá Aventureiros</h3>
        <p>
          <a href="/">
            <strong>Clique aqui</strong>&nbsp;
          </a>
          e tenha informações sobre <br />o nosso servidor de Ragnarok Online!
        </p>
        <p>Recepcionista Kafra</p>
      </div>
    </MoreInformationContainer>
  );
};
