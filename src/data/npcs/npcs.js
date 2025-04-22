import { NPC } from "../NPC.js";

//Types for NPCS: inform, vendor, quest-giver, enemy, friend, companion, ally.

export const Ona = new NPC(
  "Ona",
  "",
  "Encantèria Gitana",
  "", // onaImage // Placeholder for image path
  "plaça Sant Just",
  {
    Desnonament1: `"Bon dia ${playerName}, veig que al final a tú també t'han fet fora de casa..."`,
    Desnonament2: `"És tota una aventura trobar una llar en aquesta ciutat..."`,
  },
  {}
);
