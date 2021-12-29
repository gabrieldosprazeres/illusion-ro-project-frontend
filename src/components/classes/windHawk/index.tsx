import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/WIND HAWK SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/WIND HAWK SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const WindHawk = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Windhawk</h2>
            <h3>Patrulheiro</h3>
            <p>
              Utilizando de Arcos e Bestas, com suas flechas de diversos
              elementos, o Patrulheiro está sempre com seus companheiros de
              jornada causando um grande dano a distância.
            </p>
          </ContainerFlex>
        </ContainerTitle>
      </ContainerLeft>
      <ContainerWrapeFlex>
        <MiddleContainer>
          <ContainerFlex>
            <img className="status" alt="statusAbyss" src={statusPerson} />
          </ContainerFlex>
        </MiddleContainer>
        <ContainerRight>
          <ContainerFlex>
            <img className="person" alt="personAbyss" src={logoPerson} />
          </ContainerFlex>
        </ContainerRight>
      </ContainerWrapeFlex>
    </Container>
  );
};
