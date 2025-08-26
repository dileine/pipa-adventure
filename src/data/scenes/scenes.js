import { Scene } from "../classes/scene";
import { Option } from "../classes/option";
import { Ogre, Ona } from "../npcs/npcs";
import { images } from "../../assets/assets";

const scenesLevel1 = {
  1: [
    new Scene(
      1,
      "És l'hora dels trolls",
      `${images.troll}`,
      `Et despertes amb un soroll molt fort a la porta. Mires per l'espiell i veus dos trolls i un Ogre burocràtic amb uns papers a la mà. L'Ogre comença allegir els papers ${Ogre.speak(
        "Desnonament"
      )} Abans de que puguis demanar una explicació. ets al carrer amb la teva tothicap, un entrepà d'ahir i el cap ple de preguntes.`,
      "casa"
    ),
    new Scene(
      2,
      "Desnonat",
      `${images.gotic}`,
      `Surts de casa, dones un cop d'ull a la plaça, no saps molt bé cap a on anar. Des del mig de la plaça hi ha una senyora que et mira i et fa senyals per a que vagis a parlar amb ella. És l'Ona, l'encantèria gitana, segur que et pot donar un cop de mà o si més no informació útil.`,
      "plaça",
      [
        new Option(1, "Parlar amb ella", 3),
        new Option(2, "Inspeccionar el barri", 10),
      ]
    ),
    new Scene(
      3,
      "L'Ona, l'encantèria gitana",
      `${images.ona}`,
      `L'Ona és una encatèria gitana amb un posat tranquil i amable. Té una mirada profunda, els seus ulls foscos han vist masses coses. ${Ona.speak(
        "Desnonament"
      )} `,
      "Plaça",
      [
        new Option(1, "Demanar-li ajuda i consell", 4),
        new Option(2, "Ignorar-la i seguir inspeccionant el barri", 10),
      ]
    ),
    new Scene(
      4,
      "L'Ona, l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Consell1")}`
    ),
    new Scene(
      5,
      "L'Ona, l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Consell2")}`
    ),
    new Scene(
      6,
      "L'Ona, l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Fleca")} ${Ona.speak("Biblioteca")}`
    ),
    new Scene(
      10,
      "Una volta pel barri",
      "",
      `Dones un cop d'ull a la plaça, veus un grup de gent parlant, a la cantonada la Fleca i una mica més enllà Ca la Peque, la fonda del barri."`,
      "Plaça",
      [
        new Option(2, "Entrar a la Fleca", 6),
        new Option(3, "Entrar a Ca la Peque", 7),
        new Option(4, "Anar a la biblioteca", 8),
        new Option(1, "Parlar amb el grup de gent", 9),
      ]
    ),
  ],
};

// Debugging log to check if scenesLevel1 is defined before export
console.log("Scenes Data:", scenesLevel1);

export default scenesLevel1;
