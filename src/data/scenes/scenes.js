import { Scene } from "../classes/scene";
import { Option } from "../classes/option";
import { Ona } from "../npcs/npcs";
import { Ogre } from "../enemies/enemies";

const playerName = "Pipa";

const scenesLevel1 = {
  1: [
    new Scene(
      1,
      "Avís_desnonament",
      `Et despertes amb un soroll molt fort a la porta. "Què collons passa?" Mires per l'espiell i veus un Ogre amb cara de pocs amics amb un sobre a la mà.`,
      "casaIntro",
      [
        new Option(1, "Obres la porta", 2, [{ id: "carta", quantity: 1 }]),
        new Option(2, "Esperes a veure si marxa", 4),
      ]
    ),
    new Scene(
      2,
      "Desnonament_1",
      `L'Orgre et dona la carta. Les teves sospites es confirmen: És un ordre de desnonament. ${Ogre.speak(
        "Desnonament1"
      )}`,
      "casaIntro",
      [
        new Option(
          1,
          "Per sort ja ho tenies tot preparat, agafes la motxila i marxes de casa",
          3,
          [
            { id: "carta", quantity: 1 },
            { id: "cantimplora", quantity: 1 },
            { id: "quinque", quantity: 1 },
          ],
          0,
          0,
          4
        ),
      ]
    ),
    new Scene(
      3,
      "Desnonament_2",
      `Surts al carrer sense saber molt bé per on començar a buscar. Necessites un lloc on dormir aquesta nit. Dones un cop d'ull al carrer A la cantonada hi ha una dona que et fa senyals per a que t'apropis.`,
      "plaçaSantJust",
      [
        new Option(1, "Parlar amb la dona", 6),
        new Option(2, "Passar de llarg i seguir caminant", 7),
      ]
    ),
    new Scene(
      4,
      "Desnonament_3",
      `Et passa la carta per sota de la porta. ${Ogre.speak("Desnonament2")}`,
      "casaIntro",
      [
        new Option(
          1,
          "Per sort ja ho tenies tot preparat, agafes la motxila, guardes la carta i marxes de casa",
          3,
          [
            { id: "carta", quantity: 1 },
            { id: "cantimplora", quantity: 1 },
            { id: "quinque", quantity: 1 },
          ],
          0,
          0,
          50
        ),
        new Option(2, "quest", "trolls", "Esperar als trolls", 5, 0, 0, 10),
      ]
    ),
    new Scene(
      5,
      "desnonament_trolls",
      `Els trolls son uns èssers grans que sempre van amb cara de pocs amics. No fan preguntes, només executen ordres. T'han fet fora de casa teva sense que et doni temps a fer la motxilla, ets al carrer sense res. 
      Has de trobar un lloc on dormir aquesta nit, però per això necessitaràs diners. Dones un cop d'ull al carrer, a veure si hi ha algú que pugui ajudar-te.`,
      "casaIntro"
    ),
    new Scene(6, "Ona_1", Ona.speak("Desnonament1"), "plaçaSantJust", [
      new Option(1, "Preguntar per un lloc on dormir", 8),
      new Option(2, "Preguntar si sap que faran a casa teva", 9),
    ]),
    new Scene(7, "carrers_gotic", ""),
    new Scene(
      8,
      "Ona_2",
      `"És tota una aventura trobar una llar en aquesta ciutat! A Can Forquilles, la fonda del barri, potser et poden ajudar o pots provar també a la botiga de l'alquimista, és un bon home."`,
      "plaçaSantJust",
      [
        new Option(1, "Anar a Can Forquilles", 10),
        new Option(2, "Anar a la botiga", 11),
      ]
    ),
    new Scene(9, "pisos_turistics", ""),
    new Scene(
      10,
      "ca_la_peque",
      `Entres a la fonda, [descripció] en Pep, el fondista, et saluda. A la barra hi ha un home barbut que sembla mig adormit i en la taula del fons, al racó més apartat, un noi que sembla preocupat.`,
      "can_forquilles_1",
      [
        new Option(1, "Parlar amb el noi", 14),
        new Option(2, "Parlar amb l'home barbut", 12),
        new Option(3, "Parlar amb en Pep", 13),
      ]
    ),
    new Scene(11, "botiga_alquimista", ""),
    new Scene(12, "home_barbut", ""),
    new Scene(
      13,
      "ca_la_peque_2",
      `"Hola PLAYERNAME com va això? Vols prendre res?"`,
      "Ca la Peque",
      [
        new Option(
          1,
          "Demanar un vermut i un entrepà de fuet (-5 pellofes / +10 salut)",
          20,
          [],
          0,
          5,
          0,
          10
        ),
        new Option(2, "Preguntar si té habitacions lliures", 21),
      ]
    ),
    new Scene(
      14,
      "Encanteric_1",
      `"...què faré ara? Li hauré d'explicar al director... Però em farà fora! No, no..."`,
      "Ca la Peque",
      [
        new Option(
          1,
          `Hola!  Em dic ${playerName}, què puc seure? T'ha passat res? Fas cara de preocupat...`,
          15
        ),
      ]
    ),
    new Scene(
      15,
      "Encanteric_2",
      `Preocupat diu! ESTIC ACABAT! He perdut.., Merda! No t'ho hauría de dir... He perdut un llibre IMPORTANTÍSSIM! I si s'enteren estic acabat. Sóc Estudiant a la UB, l'Universitat de Bruixeria, saps? Doncs això, si no el torno m'expulsaran i just estic apunt de graduar-me... Merda! L'he perdut! Ho entens!? L'HE PERDUT!"`,
      "Ca la Peque",
      [new Option(1, "Quin llibre? ", 16)]
    ),
    new Scene(
      16,
      "Encanteric_3",
      `"No sé si t'ho puc dir...Bé, tot i que arribats a aquest punt, quin sentit tindría guardar el secret, oi? Confiaré en tu, tens cara de bona persona això els bruixots ho notem de seguida, saps? Doncs bé, l'altre dia el director de la universitat em va deixar un llibre molt important, el[LLIBRE D'EN ROCATALLADA, i si cau en males mans... ai! Deesa meva no ho vull ni pensar!"`,
      "Ca la Peque",
      [new Option(1, "Com el vas perdre? ", 17)]
    ),
    new Scene(
      17,
      "Encanteric_4",
      `"Doncs després de l'última classe vaig anar a la Biblioteca Arcana, després al Mercat del Boc a comprar un parell de coses i abans d'anar cap a casa vaig fer un vermutet aquí, a la fonda. En arribar a casa no tenía el llibre. He donat mil tombs i no l'he trobat. No hi ha res a fer, ESTIC ACABAT!."`,
      "Ca la Peque",
      [
        new Option(
          1,
          "Em sap greu però ho veig massa difícil i jo he de buscar un lloc on viure. Espero que tinguis sort!",
          18
        ),
        new Option(
          2,
          '"Bé t\'ajudaré! I si el trobem potser podràs ajudar-me a trobar un lloc on viure"',
          19
        ),
      ]
    ),
    new Scene(18),
    new Scene(
      19,
      "Encanteric_5",
      `"Un lloc on viure? Això si que és complicat! Però et prometo que et recompensaré! Per on comencem?"`,
      "Ca la Peque",
      [
        new Option(1, "Anar a la Biblioteca Arcana", ""),
        new Option(2, "Anar al Mercat del Boc", ""),
        new Option(3, "Anar a la UB", ""),
      ]
    ),
    new Scene(
      21,
      "CaLaPeque_3",
      `"Doncs mira, tens sort per qué em queda una habitació lliure" ( -10 pellofes / +10 salut)`,
      "Ca la Peque",
      [
        new Option(1, "Perfecte!, l'agafo", "", [], 0, 0, 10, 10),
        new Option(
          2,
          '"No, gràcies. No tinc suficient diners. Tornaré més tard."',
          ""
        ),
      ]
    ),
  ],
};

export default scenesLevel1;
