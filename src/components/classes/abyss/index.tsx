import logoAbyss from "../../../Assets/FrontEnd IllusionRO/SITE/ABYSS SITE/vetor.png";
import statusAbyss from "../../../Assets/FrontEnd IllusionRO/SITE/ABYSS SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const Abyss = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Abyss Chaser</h2>
        <h3>Desertor</h3>
        <p>
          Os Desertores, são a principal raça do mundo de Midgard. Eles são
          resilientes, tendo sobrevivido a um cataclismo de Ragnarök.
        </p>
      </ContainerFlex>
      <ContainerWrapeFlex>
        <ContainerFlex>
          <img className="status" alt="statusAbyss" src={statusAbyss} />
        </ContainerFlex>
        <ContainerFlex>
          <img className="person" alt="personAbyss" src={logoAbyss} />
        </ContainerFlex>
      </ContainerWrapeFlex>
    </Container>
  );
};
