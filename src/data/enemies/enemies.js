import { Enemie } from "../classes/enemie";

export const Ogre = new Enemie(
  "Ogre",
  "enemy",
  "Un ogre burocràtic.",
  "", // Placeholder for image path
  "",
  {
    Desnonament1: `Tens una hora per marxar d'aquí`,
    Desnonament2: `Sé que ets a casa, puc veure la teva ombra per l'espiell. Porto l'ordre de desnonament, si no surts vindràn els trolls a treure't.`,
  },
  {}
);

export const Troll = new Enemie(
  "Trolls",
  "enemy",
  "Éssers grans, agressius, no gaire intel·ligents i que sempre van amb cara de pocs amics. No fan preguntes, només executen ordres.",
  "", // Placeholder for image path
  "",
  {},
  {}
);

export const Tragatot = new Enemie(
  "Gegant Tragatot",
  "enemy",
  "Gegant de les grans corporacions, es menja tots els petits comerço que troba al seu pas.",
  "", // Placeholder for image path
  "",

  {},
  {}
);

export const Gremlin = new Enemie(
  "Gremlins",
  "enemy",
  "Criatures que van en grup, sorolloses, ho destrossen tot. Beuen sangria i vomiten souvenirs.",
  "", // Placeholder for image path
  "",
  {},
  {}
);

export const Paperam = new Enemie(
  "Gegant Paperam",
  "enemy",
  "Gegant de la torre dels buròcrates, fet de documents. ",
  "", // Placeholder for image path
  "",
  {},
  {}
);

//Bosses
export const Hut = new Enemie(
  "Hut",
  "boss",
  "Golems del capitalisme a les ordres de l’Alfons Voltor.",
  "", // Placeholder for image path
  "",
  {},
  {}
);

export const AVoltor = new Enemie(
  "Alfons Voltor",
  "boss",
  "Un ésser sense escrúpuls que fa la seva fortuna a base de deixar sense llar als veïns de la ciutat.",
  "", // Placeholder for image path
  "Torre de vidre",
  {},
  {}
);
