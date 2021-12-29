import logoElemental from "../../Assets/iconClasse/Elemental.png";
import logoInquisitor from "../../Assets/iconClasse/Inquisitor.png";
import logoCardinal from "../../Assets/iconClasse/Cardinal.png";
import logoAbyss from "../../Assets/iconClasse/Abyss.png";
import logoMeister from "../../Assets/iconClasse/Meister.png";
import logoBiolo from "../../Assets/iconClasse/Biolo.png";
import logoImperial from "../../Assets/iconClasse/Imperial Guard.png";
import logoDragonKnight from "../../Assets/iconClasse/Dragon Knigth Site.png";
import logoArchMage from "../../Assets/iconClasse/Arch Mage Site.png";
import logoTroubadourTrouvere from "../../Assets/iconClasse/Troubadour-Trouvere Site.png";
import logoWindHawk from "../../Assets/iconClasse/Wind Hawk Site.png";
import logoShadowCross from "../../Assets/iconClasse/Shadow Cross Site.png";

import { Abyss } from "../classes/abyss";
import { ArchMage } from "../classes/archMage";
import { Biolo } from "../classes/biolo";
import { Cardinal } from "../classes/cardinal";
import { DragonKinght } from "../classes/dragonKnight";
import { ElementalGuard } from "../classes/elementalGuard";
import { ImperialGuard } from "../classes/imperialGuard";
import { Inquisitor } from "../classes/inquisitor";
import { Meister } from "../classes/meister";
import { ShadowCross } from "../classes/shadowCross";
import { TroubadourTrouvere } from "../classes/troubadourTrouvere";
import { WindHawk } from "../classes/windHawk";

import { ContainerClasse, ContainerIconsClasse } from "./style";

import { useState } from "react";

export const ClasseContainer = () => {
  interface IObjClasse {
    [key: string]: JSX.Element;
  }
  const objLogo = [
    { url: logoAbyss, classe: "abyss", id: 4, color: "#808080" },
    { url: logoArchMage, classe: "archMage", id: 9, color: "#808080" },
    { url: logoBiolo, classe: "biolo", id: 6, color: "#808080" },
    { url: logoCardinal, classe: "cardinal", id: 2, color: "#808080" },
    { url: logoDragonKnight, classe: "dragonKnight", id: 8, color: "#808080" },
    { url: logoElemental, classe: "elemental", id: 1, color: "#808080" },
    { url: logoImperial, classe: "imperialGuard", id: 7, color: "#808080" },
    { url: logoInquisitor, classe: "inquisitor", id: 3, color: "#808080" },
    { url: logoMeister, classe: "meister", id: 5, color: "#808080" },
    { url: logoShadowCross, classe: "shadowCross", id: 12, color: "#808080" },
    {
      url: logoTroubadourTrouvere,
      classe: "troubadourTrouvere",
      id: 10,
      color: "#808080",
    },
    { url: logoWindHawk, classe: "windHawk", id: 11, color: "#808080" },
  ];

  const objClasse: IObjClasse = {
    abyss: <Abyss />,
    archMage: <ArchMage />,
    biolo: <Biolo />,
    cardinal: <Cardinal />,
    dragonKnight: <DragonKinght />,
    elemental: <ElementalGuard />,
    imperialGuard: <ImperialGuard />,
    inquisitor: <Inquisitor />,
    meister: <Meister />,
    shadowCross: <ShadowCross />,
    troubadourTrouvere: <TroubadourTrouvere />,
    windHawk: <WindHawk />,
  };

  const [classeName, setClassName] = useState<string>("abyss");
  const [characters, setCharacters] = useState(objLogo);

  const handleCharactersColor = (id: number) => {
    let output = characters.map((item) => {
      if (item.id === id) {
        item.color = "#9377AD";
        if (id === 4) {
          item.color = "#5049c1";
        } else if (id === 1) {
          item.color = "#708e6d";
        } else if (id === 2) {
          item.color = "#6f9ecd";
        } else if (id === 3) {
          item.color = "#d45648";
        } else if (id === 5) {
          item.color = "#009ec6";
        } else if (id === 6) {
          item.color = "#00d893";
        } else if (id === 7) {
          item.color = "#ff4570";
        } else if (id === 8) {
          item.color = "#9e78b0";
        } else if (id === 9) {
          item.color = "#6f4b6e";
        } else if (id === 10) {
          item.color = "#008fba";
        } else if (id === 11) {
          item.color = "#73b5e5";
        } else if (id === 12) {
          item.color = "#511e52";
        }
      } else {
        item.color = "#808080";
      }
      return item;
    });
    setCharacters(output);
  };

  return (
    <section>
      <ContainerClasse>
        <h2 className="title-classe">
          Conheças as <strong>Quartas Classes</strong>
        </h2>
        <ContainerIconsClasse theme={"blue"}>
          {characters.map((item) => {
            return (
              <figure key={item.id} style={{ backgroundColor: item.color }}>
                <img
                  alt="logo_classe"
                  onClick={() => {
                    setClassName(item.classe);
                    handleCharactersColor(item.id);
                  }}
                  src={item.url}
                />
              </figure>
            );
          })}
        </ContainerIconsClasse>

        <div>{objClasse[classeName]}</div>
      </ContainerClasse>
    </section>
  );
};
