import logoPerson from "../../../Assets/FrontEnd IllusionRO/SITE/IMPERIAL GUARD SITE/vetor.png";
import statusPerson from "../../../Assets/FrontEnd IllusionRO/SITE/IMPERIAL GUARD SITE/status.png";
import {
  Container,
  ContainerFlex,
  ContainerWrapeFlex,
} from "../../../styles/globalStyleClasses";

export const ImperialGuard = () => {
  return (
    <Container>
      <ContainerFlex>
        <h2>Imperial Guard</h2>
        <h3>Guardião Imperial</h3>
        <p>
          Uma guarda imperial ou guarda do palácio é um grupo especial de tropas
          (ou um membro dele) de um império, normalmente associado diretamente
          ao imperador ou à imperatriz.
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
