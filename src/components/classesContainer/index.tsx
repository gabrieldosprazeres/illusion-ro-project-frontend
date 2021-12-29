// icons fundo brancos
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
    { url: logoAbyss, classe: "abyss", id: 4 },
    { url: logoArchMage, classe: "archMage", id: 9 },
    { url: logoBiolo, classe: "biolo", id: 6 },
    { url: logoCardinal, classe: "cardinal", id: 2 },
    { url: logoDragonKnight, classe: "dragonKnight", id: 8 },
    { url: logoElemental, classe: "elemental", id: 1 },
    { url: logoImperial, classe: "imperialGuard", id: 7 },
    { url: logoInquisitor, classe: "inquisitor", id: 3 },
    { url: logoMeister, classe: "meister", id: 5 },
    { url: logoShadowCross, classe: "shadowCross", id: 12 },
    { url: logoTroubadourTrouvere, classe: "troubadourTrouvere", id: 10 },
    { url: logoWindHawk, classe: "windHawk", id: 11 },
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

  return (
    <section>
      <ContainerClasse>
        <h2 className="title-classe">
          Conheças as <strong>Quartas Classes</strong>
        </h2>
        <ContainerIconsClasse theme={"blue"}>
          {objLogo.map((item) => {
            return (
              <figure key={item.id}>
                <img
                  alt="logo_classe"
                  onClick={() => setClassName(item.classe)}
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
