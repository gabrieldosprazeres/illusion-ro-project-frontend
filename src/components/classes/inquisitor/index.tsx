import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/INQUISITOR SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/INQUISITOR SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const Inquisitor = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Inquisitor</h2>
        <h3>Inquisidor</h3>
        <p>
          O Inquisidor é um membro da denominação como um agente agindo em nome
          do julgamento divino.
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
