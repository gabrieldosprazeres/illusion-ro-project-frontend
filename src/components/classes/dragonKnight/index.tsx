import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/DRAGON KNIGHT SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/DRAGON KNIGHT SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const DragonKinght = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Cavaleiro Dracônico</h2>
            <h3>Dragon Knight</h3>
            <p>
              Os Cavaleiros Dracônicos são um antigo grupo dos guerreiros mais
              habilidosos de Midgard.
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
