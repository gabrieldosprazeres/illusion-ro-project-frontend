import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/ARCH MAGE SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/ARCH MAGE SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const ArchMage = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Arch Mage</h2>
        <h3>Mestre Arcano</h3>
        <p>
          Mestre Arcanos contam com suas habilidades como sua principal fonte de
          dano, e tais ataques são baseados em magia e levam em consideração
          apenas a Defesa Mágica do alvo, e não sua Defesa Física.
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
