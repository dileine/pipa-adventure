import { NPC } from "../classes/npc.js";
import { playerName } from "../../components/form/PlayerForm.jsx";

// Common NPCs
export const Peque = new NPC(
  "Magda, la Peque",
  "",
  "Cuinera de la fonda Ca la Peque",
  "", // Placeholder for image path
  "Fonda Ca la Peque",
  {},
  {}
);

export const Samba = new NPC(
  "Jose, el Samba",
  "",
  "Cambrer de la fonda Ca la Peque",
  "", // Placeholder for image path
  {},
  {}
);

export const Silvia = new NPC(
  "Sílvia",
  "interactive",
  "Herbolària de la plaça Sant Just",
  "", // Placeholder for image path
  {},
  {}
);

export const Ivan = new NPC(
  "Iván",
  "",
  "Forner de la Fleca del barri",
  "", // Placeholder for image path
  {},
  {}
);

//Quest-givers
export const Joana = new NPC(
  "Joana",
  "quest-giver",
  "Periodista i activista del Sillogat, amb el cabell blau elèctric, sempre llegint un llibre del revés.",
  "", //PlaceHolder for image path
  {
    Missatge: `'Hola criatura, tens un missatge per mi, oi? Vine. En silenci, les parets escolten, i els llibres parlen.'`,
    Kasal: `'Vine amb mi, et portaré al Kasal, l'antic centre cívil on ara es reuneix el Consell de Veus Desesperades'`,
  },
  {}
);

export const Mar = new NPC(
  "Mar",
  "fantastic entity",
  "És un èsser màgic que apareix quan el necessites. Porta unes ulleres de soldador que li fan els ulls encara més grans, viu apartada de la societat i sempre parla amb un llenguatge poètic.",
  "", // Placeholder for image path
  "A tot arreu",
  {
    R1: `'No et fïis de le sombres llargues i mai acceptis un cafè de l'alcalde.'`,
  },
  {}
);

//Fantastic entities & Historic characters
export const Ona = new NPC(
  "Ona",
  "fantastic entity",
  "Encantèria Gitana",
  "", // onaImage // Placeholder for image path
  "plaça Sant Just",
  {
    Desnonament: `"Bon dia, ${playerName}, veig que al final a tú també t'han fet fora de casa. Desgraciadament no ets l'únic, aquest maleït A. Voltor, l'especulador inmoral que hi ha darrera de tot aquests desnonaments, està fent fora a tots els veïns, té més propietats que escrúpuls aquest poca vergonya!"`,
  },
  {}
);

//Enemies
export const Ogre = new NPC(
  "Ogre",
  "enemy",
  "Un ogre burocràtic.",
  "", // Placeholder for image path
  "",
  {
    Desnonament: `'Som aquí per complir una ordre judicial de desnonament. Et demanem que colaboris i desallotgis l'habitatge de manera pacífica per evitar incidents.'`,
  },
  {}
);

export const Troll = new NPC(
  "Trolls",
  "enemy",
  "Éssers grans, agressius, no gaire intel·ligents i que sempre van amb cara de pocs amics. No fan preguntes, només executen ordres.",
  "", // Placeholder for image path
  "",
  {},
  {}
);

export const Tragatot = new NPC(
  "Gegant Tragatot",
  "enemy",
  "Gegant de les grans corporacions, es menja tots els petits comerço que troba al seu pas.",
  "", // Placeholder for image path
  "",

  {},
  {}
);

export const Gremlin = new NPC(
  "Gremlins",
  "enemy",
  "Criatures que van en grup, sorolloses, ho destrossen tot. Beuen sangria i vomiten souvenirs.",
  "", // Placeholder for image path
  "",
  {},
  {}
);

export const Paperam = new NPC(
  "Gegant Paperam",
  "enemy",
  "Gegant de la torre dels buròcrates, fet de documents. ",
  "", // Placeholder for image path
  "",
  {},
  {}
);

//Bosses
export const Hut = new NPC(
  "Hut",
  "boss",
  "Golems del capitalisme a les ordres de l’Alfons Voltor.",
  "", // Placeholder for image path
  "",
  {},
  {}
);

export const AVoltor = new NPC(
  "Alfons Voltor",
  "boss",
  "Un ésser sense escrúpuls que fa la seva fortuna a base de deixar sense llar als veïns de la ciutat.",
  "", // Placeholder for image path
  "Torre de vidre",
  {},
  {}
);
