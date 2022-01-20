import grifo from "../../Assets/FrontEnd IllusionRO/SEPARADOS/4.png";
import { Container } from "./styles";

export const ServerStatus = () => {
  return (
    <Container>
      <div className="grifoImg">
        <figure>
          <img alt="grifo" src={grifo} />
        </figure>
      </div>
      <div className="infoServer">
        <ul className="listInfo">
          <h1>
            Informações do <strong>Servidor</strong>
          </h1>
          <li>Episodio 18.1 - Sentido das Orações</li>
          <li>Rates 25x25x10x</li>
          <li>
            Quartas Classes <sup>PT-BR</sup>
          </li>
          <li>Level 250/50</li>
        </ul>
      </div>
    </Container>
  );
};
