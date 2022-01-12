import {
  ContainerDiscord,
  ContainerFormImagem,
  ContainerImagem,
  ContainerModal,
} from "./style";
import imagem from "../../Assets/FrontEnd IllusionRO/ITEMS-REGISTER/2/POPUP01.png";
import discord from "../../Assets/FrontEnd IllusionRO/ITEMS-REGISTER/2/DISCORD-BOTAO.png";

export const Discord = ({ setOpenDiscord }: any) => {
  return (
    <ContainerModal>
      <ContainerFormImagem>
        <button className="closedModal" onClick={() => setOpenDiscord(false)}>
          X
        </button>
        <h3>Parabéns! Seu cadastro foi concluído com sucesso!</h3>
        <h4>Participe agora mesmo do nosso Discord!</h4>
        <div className="sub-container">
          <ContainerImagem>
            <figure>
              <img alt="imagem" src={imagem} />
            </figure>
          </ContainerImagem>
          <ContainerDiscord>
            <figure>
              <a
                rel="noreferrer"
                target="_blank"
                href="https://discord.gg/C2RN67YGRp"
              >
                <img alt="discord" src={discord} />
              </a>
            </figure>
          </ContainerDiscord>
        </div>
      </ContainerFormImagem>
    </ContainerModal>
  );
};
