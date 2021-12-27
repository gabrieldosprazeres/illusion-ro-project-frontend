import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/WIND HAWK SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/WIND HAWK SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const WindHawk = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Windhawk</h2>
        <h3>Patrulheiro</h3>
        <p>
          Utilizando de Arcos e Bestas, com suas flechas de diversos elementos,
          o Patrulheiro está sempre com seus companheiros de jornada causando um
          grande dano a distância.
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
