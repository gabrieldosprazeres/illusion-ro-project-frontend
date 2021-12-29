import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/CARDINAL SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/CARDINAL SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
  ContainerLeft,
  ContainerRight,
  MiddleContainer,
} from "../../../styles/globalStyleClasses";

import { ContainerTitle } from "./style";

export const Cardinal = () => {
  return (
    <Container>
      <ContainerLeft>
        <ContainerTitle>
          <ContainerFlex>
            <h2>Cardinal</h2>
            <h3>Cardeal</h3>
            <p>
              Um cardeal é um bispo proeminente e príncipe do Colégio dos
              Cardeais da Igreja Católica.
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
