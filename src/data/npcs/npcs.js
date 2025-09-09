import { NPC } from "../classes/npc.js";

// Common NPCs
export const Peque = new NPC(
  "La Peque",
  "Cuinera de la fonda Ca la Peque",
  "Fonda Ca la Peque",
  {},
  {}
);

export const Samba = new NPC(
  "El Samba",
  "Cambrer de la fonda Ca la Peque",
  {},
  {}
);

export const Silvia = new NPC(
  "Sílvia",
  "Bibliotecaria de la BAB (Biblioteca Arcana de Barcelona),",
  {},
  {}
);

export const Ivan = new NPC(
  "Iván",
  "Forner de la Fleca del barri",
  {
    Brunch_a_la_brasa: `'Hola, estem perdent l'esmorzar de forquilla, per culpa de tots els Gremlins que volen brunch. Vols donar-nos un cop de mà?'`,
  },
  {}
);

//Quest-givers
export const Joana = new NPC(
  "Joana",
  "Activista del Sillogat, amb el cabell blau elèctric, sempre llegint un llibre del revés.",

  {
    Missatge: `'Hola criatura, tens un missatge per mi, oi? Vine. En silenci, les parets escolten, i els llibres parlen.'`,
    Kasal: `'Vine amb mi, et portaré al Kasal, l'antic centre cívil on ara es reuneix el Consell de Veus Desesperades'`,
    Prob_Sistemic: `''No és un una emergència, és un problema sistèmic. No podem resoldre-ho tot de cop, però podem començar a fer canvis petits que marquin la diferència.'`,
    Sist_Public: `'s'ha de crear un sistema públic d'habitatge que garanteixi el dret a un sostre digne per a tothom.'`,
    No_Huts: `'Si no hi ha vivenda sificient per a la gent del barri, no es pot permetre que els grans propietaris especulin amb els preus dels lloguers i dels habitatges. Els HUTS han de desaparèixer.'`,
    Desnonament_Bruixes: `'Com sempre, el desnonament depén d'un tràmit burocràtic que no arriba a temps per culpa de la burocràcia i els interessos d'A. Voltor'`,
    Sistema_public: `'Crear un sistema públic de vivenda similar a la sanitat pública, per garantir el dret a un sostre digne per a tothom.'`,
    Emergencia: `''no és una emergència és un problema sistemàtic. Si no hi ha vivenda suficient per a la gent del barri, no hi ha lloc pels Huts i els especuladors com l'Alfons Voltor.'`,
    Capitalisme: `'El capitalisme es nodreix de la desesperació que ell mateix crea. Hem de lluitar contra aquest sistema injust que prioritza els beneficis per sobre de les persones.'`,
  },
  {}
);

export const Monica = new NPC(
  "Monica",
  "Periodista, amb el cabell vermell com el foc, sempre amb una càmera a la mà i un bloc de notes ple d'idees.",
  {
    Assamblea: `'Hola, estic organitzant una assemblea al Kasal del barri. Volem parlar sobre els desnonaments i com podem aturar-los. T'agradaria unir-te a nosaltres?'`,
    Entrar: `'Si vols entrar al Kasal, has de ser un membre del Consell de Veus Desesperades. Si vols unir-te a nosaltres, parla amb la Joana.'`,
    Assamblea_Infiltrats: `'Hem de tenir cura dels trolls infiltrats, no podem permetre que els nostres plans siguin descoberts. Si veus algú sospitós, informa'm immediatament.'`,
    Desnonament_Bruixes: `'Les bruixes són unes dones sàvies, sovint marginades per la societat. Ara estan lluitant contra el desnonament de casa seva i necessiten la nostra ajuda. Si vols ajudar-les, parla amb elles a la plaça.'`,
    Alfons_Voltor: `'L'Alfons Voltor és un especulador molt perillòs que té masses aliats i massa poder.'`,
    Families_desnonades: `'Les trampes de grans propietaris i la lentitud a l'hora de multar-los ha provocat que moltes famílies hagin estat desnonades'`,
    Sistema_despulla: `'El sistema despulla els habitants de les seves arrels, de la seva dignitat.'`,
    Sistema_segrestat: `'El sistema ha estat segrestat per una entitat fosca, una aliança entre fons voltor, entitats màgiques corruptes i tecnòcrates d'ultratomba, liderada per una 'Pesanta' que no et deixa respirar, provoca angoixa i mal sons.`,
    Trolls: `'Tenene predisposició a actuar amb un grau d'hostilitat que barreja la imprudència i la il·legalitat. No fan preguntes, només executen ordres.'`,
  },
  {}
);

export const Mar = new NPC(
  "Mar",
  "És un èsser màgic que apareix quan el necessites. Porta unes ulleres de soldador que li fan els ulls encara més grans, viu apartada de la societat i sempre parla amb un llenguatge poètic.",
  "A tot arreu",
  {
    Alcalde: `'No et fïis de les ombres llargues i mai acceptis un cafè de l'alcalde.'`,
    Fake_news: `'Existeix una organització secreta que manipula la realitat des d'algun lloc que ningú sap trobar.'`,
  },
  {}
);

//Fantastic entities & Historic characters
export const Ona = new NPC(
  "Ona",
  "Encantèria Gitana",
  "plaça Sant Just",
  {
    Desnonament: `'Bon dia, veig que al final a tú també et faran fora de casa. Desgraciadament no ets l'únic, el maleït Alfons Voltor, l'especulador inmoral que hi ha darrera de tots aquests desnonaments, està fent fora a tots els veïns, té més propietats que escrúpuls aquest poca vergonya!'`,
    Consell1: `'Si vols fer front a l'Alfons Voltor, necessites un pla. Primer, has de reunir informació sobre ell i les seves activitats. Potser pots parlar amb altres veïns afectats o investigar els seus negocis. Després, hauràs de trobar aliats que t'ajudin en la teva causa. No serà fàcil, però si et mantens ferm i astut, potser podràs aturar-lo.'`,
    Fleca: `'La Fleca és un bon lloc per començar a buscar informació. El forner, l'Iván, sempre està al corrent de les xafarderies del barri i potser té alguna pista sobre l'Alfons Voltor.'`,
    Fonda: `'La fonda Ca la Peque és un bon lloc per descansar i menjar alguna cosa. La Peque i el Samba, sempre tenen una paraula amable i potser alguna informació útil.'`,
    Biblioteca: `'A la biblioteca hi pots trobar informació valuosa sobre la història del barri i els seus habitants. La Sílvia la bibliotecaria de la BAB, és una font d'informació inestimable. Sempre està llegint i potser té algun llibre o article que pugui ajudar-te a entendre millor la situació.'`,
    Kasal: `'El Kasal és un lloc on es reuneixen els veïns per parlar dels problemes del barri. És un bon lloc per començar a buscar aliats i informació.'`,
    Kasal_infiltrats: `'Hi han hagut massa casos de trolls infiltrats en moviments socials, no serà fàcil que confïin en tú. Necessites un aliade que et doni accés al Kasal.'`,
    Trolls: `'Són uns éssers grans i agressius, no gaire intel·ligents. No fan preguntes, només executen ordres. Intenta evitar-los.'`,
    Joana: `'Per aconseguir informació hauràs de parlar amb la Joana, l'activista del barri. Ella sempre està al corrent de tot el que passa i potser té alguna pista sobre com aturar l'Alfons Voltor.'`,
    Desnonament_bruixes: `'Les bruixes de la plaça són un grup de dones que han estat marginades i perseguides per la societat. Són fortes i astutes, i poden ser aliades valuoses en la teva lluita contra l'Alfons Voltor.'`,
  },
  {}
);

//Enemies
export const Ogre = new NPC(
  "Ogre",
  "Un ogre burocràtic.",
  "",
  {
    Desnonament: `'Venim a executar l'ordre de desnonament. Et demanem que colaboris i desallotgis l'habitatge de manera pacífica per evitar incidents.'`,
    Desnonament2: `'Si no col·labores, ens veurem obligats a utilitzar la força. És la nostra responsabilitat fer complir la llei.'`,
  },
  {}
);

export const Troll = new NPC(
  "Trolls",
  "Éssers grans, agressius, no gaire intel·ligents i que sempre van amb cara de pocs amics. No fan preguntes, només executen ordres.",
  "",
  {
    Ordres: `'Només complim ordres. Si oposes resistència serà pitjor.'`,
    Desnonament: `'Som aquí per complir una ordre judicial de desnonament. Atacarem si no col·labores.'`,
  },
  {}
);

export const Tragatot = new NPC(
  "Gegant Tragatot",
  "Gegant de les grans corporacions, es menja tots els petits comerço que troba al seu pas.",
  "",

  {},
  {}
);

export const Gremlin = new NPC(
  "Gremlins",
  "Criatures que van en grup, sorolloses, ho destrossen tot. Beuen sangria i vomiten souvenirs.",
  "",
  {
    Random: `'Sangria, tapas. Tapas, sangria'`,
    Brunch: `'Brunch, brunch, brunch!'`,
  },
  {}
);

export const Paperam = new NPC(
  "Gegant Paperam",
  "Gegant de la torre dels buròcrates, fet de documents. ",
  "",
  {
    Desnonament: `'Recorda que tens 10 dies per presentar una al·legació. Si no ho fas, el desnonament es portarà a terme segons la llei.'`,
    Random: `'No hi ha cap problema que no es pugui resoldre amb un bon munt de paperassa.'`,
    Atac: `'Si no compleixes amb els tràmits, et faré un embolic de papers que no podràs resoldre mai.'`,
  },
  {}
);

//Bosses
export const Hut = new NPC(
  "Hut",
  "Golems del capitalisme a les ordres de l'Alfons Voltor.",
  "",
  {},
  {}
);

export const AVoltor = new NPC(
  "Alfons Voltor",
  "Un ésser sense escrúpuls que fa la seva fortuna a base de deixar sense llar als veïns de la ciutat.",
  "Torre de vidre",
  {},
  {}
);
