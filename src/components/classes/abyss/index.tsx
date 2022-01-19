import logoAbyss from "../../../Assets/FrontEnd IllusionRO/SITE/ABYSS SITE/vetor.png";
import statusAbyss from "../../../Assets/FrontEnd IllusionRO/SITE/ABYSS SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const Abyss = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Desertor</h2>
            <h3>Abyss Chaser</h3>
            <p>
              Os Desertores, são a principal raça do mundo de Midgard. Eles são
              resilientes, tendo sobrevivido a um cataclismo de Ragnarök.
            </p>
          </ContainerFlex>
        </ContainerTitle>
      </ContainerLeft>
      <ContainerWrapeFlex>
        <MiddleContainer>
          <ContainerFlex>
            <img className="status" alt="statusAbyss" src={statusAbyss} />
          </ContainerFlex>
        </MiddleContainer>
        <ContainerRight>
          <ContainerFlex>
            <figure className="container-status-person">
              <img className="person" alt="person" src={logoAbyss} />
            </figure>
          </ContainerFlex>
        </ContainerRight>
      </ContainerWrapeFlex>
    </Container>
  );
};
