import { NPC } from "../classes/npc.js";
import { playerName } from "../../components/form/PlayerForm.jsx";

// Common NPCs
export const Peque = new NPC(
  "La Peque",
  "",
  "Cuinera de la fonda Ca la Peque",
  "Fonda Ca la Peque",
  {},
  {}
);

export const Samba = new NPC(
  "El Samba",
  "",
  "Cambrer de la fonda Ca la Peque",
  {},
  {}
);

export const Silvia = new NPC(
  "Sílvia",
  "interactive",
  "Bibliotecaria de la BAB (Biblioteca Arcana de Barcelona),",
  {},
  {}
);

export const Ivan = new NPC("Iván", "", "Forner de la Fleca del barri", {}, {});

//Quest-givers
export const Joana = new NPC(
  "Joana",
  "quest-giver",
  "Periodista i activista del Sillogat, amb el cabell blau elèctric, sempre llegint un llibre del revés.",

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
  "plaça Sant Just",
  {
    Desnonament: `'Bon dia, ${playerName}, veig que al final a tú també t'han fet fora de casa. Desgraciadament no ets l'únic, aquest maleït A. Voltor, l'especulador inmoral que hi ha darrera de tot aquests desnonaments, està fent fora a tots els veïns, té més propietats que escrúpuls aquest poca vergonya!'`,
    Consell1: `'Si vols fer front a l'Alfons Voltor, necessites un pla. Primer, has de reunir informació sobre ell i les seves activitats. Potser pots parlar amb altres veïns afectats o investigar els seus negocis. Després, hauràs de trobar aliats que t'ajudin en la teva causa. No serà fàcil, però si et mantens ferm i astut, potser podràs aturar-lo.'`,
    Consell2: `'Per aconseguir informació hauràs de parlar amb la Joana, l'activista del barri. Ella sempre està al corrent de tot el que passa i potser té alguna pista sobre com aturar l'Alfons Voltor.'`,
    Kasal: `'El Kasal és un lloc on es reuneixen els veïns per parlar dels problemes del barri. És un bon lloc per començar a buscar aliats i informació.'`,
    Fleca: `'La Fleca és un bon lloc per començar a buscar informació. El forner, l'Iván, sempre està al corrent de les xafarderies del barri i potser té alguna pista sobre l'Alfons Voltor.'`,
    Fonda: `'La fonda Ca la Peque és un bon lloc per descansar i menjar alguna cosa. La Peque i el Samba, sempre tenen una paraula amable i potser alguna informació útil.'`,
    Silvia: `'La Sílvia la bibliotecaria de la BAB, és una font d'informació inestimable. Sempre està llegint i potser té algun llibre o article que pugui ajudar-te a entendre millor la situació.'`,
  },
  {}
);

//Enemies
export const Ogre = new NPC(
  "Ogre",
  "enemy",
  "Un ogre burocràtic.",
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
  "",
  {
    Ordres: `'Només complim ordres. Si oposes resistència serà pitjor.'`,
  },
  {}
);

export const Tragatot = new NPC(
  "Gegant Tragatot",
  "enemy",
  "Gegant de les grans corporacions, es menja tots els petits comerço que troba al seu pas.",
  "",

  {},
  {}
);

export const Gremlin = new NPC(
  "Gremlins",
  "enemy",
  "Criatures que van en grup, sorolloses, ho destrossen tot. Beuen sangria i vomiten souvenirs.",
  "",
  {
    random: `'Sangria, tapas. Tapas, sangria'`,
  },
  {}
);

export const Paperam = new NPC(
  "Gegant Paperam",
  "enemy",
  "Gegant de la torre dels buròcrates, fet de documents. ",
  "",
  {},
  {}
);

//Bosses
export const Hut = new NPC(
  "Hut",
  "boss",
  "Golems del capitalisme a les ordres de l’Alfons Voltor.",
  "",
  {},
  {}
);

export const AVoltor = new NPC(
  "Alfons Voltor",
  "boss",
  "Un ésser sense escrúpuls que fa la seva fortuna a base de deixar sense llar als veïns de la ciutat.",
  "Torre de vidre",
  {},
  {}
);
