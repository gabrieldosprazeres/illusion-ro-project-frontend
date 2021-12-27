import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/ELEMENTAL MASTER SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/ELEMENTAL MASTER SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const ElementalGuard = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Elemental Master</h2>
        <h3>Elementalista</h3>
        <p>
          O Elementalista consegue manipular todos os elementos dentro do mundo
          de ragnarok transformando em diversas magias poderosas.
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
