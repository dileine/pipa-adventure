import { Scene } from "../classes/scene";
import { Option } from "../classes/option";
import { Ona, Ivan } from "../npcs/npcs";
import { images } from "../../assets/assets";
import { gameItems } from "../items/items";

const scenesLevel1 = {
  1: [
    new Scene(
      1,
      "Ordre de desnonament",
      ``,
      `Et despertes amb un sorollet. Algú t'ha passat una carta per sota de la porta. És una ordre de desnonament. 
      Tens 10 dies per aturar-lo o marxar. Si no, els trolls et facin fora a la força.`,
      "casa",
      [
        new Option(
          1,
          "És hora de fer front a la situació. Agafes la teva tothicap i surts al carrer.",
          2,
          [gameItems.carta_desnonament],
          [],
          "",
          10,
          10,
          ""
        ),
        new Option(
          2,
          "Fer barricada. Això és casa teva i no et faran fora",
          99
        ),
      ]
    ),
    new Scene(
      2,
      "Barri Gòtic",
      `${images.gotic}`,
      `Ets al carrer, a la plaça del barri. Dónes un cop d'ull, no saps per on començar. A la cantonada hi ha una dona fent senyals perquè t'acostis a parlar amb ella.`,
      "plaça",
      [
        new Option(1, "Parlar amb ella", 4),
        new Option(2, "Inspeccionar el barri", 3),
      ]
    ),
    new Scene(
      3,
      "Una volta pel barri",
      "",
      `Dones un cop d'ull a la plaça, veus un grup de gent parlant, 
      a la cantonada la Fleca i una mica més enllà Ca la Peque, 
      la fonda del barri."`,
      "Plaça",
      [
        new Option(1, "Entrar a la Fleca", 11, [gameItems.fleca_croissant]),
        new Option(2, "Entrar a Ca la Peque", 12),
        new Option(3, "Anar a la biblioteca", 13, [
          gameItems.informacio_voltor,
        ]),
        new Option(4, "Parlar amb el grup de gent", 14, [
          gameItems.pamflet_resistencia,
        ]),
      ]
    ),
    new Scene(
      4,
      "L'Ona, l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Desnonament")} `,
      "Plaça",
      [
        new Option(1, "Demanar-li ajuda i consell", 5),
        new Option(2, "Seguir inspeccionant el barri", 9),
      ]
    ),
    new Scene(
      5,
      "L'Ona, l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Consell1")}`,
      "plaça",
      [
        new Option(
          1,
          "Pregunta on pots aconseguir informació sobre aquest A. Voltor",
          6
        ),
        new Option(2, "Pregunta sobre altres veïns afectats", 7),
        new Option(3, "Pregunta on pots trobar aliats", 8),
      ]
    ),
    new Scene(
      6,
      "L'Ona, l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Joana")}`,
      "plaça",
      [
        new Option(2, "Pregunta sobre altres veïns afectats", 7),
        new Option(3, "Pregunta on pots trobar aliats", 9),
      ]
    ),
    new Scene(
      7,
      "L'Ona l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Fleca")}`
    ),
    new Scene(
      8,
      "L'Ona l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Fonda")}`
    ),
    new Scene(
      9,
      "L'Ona l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Biblioteca")}`
    ),
    new Scene(
      10,
      "L'Ona l'encantèria gitana",
      `${images.ona}`,
      `${Ona.speak("Kasal")}`,
      "plaça"
    ),
    new Scene(
      11,
      "La fleca",
      `${images.ona}`, // Placeholder image, replace with actual image of the bakery
      `Iván, el forner et saluda amb un somriure: ${Ivan.speak("Salutacio")}`,
      "Fleca"
    ),
    new Scene(12, "Ca la Peque"),
    new Scene(13, "BAB: Biblioteca Arcana de Barcelona"),
    new Scene(14, "Els veïns del Gòtic"),
    new Scene(15, "El Kasal"),

    new Scene(
      99,
      "Final del joc: trolls",
      "",
      `El trolls han tirat la teva porta a terra i han entrat a casa teva. Avui passaràs la nit al calabós`,
      "calabòs"
    ),
  ],
};

export default scenesLevel1;
