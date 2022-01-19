import { Container } from "./styles";
import Image from "../../Assets/FrontEnd IllusionRO/SEPARADOS/ReiPoring.svg";
import { ProgressBar } from "../progressBar";
import { Chest } from "../chest";
import { useState, useEffect } from "react";
import axios from "axios";
import ArrowUp from "../../Assets/FrontEnd IllusionRO/SEPARADOS/12.png";

import { Modal } from "../modal";

export const Rewards = () => {
  const [Users, setUsers] = useState(0);
  const arr = [1, 2, 3, 4, 5];
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    axios
      .get("https://illusion-ro.herokuapp.com/api/leads/rewards")
      .then((resp) => {
        setUsers(resp.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

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

      <div className="background">
        <h3>Progresso dos prêmios da Comunidade</h3>

        <div className="progress_bar_container">
          <ProgressBar currentValue={Users} maxValue={1000} />
        </div>

        <div className="chests">
          {arr.map((vAtual, indice) => (
            <Chest key={indice} currentValue={Users} index={vAtual} />
          ))}
        </div>

        <button onClick={() => setOpenModal(true)}>Receber meus prêmios</button>

        {openModal && <Modal setOpenModal={setOpenModal} />}

        <a href="#topo">
          <img className="arrowup" src={ArrowUp} alt="" />
        </a>
      </div>
    </Container>
  );
};
