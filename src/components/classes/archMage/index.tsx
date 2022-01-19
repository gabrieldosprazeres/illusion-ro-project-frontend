import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/ARCH MAGE SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/ARCH MAGE SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const ArchMage = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Mestre Arcano</h2>
            <h3>Arch Mage</h3>
            <p>
              Mestre Arcanos contam com suas habilidades como sua principal
              fonte de dano, e tais ataques são baseados em magia e levam em
              consideração apenas a Defesa Mágica do alvo, e não sua Defesa
              Física.
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
