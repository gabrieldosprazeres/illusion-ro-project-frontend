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
            <h2>Dragon Knight</h2>
            <h3>Cavaleiro Dracônico</h3>
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
            <img className="person" alt="personAbyss" src={logoPerson} />
          </ContainerFlex>
        </ContainerRight>
      </ContainerWrapeFlex>
    </Container>
  );
};
