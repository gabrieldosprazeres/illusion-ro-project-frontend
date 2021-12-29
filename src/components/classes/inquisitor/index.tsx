import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/INQUISITOR SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/INQUISITOR SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const Inquisitor = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Inquisitor</h2>
            <h3>Inquisidor</h3>
            <p>
              O Inquisidor é um membro da denominação como um agente agindo em
              nome do julgamento divino.
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
