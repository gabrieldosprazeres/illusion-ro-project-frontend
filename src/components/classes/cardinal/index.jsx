import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/CARDINAL SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/CARDINAL SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const Cardinal = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Cardinal</h2>
        <h3>Cardeal</h3>
        <p>
        Um cardeal é um bispo proeminente e príncipe do Colégio dos Cardeais da Igreja Católica.
        </p>
      </ContainerFlex>
      <ContainerWrapeFlex>
        <ContainerFlex>
          <img className="status" alt="statusAbyss" src={statusPerson} />
        </ContainerFlex>
        <ContainerFlex>
          <img className="person" alt="personAbyss" src={logoPerson} />
        </ContainerFlex>
      </ContainerWrapeFlex>
    </Container>
  );
};
