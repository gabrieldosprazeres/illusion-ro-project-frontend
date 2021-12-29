import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/BIOLO SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/BIOLO SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const Biolo = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Biolo</h2>
        <h3>Geneticista</h3>
        <p>
          O Geneticista é especialista em biotecnologia, agregando a bioenergia
          das plantas para usar em suas batalhas.
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
