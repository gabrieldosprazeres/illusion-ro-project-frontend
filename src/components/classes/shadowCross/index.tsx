import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/SHADOW CROSS SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/SHADOW CROSS SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const ShadowCross = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Retalhador</h2>
            <h3>Shadow Cross</h3>
            <p>
              Shadow Crosses podem empunhar duas vezes (equipar uma arma em cada
              mão) e utilizar dos mais variados venenos para aumentar sua força.
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
