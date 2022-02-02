import { MoreInformationContainer } from "./styles";

export const MoreInformation = () => {
  return (
    <MoreInformationContainer>
      <div className="contentContainer">
        <h3>Olá Aventureiro!!</h3>
        <p>
          <a rel="noreferrer" target="_blank" href="https://www.topragnarok.com.br/vote/18326">
            <strong>Vote</strong>&nbsp;
          </a>
          e ajude o nosso
servidor a crescer!
        </p>
        <p>Não esqueça que o nosso crescimento sempre
resultará em benefícios para todos.</p>
        <p className="kafra">Recepcionista Kafra</p>
      </div>
    </MoreInformationContainer>
  );
};
