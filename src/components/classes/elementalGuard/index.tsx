import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/ELEMENTAL MASTER SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/ELEMENTAL MASTER SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const ElementalGuard = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Elementalista</h2>
            <h3>Elemental Master</h3>
            <p>
              O Elementalista consegue manipular todos os elementos dentro do
              mundo de ragnarok transformando em diversas magias poderosas.
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
            <figure className="container-status-person">
              <img className="person" alt="person" src={logoPerson} />
            </figure>
          </ContainerFlex>
        </ContainerRight>
      </ContainerWrapeFlex>
    </Container>
  );
};
