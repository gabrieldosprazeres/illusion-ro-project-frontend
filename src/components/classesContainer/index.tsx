import logoElemental from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i1.png";
import logoCardinal from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i2.png";
import logoInsquisitor from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i3.png";
import logoAbyss from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i4.png";
import logoMeister from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i5.png";
import logoBiolo from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i6.png";
import logoImperial from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i7.png";
import logoDragonKnight from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i8.png";
import logoArchMage from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i9.png";
import logoTroubadourTrouvere from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i10.png";
import logoWindHawk from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i11.png";
import logoShadowCross from "../../Assets/FrontEnd IllusionRO/SEPARADOS/i12.png";

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

import { useState } from "react";

export const ClasseContainer = () => {
  const objLogo = [
    { url: logoAbyss, classe: "abyss", id: 4 },
    { url: logoArchMage, classe: "archMage", id: 9 },
    { url: logoBiolo, classe: "biolo", id: 6 },
    { url: logoCardinal, classe: "cardinal", id: 2 },
    { url: logoDragonKnight, classe: "dragonKnight", id: 8 },
    { url: logoElemental, classe: "elemental", id: 1 },
    { url: logoImperial, classe: "imperialGuard", id: 7 },
    { url: logoInsquisitor, classe: "inquisitor", id: 3 },
    { url: logoMeister, classe: "meister", id: 5 },
    { url: logoShadowCross, classe: "shadowCross", id: 12 },
    { url: logoTroubadourTrouvere, classe: "troubadourTrouvere", id: 10 },
    { url: logoWindHawk, classe: "windHawk", id: 11 },
  ];

  interface IObjClasse {
    [key: string]: JSX.Element;
  }

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
    <div>
      <div>
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
      </div>
      <h2>
        Conheças as <strong>Quartas Classes</strong>
      </h2>
      <div>{objClasse[classeName]}</div>
    </div>
  );
};
