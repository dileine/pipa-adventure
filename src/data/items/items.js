import { Item } from "../classes/item";

// Items disponibles en el juego
export const gameItems = {
  carta_desnonament: new Item(
    "carta_desnonament",
    "Carta de desnonament",
    "La carta que has rebut amb l'ordre de desnonament",
    1,
    "carta"
  ),

  fleca_croissant: new Item(
    "fleca_croissant",
    "Croissant de la fleca",
    "Un deliciós croissant d'Iván, el forner del barri",
    1,
    "cantimplora" // Temporal, crear icon específic
  ),

  informacio_voltor: new Item(
    "informacio_voltor",
    "Informació sobre Voltor",
    "Documents amb informació sobre les activitats d'Alfons Voltor",
    1,
    "carta"
  ),

  clau_kasal: new Item(
    "clau_kasal",
    "Clau del Kasal",
    "Clau que et dona accés al Kasal del barri",
    1,
    "quinque" // Temporal, crear icon específic
  ),

  pamflet_resistencia: new Item(
    "pamflet_resistencia",
    "Pamflet de resistència",
    "Pamflet informatiu sobre com lluitar contra els desnonaments",
    1,
    "carta"
  ),
};

// Funció helper per obtenir un item per ID
export const getItem = (itemId) => {
  return gameItems[itemId] || null;
};
