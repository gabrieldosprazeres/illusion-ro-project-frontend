import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/TROUBADOUR-TROUVERE SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/TROUBADOUR-TROUVERE SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const TroubadourTrouvere = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Trouvere | Troubadour</h2>
        <h3>Diva | Segrel</h3>
        <p>
          Poetas-compositores que foram aproximadamente contemporâneos e
          influenciados pelos trovadores, mas que compuseram suas obras nos
          dialetos do norte da França.
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
