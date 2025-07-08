import { NPC } from "../classes/npc.js";

export const Mar = new NPC(
  "Mar",
  "Lorekeeper",
  "",
  "", // Placeholder for image path
  "everywhere",
  {},
  {}
);

// Interactive
export const Peque = new NPC(
  "Magda, la Peque",
  "interactive",
  "Cuinera de la fonda Ca la Peque",
  "", // Placeholder for image path
  "Fonda Ca la Peque",
  {},
  {}
);

export const Samba = new NPC(
  "Jose, el Samba",
  "interactive",
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

export const Sacanera = new NPC(
  "Astruc Sacanera",
  "fantastic entity",
  "Alquimista, bruixot de Ciutat Vella",
  "", // Placeholder for image path
  "Botiga Enginy",
  {},
  {}
);

//Quest-givers
export const Ivan = new NPC(
  "Iván",
  "quest-giver",
  "Forner de la Fleca dle barri",
  "", // Placeholder for image path
  {},
  {}
);

export const Monica = new NPC(
  "Mónica",
  "quest-giver",
  "periodista, activista feminista",
  "", // Placeholder for image path
  {},
  {}
);

export const Joana = new NPC(
  "Joana",
  "quest-giver",
  "Activista del Sillogat",
  "", //PlaceHolder for image path
  {},
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
    Desnonament1: `"Bon dia PLAYER_NAME, veig que al final a tú també t'han fet fora de casa. Desgraciadament no ets l'únic, cada cop més voltors compren edificis sencers i fan fora els seus veïns. Aquest barri aviat deixarà de ser dels veïns i serà de les gran coprporacions, si ja sembla un parc d'atraccions!"`,
    Desnonament2: `"És tota una aventura trobar una llar en aquesta ciutat..."`,
  },
  {}
);
export const Encanteric = new NPC(
  "Encantèric",
  "fantastic entity",
  "Estudiant de bruixeria i alquimia de la UABB. Alumne de l'Astruc Sacanera",
  "", // Placeholder for image path
  {},
  {}
);
