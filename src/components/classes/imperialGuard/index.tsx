import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/IMPERIAL GUARD SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/IMPERIAL GUARD SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const ImperialGuard = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Imperial Guard</h2>
            <h3>Guardião Imperial</h3>
            <p>
              Uma guarda imperial ou guarda do palácio é um grupo especial de
              tropas (ou um membro dele) de um império, normalmente associado
              diretamente ao imperador ou à imperatriz.
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
