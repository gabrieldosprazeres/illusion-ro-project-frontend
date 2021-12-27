import { Container } from "./styles";
import Image from "../../Assets/FrontEnd IllusionRO/SEPARADOS/ReiPoring.png";
import { ProgressBar } from "../progressBar";
import { Chest } from "../chest";
import { useState } from "react";

export const Rewards = () => {
  // const [index,setIndex] = useState(1)
  const arr = [1, 2, 3, 4, 5];

  return (
    <Container>
      <h2>Faça seu pré-registro e receba recompensas da comunidade</h2>
      <p>
        Os aventureiros que fizeram seu pré-cadastro preencherão uma barra de
        progresso, a cada cadastro avançaremos nesta barra até a recompensa
        final.
      </p>

      <div className="image">
        <img src={Image} alt="imagem" />
      </div>

      <h3>Progresso dos prêmios da Comunidade</h3>
      <div className="progress_bar_container">
        <ProgressBar currentValue={40} maxValue={800} />
      </div>

      <div className="chests">
        {arr.map((vAtual, indice) => (
          <Chest key={indice} currentValue={370} index={vAtual} />
        ))}
      </div>

      <button>Receber meus prêmios</button>
    </Container>
  );
};
