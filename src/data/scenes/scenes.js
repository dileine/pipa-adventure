import { Scene } from "../classes/scene";
import { Option } from "../classes/option";
import { Ogre, Ona } from "../npcs/npcs";

//const playerName = "Pipa";

const scenesLevel1 = {
  1: [
    new Scene(
      1,
      "desnonament",
      `Et despertes amb un soroll molt fort a la porta. Mires per l'espiell i veus dos trolls i un Ogre burocràtic ambs uns papers a la mà. L'Ogre comença allegir els papers ${Ogre.speak(
        "Desnonament"
      )} Abans de que puguis demanar una explicació. ets al carrer amb la teva tothicap, un entrpà d'ahir i el cap ple de preguntes.`,
      "Casa"
    ),
    new Scene(
      2,
      "desnonat",
      `Surts de casa, dones un cop d'ull a la plaça, no saps molt bé cap a on anar. Des del mig de la plaça hi ha una senyora que et mira i et fa senyals per a que vagis a parlar amb ella. És l'Ona, l'encantèria gitana, segur que et pot donar un cop de mà o si més no informació útil.`,
      "plaça",
      [
        new Option(1, "Parlar amb ella", 3),
        new Option(2, "Inspeccionar el barri", 4),
      ]
    ),
    new Scene(
      3,
      "Ona",
      `L'Ona és una encatèria gitana amb un posat tranquil i amable. Té una mirada profunda, els seus ulls foscos han vist masses coses. ${Ona.speak(
        "Desnonament"
      )} `,
      "Plaça",
      [new Option(1), new Option(2)]
    ),
  ],
};

export default scenesLevel1;
