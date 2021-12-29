import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/MEISTER SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/MEISTER SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const Meister = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Meister</h2>
        <h3>Engenheiro(a)</h3>
        <p>
        Ao contrário do mecânico, Engenheiros podem lidar com robôs
        de combate automatizados em troca de engenharia mecânica.
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
