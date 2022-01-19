import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/TROUBADOUR-TROUVERE SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/TROUBADOUR-TROUVERE SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const TroubadourTrouvere = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Diva | Segrel</h2>
            <h3>Trouvere | Troubadour</h3>
            <p>
              Poetas-compositores que foram aproximadamente contemporâneos e
              influenciados pelos trovadores, mas que compuseram suas obras nos
              dialetos do norte da França.
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
