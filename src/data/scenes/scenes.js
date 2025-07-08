import { Scene } from "../classes/scene";
import { Option } from "../classes/option";
import { Mar, Ogre } from "../npcs/npcs";
//import { Ogre } from "../enemies/enemies";

//const playerName = "Pipa";

const scenesLevel1 = {
  1: [
    new Scene(
      1,
      "Avís_desnonament",
      ` ${Mar.speak("intro")} ${Ogre.speak("Desnonament1")} `,
      "Casa",
      [
        new Option(
          1,
          "Obres la porta, agafes l'ordre de desnonament i la teva 'tothicap' que ja tenies preparada amb tot lo necessari i marxes.",
          2,
          [{ id: "carta", quantity: 1 }]
        ),
        new Option(
          2,
          "Esperes a veure si marxa, no et faran fora de casa tan fàcilment.",
          3
        ),
      ]
    ),
    new Scene(
      2,
      "Desnonament",
      `Surts de casa, dones un cop d'ull a la plaça, no saps molt bé cap a on anar. Des del mig de la plaça hi ha una senyora que et mira i et fa senyals per a que vagis a parlar amb ella. És l'Ona, l'encantèria gitana, segur que et pot donar un cop de mà o si més no informació útil.`,
      "Plaça del barri",
      [
        new Option(1, "Vas a la fonda a demanar una habitació.", 4),
        new Option(2, "Vas a parlar amb l'Ona.", 5),
      ]
    ),
    new Scene(3, "Els trolls"),
    new Scene(4, "Ca La Peque"),
    new Scene(5, "Plaça del barri", ``),
  ],
};

export default scenesLevel1;
