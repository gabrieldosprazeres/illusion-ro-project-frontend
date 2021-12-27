import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/SHADOW CROSS SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/SHADOW CROSS SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const ShadowCross = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Shadow Cross</h2>
        <h3>Retalhador</h3>
        <p>
          Shadow Crosses podem empunhar duas vezes (equipar uma arma em cada
          mão) e utilizar dos mais variados venenos para aumentar sua força.
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
