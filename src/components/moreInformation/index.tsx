import { MoreInformationContainer } from "./styles";

export const MoreInformation = () => {
  return (
    <MoreInformationContainer>
      <div className="contentContainer">
        <h3>Olá Aventureiros</h3>
        <p>
          <a href="/">
            <strong>Clique aqui</strong>&nbsp;
          </a>
          e tenha informações sobre <br />o nosso servidor de{" "}
          <strong>Ragnarok Online</strong>!
        </p>
        <strong>Recepcionista Kafra</strong>
      </div>
    </MoreInformationContainer>
  );
};
