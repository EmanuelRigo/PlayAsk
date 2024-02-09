import Pelea from "./assets/pelea.png";
import Deportes from "./assets/deportes.png";
import Aventura from "./assets/Aventura.png";
import Clasicos from "./assets/Clasicos.png";
import Arcade from "./assets/arcade.png";
import Terror from "./assets/terror.png";
import Estrategias from "./assets/estrategias.png";
import Accion from "./assets/accion.png";
/* import { GiPunch as Pelea } from "react-icons/gi"; */

export const imgs = [
  Pelea,
  Deportes,
  Aventura,
  Clasicos,
  Arcade,
  Terror,
  Estrategias,
  Accion,
];

export const categories = {
  arcade: "Arcade",
  terror: "Terror",
  deportes: "Deportes",
  pelea: "Pelea",
  aventura: "Aventura",
  estrategias: "Estrategias",
  clasicos: "Clasicos",
  accion: "Accion",
};

const {
  arcade,
  estrategias,
  terror,
  deportes,
  pelea,
  aventura,
  clasicos,
  accion,
} = categories;

export const questions = [
  {
    id: 1,
    difficulty: "Fácil",
    question: "¿Cuál fue el primer videojuego de arcade lanzado en 1972?",
    category: arcade,
    correct_answer: "Pong",
    incorrect_answers: ["Space Invaders", "Donkey Kong", "Pac-Man"],
  },

  {
    id: 2,
    difficulty: "Fácil",
    question:
      "¿Cuál es el nombre del protagonista de la serie de juegos Silent Hill?",
    category: terror,
    correct_answer: "Harry Mason",
    incorrect_answers: ["James Sunderland", "Alex Shepherd", "Heather Mason"],
  },

  {
    id: 3,
    difficulty: "Fácil",
    question: "¿En qué año se lanzó el primer juego de la serie 'FIFA'?",
    category: deportes,
    correct_answer: "1993",
    incorrect_answers: ["1994", "1992", "1996"],
    question: "¿En qué año se lanzó el primer juego de la serie 'FIFA'?",
    //
  },
  {
    id: 4,
    difficulty: "Medio",
    question:
      "¿Cuál de estos personajes es conocido por su técnica de 'Shoryuken' en el juego 'Street Fighter'?",
    category: pelea,
    correct_answer: "Ryu",
    incorrect_answers: ["Chun-Li", "Guile", "Blanka"],
  },

  {
    id: 5,
    difficulty: "Difícil",
    question: "¿Cuál es el nombre del protagonista en BioShock Infinite?",
    category: aventura,
    correct_answer: "Booker DeWitt",
    incorrect_answers: ["Jack", "Andrew Ryan", "Big Daddy"],
  },

  {
    id: 6,
    difficulty: "Medio",
    question:
      "¿En qué año se lanzó el juego de estrategia 'Age of Empires II'?",
    category: estrategias,
    correct_answer: "1999",
    incorrect_answers: ["2000", "1998", "2001"],
  },
  {
    id: 7,
    difficulty: "Fácil",
    question: "¿En qué año fue lanzado por primera vez el juego de Tetris?",
    category: clasicos,
    correct_answer: "1984",
    incorrect_answers: ["1986", "1987", "1990"],
  },
  {
    id: 8,
    difficulty: "Medio",
    question:
      "¿Quién es el creador y director de la serie de videojuegos Metal Gear Solid?",
    category: clasicos,
    correct_answer: "Hideo Kojima",
    incorrect_answers: ["Kojima Hideo", "David Hayter", "Ken Kutaragi"],
  },

  {
    id: 9,
    difficulty: "Difícil",
    question:
      "En Resident Evil 4, ¿quién es el principal antagonista del juego?",
    category: terror,
    correct_answer: "Osmund Saddler",
    incorrect_answers: ["Albert Wesker", "Nemesis", "William Birkin"],
  },

  {
    id: 10,
    difficulty: "Medio",
    question:
      "En la serie Mortal Kombat, ¿quién es el hechicero maestro del fuego?",
    category: pelea,
    correct_answer: "Scorpion",
    incorrect_answers: ["Sub-Zero", "Raiden", "Liu Kang"],
  },
  {
    id: 11,
    difficulty: "Fácil",
    question: "¿Cuál es el deporte principal en el videojuego 'Rocket League'?",
    category: deportes,
    correct_answer: "Fútbol con coches",
    incorrect_answers: ["Baloncesto", "Hockey sobre hielo", "Vóley-playa"],
  },
  {
    id: 12,
    difficulty: "Medio",
    question:
      "¿Cuál de los siguientes personajes es el eterno rival de Ryu en Street Fighter?",
    category: pelea,
    correct_answer: "ken",
    incorrect_answers: ["Sagat", "Akuma", "Dan"],
  },
  {
    id: 13,
    difficulty: "Medio",
    question:
      "En el juego de boxeo 'Punch-Out!!', ¿quién es el personaje final al que te enfrentas?",
    category: deportes,
    correct_answer: "Mike Tyson",
    incorrect_answers: ["Glass Joe", "King Hippo", "Soda Popinski"],
  },

  {
    id: 14,
    difficulty: "Fácil",
    question: "Cuál es el nombre del personaje principal en el juego Tekken?",
    category: pelea,
    correct_answer: "JKazuya Mishima",
    incorrect_answers: ["Heihachi Mishima", "Jin Kazama", "Paul Phoenix"],
  },
  {
    id: 15,
    difficulty: "Fácil",
    question:
      "En el juego Amnesia: The Dark Descent, ¿cómo se llama el protagonista?",
    category: terror,
    correct_answer: "Daniel",
    incorrect_answers: ["John", "Samuel", "Robert"],
  },

  {
    id: 16,
    difficulty: "Medio",
    question:
      "¿Cuál de estos personajes es un luchador de sumo en Street Fighter?",
    category: pelea,
    correct_answer: "E. Honda",
    incorrect_answers: ["Balrog", "Vega", "Sagat"],
  },
  {
    id: 17,
    difficulty: "Medio",
    question:
      "¿En qué juego de rol la protagonista se llama 'Aerith Gainsborough'?",
    category: clasicos,
    correct_answer: "Final Fantasy VII",
    incorrect_answers: [
      "Chrono Trigger",
      "The Witcher 3: Wild Hunt",
      "Dragon Quest IX: Sentinels of the Starry Skies",
    ],
  },

  {
    id: 18,
    difficulty: "Medio",
    question:
      "En la serie de videojuegos Uncharted, ¿qué reliquia busca Nathan Drake en 'Uncharted 2: Among Thieves'?",
    category: aventura,
    correct_answer: "La piedra Cintamani",
    incorrect_answers: [
      "El Santo Grial",
      "El Corazón de Davy Jones",
      "El Orbe Lunar",
    ],
  },

  {
    id: 19,
    difficulty: "Difícil",
    question: "¿En qué juego de pelea aparece el personaje Sub-Zero?",
    category: pelea,
    correct_answer: "Mortal Kombat",
    incorrect_answers: ["Street Fighter", "Tekken", "Super Smash Bros."],
  },
  {
    id: 20,
    difficulty: "Fácil",
    question:
      "¿Qué monstruo recurrente aparece en la serie de juegos de Silent Hill como símbolo de la culpa y el remordimiento?",
    category: terror,
    correct_answer: "Pyramid Head",
    incorrect_answers: ["Nemesis", "Mr. X", "Licker"],
  },

  {
    id: 21,
    difficulty: "Fácil",
    question:
      "¿Cuál es el nombre del protagonista en el juego de lucha SoulCalibur?",
    category: pelea,
    correct_answer: "Ivy Valentine",
    incorrect_answers: ["Siegfried Schtauffen", "Mitsurugi", "Voldo"],
  },
  {
    id: 22,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del comandante en jefe de las fuerzas terran en StarCraft?",
    category: estrategias,
    correct_answer: "Jim Raynor",
    incorrect_answers: ["Arcturus Mengsk", "Sarah Kerrigan", "Tychus Findlay"],
  },
  {
    id: 23,
    difficulty: "Medio",
    question:
      "¿En qué juego de arcade los jugadores tienen que rodar una bola de piedra y aplastar edificios?",
    category: arcade,
    correct_answer: "Rampage",
    incorrect_answers: ["Donkey Kong", "Pac-Man", "Centipede"],
  },

  {
    id: 24,
    difficulty: "Fácil",
    question:
      "¿Quién es el luchador icónico que usa una venda en los ojos en Mortal Kombat?",
    category: pelea,
    correct_answer: "Kenshi",
    incorrect_answers: ["Sub-Zero", "Scorpion", "Raiden"],
  },
  {
    id: 25,
    difficulty: "Medio",
    question:
      "En el juego Outlast, ¿qué entidad siniestra controla el hospital psiquiátrico Mount Massive?",
    category: terror,
    correct_answer: "La Murkoff Corporation",
    incorrect_answers: ["Slender Man", "The Walrider", "Red Barrels"],
  },

  {
    id: 26,
    difficulty: "Difícil",
    question:
      "En el juego 'Mega Man', ¿quién es el enemigo principal que Mega Man debe derrotar?",
    category: clasicos,
    correct_answer: "Dr. Wily",
    incorrect_answers: ["Sigma", "Bowser", "Ganon"],
  },

  {
    id: 27,
    difficulty: "Medio",
    question:
      "¿Cuál es el título del primer juego de la franquicia 'The Elder Scrolls'?",
    category: clasicos,
    correct_answer: "The Elder Scrolls: Arena",
    incorrect_answers: [
      "The Elder Scrolls V: Skyrim",
      "The Elder Scrolls IV: Oblivion",
      "The Elder Scrolls Online",
    ],
  },

  {
    id: 28,
    difficulty: "Fácil",
    question:
      "¿Cuál de los siguientes personajes usa una máscara de luchador mexicano en Guacamelee!?",
    category: pelea,
    correct_answer: "Juan Aguacate",
    incorrect_answers: ["Tostada", "Carlos Calaca", "El Diablo"],
  },
  {
    id: 29,
    difficulty: "Medio",
    question:
      " ¿Cuál es el título del juego de fútbol callejero desarrollado por EA Big?",
    category: deportes,
    correct_answer: "FIFA Street",
    incorrect_answers: ["NBA Street", "NFL Street", "Street Soccer"],
  },

  {
    id: 30,
    difficulty: "Fácil",
    question:
      "¿Qué popular juego tenia una nave espacial que disparaba a oleadas de insectos alienígenas?",
    category: arcade,
    correct_answer: "Galaga",
    incorrect_answers: ["Asteroids", "Space Invaders", "Pac-Man"],
  },

  {
    id: 31,
    difficulty: "Fácil",
    category: estrategias,
    question: "¿En qué año se lanzó el videojuego 'Civilization VI'?",
    correct_answer: "2016",
    incorrect_answers: ["2018", "2015", "2017"],
  },
  {
    id: 32,
    difficulty: "Fácil",
    category: estrategias,
    question:
      "¿Cuál es el juego de acción en el que juegas como un superhéroe arácnido?",
    correct_answer: "Spider-Man (2018)",
    incorrect_answers: [
      "Batman: Arkham Knight",
      "Injustice 2",
      "Marvel's Avengers",
    ],
  },

  {
    id: 33,
    difficulty: "Fácil",
    category: estrategias,
    question:
      "¿Qué videojuego de estrategia se basa en la mitología griega y permite a los jugadores controlar a los dioses?",
    correct_answer: "Age of Mythology",
    incorrect_answers: [
      "Warcraft III: Reign of Chaos",
      "Rise of Nations",
      "Europa Universalis IV",
    ],
  },
  {
    id: 34,
    difficulty: "Medio",
    category: estrategias,
    question:
      "¿Cuál es el juego de estrategia en tiempo real que se centra en la Segunda Guerra Mundial y permite a los jugadores controlar diferentes naciones?",
    correct_answer: "Hearts of Iron IV",
    incorrect_answers: [
      "Total War: Shogun 2",
      "Steel Division: Normandy 44",
      "Command & Conquer: Red Alert",
    ],
  },
  {
    id: 35,
    difficulty: "Medio",
    category: estrategias,
    question:
      "¿Qué juego de estrategia tiene una expansión llamada 'The War Chiefs'?",
    correct_answer: "Age of Empires III",
    incorrect_answers: [
      "Rise of Nations",
      "Total War: Shogun 2",
      "StarCraft II: Wings of Liberty",
    ],
  },
  {
    id: 36,
    difficulty: "Medio",
    category: estrategias,
    question: "¿Qué es un archivo CSV?",
    correct_answer: "Un archivo de texto con valores separados por comas",
    incorrect_answers: [
      "Un archivo de audio comprimido",
      "Un archivo de imagen en formato vectorial",
      "Un archivo de vídeo de alta definición",
    ],
  },
  {
    id: 37,
    difficulty: "Difícil",
    category: estrategias,
    question:
      "¿Cuál es el título del juego de estrategia en tiempo real lanzado en 2010, desarrollado por Relic Entertainment?",
    correct_answer: "Company of Heroes",
    incorrect_answers: [
      "Rise of Nations",
      "Sins of a Solar Empire",
      "Warhammer 40,000: Dawn of War II",
    ],
  },
  {
    id: 38,
    difficulty: "Difícil",
    category: estrategias,
    question: "¿Qué juego de estrategia se desarrolla en la Antigua Roma?",
    correct_answer: "Total War: Rome II",
    incorrect_answers: [
      "Age of Empires: Rise of Rome",
      "Civilization IV",
      "Imperivm: Great Battles of Rome",
    ],
  },
  {
    id: 39,
    difficulty: "Difícil",
    question:
      "¿Cuál es el juego en el que el jugador debe guiar a una rana a través del tráfico y un río?",
    category: arcade,
    correct_answer: "Frogger",
    incorrect_answers: ["Galaga", "Pac-Man", "Space Invaders"],
  },
  {
    id: 40,
    difficulty: "Fácil",
    question:
      "¿Cuál de los siguientes juegos tenia a un ladrón llamado Blinky?",
    category: arcade,
    correct_answer: "Pac-Man",
    incorrect_answers: ["Donkey Kong", "Centipede", "Space Invaders"],
  },

  {
    id: 41,
    difficulty: "Medio",
    question:
      "¿En qué juego de arcade los jugadores deben derrotar oleadas de alienígenas con una base y un cañón?",
    category: arcade,
    correct_answer: "Space Invaders",
    incorrect_answers: ["Asteroids", "Galaga", "Defender"],
  },
  {
    id: 42,
    difficulty: "Difícil",
    question:
      "¿Cuál de los siguientes no es un personaje jugable en el juego 'Street Fighter II'?",
    category: arcade,
    correct_answer: "Sonic the Hedgehog",
    incorrect_answers: ["Ryu", "Chun-Li", "Blanka"],
  },

  {
    id: 43,
    difficulty: "Fácil",
    question:
      "¿Cuál es el juego de arcade conocido por presentar un escenario en el que el jugador debe evitar barriles lanzados por un gorila?",
    category: arcade,
    correct_answer: "Donkey Kong",
    incorrect_answers: ["Galaga", "Frogger", "Space Invaders"],
  },

  {
    id: 44,
    difficulty: "Medio",
    question:
      "¿Qué juego de arcade lanzado en 1981 presenta a un carpintero llamado 'Jumpman'?",
    category: arcade,
    correct_answer: "Donkey Kong",
    incorrect_answers: ["Frogger", "Galaga", "Ms. Pac-Man"],
  },

  {
    id: 45,
    difficulty: "Difícil",
    question:
      "¿En qué juego de arcade los jugadores tienen que comer puntos y evitar fantasmas?",
    category: arcade,
    correct_answer: "Pac-Man",
    incorrect_answers: ["Centipede", "Donkey Kong", "Space Invaders"],
  },

  {
    id: 46,
    difficulty: "Fácil",
    question:
      "¿Qué personaje principal controlas en el juego 'Space Invaders'?",
    category: arcade,
    correct_answer: "Cañón láser",
    incorrect_answers: ["Astronave espacial", "Astronauta", "Alien invasor"],
  },

  {
    id: 47,
    difficulty: "Medio",
    question: "¿En qué año se lanzó el icónico videojuego 'Pac-Man'?",
    category: arcade,
    correct_answer: "1980",
    incorrect_answers: ["1978", "1982", "1984"],
  },

  {
    id: 48,
    difficulty: "Fácil",
    question:
      "¿Qué videojuego de terror de supervivencia se desarrolla en un pueblo llamado Raccoon City?",
    category: terror,
    correct_answer: "Resident Evil 2",
    incorrect_answers: ["Dead Space", "The Evil Within", "Silent Hill 2"],
  },

  {
    id: 49,
    difficulty: "Medio",
    question:
      "En el juego Five Nights at Freddy's, ¿cuál es el nombre del animatrónico principal?",
    category: terror,
    correct_answer: "Freddy Fazbear",
    incorrect_answers: ["Chica", "Bonnie", "Foxxie"],
  },

  {
    id: 50,
    difficulty: "Difícil",
    question:
      "En el juego Alien: Isolation, ¿quién es el personaje principal que lucha por sobrevivir contra el xenomorfo?",
    category: terror,
    correct_answer: "Amanda Ripley",
    incorrect_answers: ["Ellen Ripley", "Isabella", "Michael Ripley"],
  },

  {
    id: 51,
    difficulty: "Fácil",
    question:
      "¿Cuál es el título del juego en el que los jugadores deben escapar de una mansión embrujada y resolver puzles?",
    category: terror,
    correct_answer: "Resident Evil 7: Biohazard",
    incorrect_answers: [
      "Dead by Daylight",
      "The Evil Within 2",
      "Silent Hill: Shattered Memories",
    ],
  },

  {
    id: 52,
    difficulty: "Medio",
    question:
      "En el juego P.T., ¿cuál es el nombre del protagonista atrapado en un ciclo de pesadillas?",
    category: terror,
    correct_answer: "protagonista anónimo ",
    incorrect_answers: ["Samuel", "Lisa", "The Ghost of Lisa"],
  },

  {
    id: 53,
    difficulty: "Difícil",
    question:
      "En el juego Dead Space, ¿qué es la principal amenaza a la que se enfrenta el ingeniero Isaac Clarke?",
    category: terror,
    correct_answer: "Necromorphs",
    incorrect_answers: ["Aliens", "Zombies", "Mutantes"],
  },

  {
    id: 54,
    difficulty: "Fácil",
    question:
      "¿Qué videojuego de terror de supervivencia se desarrolla en la remota montaña de Blackwood Pines?",
    category: terror,
    correct_answer: "Until Dawn",
    incorrect_answers: ["The Forest", "Outlast", "Silent Hill 4: The Room"],
  },

  {
    id: 55,
    difficulty: "Difícil",
    question: "¿En qué juego de lucha se encuentra el personaje Ryu de Capcom?",
    category: clasicos,
    correct_answer: "Street Fighter",
    incorrect_answers: ["Tekken", "Mortal Kombat", "Super Smash Bros."],
  },
  {
    id: 56,
    difficulty: "Fácil",
    question:
      "¿Cuál de los siguientes juegos es conocido por su personaje llamado 'Solid Snake'?",
    category: clasicos,
    correct_answer: "Metal Gear Solid",
    incorrect_answers: ["Final Fantasy", "Resident Evil", "Halo"],
  },

  {
    id: 57,
    difficulty: "Medio",
    question: "En el juego 'Pac-Man', ¿qué objeto debe recolectar el jugador?",
    category: clasicos,
    correct_answer: "Píldoras (Pac-Dots)",
    incorrect_answers: ["Monedas", "Anillos", "Frutas"],
  },
  {
    id: 58,
    difficulty: "Medio",
    question:
      "¿Quién es el personaje principal en el juego 'The Legend of Zelda'?",
    category: clasicos,
    correct_answer: "Link",
    incorrect_answers: ["Zelda", "Ganondorf", "Tingle"],
  },

  {
    id: 59,
    difficulty: "Difícil",
    question:
      "¿Qué empresa desarrolladora lanzó el juego 'Sonic the Hedgehog'?",
    category: clasicos,
    correct_answer: "SEGA",
    incorrect_answers: ["Nintendo", "Sony", "Microsoft"],
  },
  {
    id: 60,
    difficulty: "Difícil",
    question:
      "¿En qué año fue lanzado el videojuego 'The Legend of Zelda: Ocarina of Time'?",
    category: clasicos,
    correct_answer: "1998",
    incorrect_answers: ["1996", "2000", "1999"],
  },

  {
    id: 61,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del personaje principal en el juego 'Super Mario Bros'?",
    category: clasicos,
    correct_answer: "Mario",
    incorrect_answers: ["Luigi", "Yoshi", "Toad"],
  },

  {
    id: 62,
    difficulty: "Fácil",
    question:
      "¿Cuál es el deporte principal en el juego 'Wii Sports' de Nintendo?",
    category: deportes,
    correct_answer: "Tenis",
    incorrect_answers: ["Béisbol", "Golf", "Bowling"],
  },

  {
    id: 63,
    difficulty: "Fácil",
    question:
      "¿Quién es el personaje principal en la serie de juegos 'Tony Hawk's Pro Skater'?",
    category: deportes,
    correct_answer: "Tony Hawk",
    incorrect_answers: ["Bob Burnquist", "Rodney Mullen", "Bam Margera"],
  },

  {
    id: 64,
    difficulty: "Medio",
    question:
      "En el juego 'NBA Street Vol. 2', ¿cuál es uno de los modos de juego más populares?",
    category: deportes,
    correct_answer: "Dunk Contest",
    incorrect_answers: [
      "Three-Point Contest",
      "Street Challenge",
      "Trick Battle",
    ],
  },

  {
    id: 65,
    difficulty: "Medio",
    question: "¿Qué juego de béisbol es conocido por su serie 'The Show'?",
    category: deportes,
    correct_answer: "MLB: The Show",
    incorrect_answers: ["MLB 2K", "R.B.I. Baseball", "Super Mega Baseball"],
  },

  {
    id: 66,
    difficulty: "Medio",
    question:
      "¿En qué videojuego de fútbol americano se usa el término 'Madden'?",
    category: deportes,
    correct_answer: "Madden NFL",
    incorrect_answers: ["NFL Street", "NCAA Football", "Blitz: The League"],
  },

  {
    id: 67,
    difficulty: "Difícil",
    question:
      "¿Cuál es el nombre del videojuego de golf desarrollado por EA Sports?",
    category: deportes,
    correct_answer: "Tiger Woods PGA Tour",
    incorrect_answers: [
      "PGA Tour 2K21",
      "Mario Golf: Super Rush",
      "Golf Clash",
    ],
  },

  {
    id: 68,
    difficulty: "Difícil",
    question: "En el videojuego 'FIFA 14', ¿quién es el jugador de portada?",
    category: deportes,
    correct_answer: "Lionel Messi",
    incorrect_answers: ["Kylian Mbappé", "Cristiano Ronaldo", "Neymar Jr."],
  },

  {
    id: 69,
    difficulty: "Difícil",
    question:
      "¿Cuál es el título de la serie de videojuegos de baloncesto desarrollada por 2K Sports?",
    category: deportes,
    correct_answer: "NBA 2K",
    incorrect_answers: ["NBA Live", "NBA Jam", "NBA Street"],
  },
  {
    id: 70,
    category: aventura,
    difficulty: "Fácil",
    question: "¿Cuál es el nombre del hijo de Kratos en el juego 'God of War'?",
    correct_answer: "Atreus",
    incorrect_answers: ["Ares", "Zeus", "Hercules"],
  },

  {
    id: 71,
    category: aventura,
    difficulty: "Medio",
    question:
      "¿Qué organización es responsable de la creación de las criaturas alienígenas en el juego Half-Life?",
    correct_answer: "La Corporación Black Mesa",
    incorrect_answers: ["La Alianza Rebelde", "Los Combinados", "Los Combine"],
  },

  {
    id: 72,
    category: aventura,
    difficulty: "Difícil",
    question:
      "¿En qué videojuego el personaje principal se llama Gordon Freeman?",
    correct_answer: "Half-Life",
    incorrect_answers: ["Bioshock", "Doom", "Quake"],
  },
  {
    id: 73,
    category: aventura,
    difficulty: "Medio",
    question: "¿En qué juego viajan a la tierra de Tamriel?",
    correct_answer: "The Elder Scrolls V: Skyrim",
    incorrect_answers: [
      "World of Warcraft",
      "The Witcher 3: Wild Hunt",
      "Dark Souls",
    ],
  },

  {
    id: 74,
    category: aventura,
    difficulty: "Difícil",
    question:
      "¿Cuál es el nombre del planeta natal del protagonista de la serie 'Metroid'?",
    correct_answer: "Zebes",
    incorrect_answers: ["Tatooine", "Hoth", "Alderaan"],
  },

  {
    id: 75,
    category: aventura,
    difficulty: "Fácil",
    question:
      "¿En qué videojuego los jugadores asumen el papel del arqueólogo aventurero Nathan Drake?",
    correct_answer: "Uncharted",
    incorrect_answers: ["Tomb Raider", "Assassin's Creed", "The Last of Us"],
  },

  {
    id: 76,
    category: aventura,
    difficulty: "Medio",
    question:
      "¿Cuál es el videojuego en el que los jugadores exploran un mundo submarino llamado Rapture?",
    correct_answer: "BioShock",
    incorrect_answers: ["Half-Life", "Dead Space", "Prey"],
  },

  {
    id: 77,
    difficulty: "Fácil",
    question:
      "¿En qué videojuego controlas a Kratos, un antiguo dios de la guerra?",
    category: aventura,
    correct_answer: "God of War",
    incorrect_answers: ["Devil May Cry", "Dark Souls", "Bloodborne"],
  },
  {
    id: 78,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del protagonista de 'Uncharted: El tesoro de Drake'?",
    category: aventura,
    correct_answer: "Nathan Drake",
    incorrect_answers: ["Sam Fisher", "Lara Croft", "Joel Miller"],
  },

  {
    id: 79,
    difficulty: "Difícil",
    question:
      "¿En qué videojuego los jugadores exploran el mundo post-apocalíptico de Wasteland?",
    category: aventura,
    correct_answer: "Fallout",
    incorrect_answers: [
      "The Elder Scrolls V: Skyrim",
      "Bioshock",
      "The Witcher 3: Wild Hunt",
    ],
  },

  {
    id: 80,
    difficulty: "Facil",
    question:
      "¿En qué juego de pelea luchan los personajes del universo Dragon Ball?",
    category: pelea,
    correct_answer: "Dragon Ball FighterZ",
    incorrect_answers: ["Mortal Kombat", "Super Smash Bros.", "Tekken"],
  },

  {
    id: 81,
    category: pelea,
    difficulty: "Medio",
    question: "¿En la serie Tekken, ¿quién es el hijo de Heihachi Mishima?",
    correct_answer: "Jin Kazama",
    incorrect_answers: ["Kazuya Mishima", "Paul Phoenix", "Hwoarang"],
  },

  {
    id: 82,
    category: pelea,
    difficulty: "Difícil",
    question:
      "¿Cuál de estos personajes tiene un guante que lanza lásers en Overwatch?",
    correct_answer: "UD.Va",
    incorrect_answers: ["Reinhardt", "Mercy", "Tracer"],
  },
  {
    id: 83,
    difficulty: "Fácil",
    question:
      "¿Cuál es el nombre de la heroína principal en 'Heroes of Might and Magic III'?",
    category: estrategias,
    correct_answer: "Catherine Ironfist",
    incorrect_answers: ["Sandro", "Gelu", "Solmyr"],
  },
  {
    id: 84,
    difficulty: "Medio",
    question:
      "¿Qué raza de personajes es conocida por su énfasis en la astucia y la diplomacia en 'Stellaris'?",
    category: estrategias,
    correct_answer: "Espacio Élfico",
    incorrect_answers: ["Humanos", "Robots", "Hive Mind"],
  },
  {
    id: 85,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del protagonista en el juego de estrategia 'Command & Conquer: Red Alert'?",
    category: estrategias,
    correct_answer: "Michael Biehn",
    incorrect_answers: ["Kane", "Yuri", "Vladimir Kosygin"],
  },
  {
    id: 86,
    difficulty: "Medio",
    question:
      "¿En qué plataforma se lanzó originalmente el juego 'XCOM: Enemy Unknown'?",
    category: estrategias,
    correct_answer: "PC",
    incorrect_answers: ["PlayStation 3", "Xbox 360", "Nintendo 3DS"],
  },
  {
    id: 87,
    difficulty: "Medio",
    question:
      "¿Cuál es el nombre del villano principal en la serie de juegos 'Warcraft'?",
    category: estrategias,
    correct_answer: "Arthas Menethil",
    incorrect_answers: ["Gul'dan", "Illidan Stormrage", "Thrall"],
  },
  {
    id: 88,
    difficulty: "Medio",
    question: "¿Qué juego de estrategia es conocido por su 'arte de guerra'? ",
    category: estrategias,
    correct_answer: "Total War: Three Kingdoms",
    incorrect_answers: ["Age of Empires III", "Civilization V", "Stellaris"],
  },
  {
    id: 89,
    difficulty: "Medio",
    question:
      "¿En qué período histórico se desarrolla el juego 'Civilization VI'?",
    category: estrategias,
    correct_answer: "Histórico/Futurista",
    incorrect_answers: ["Antigüedad", "Medieval", "Moderno"],
  },
  {
    id: 90,
    difficulty: "Fácil",
    question:
      "¿En qué videojuego de acción controlas a un personaje llamado Master Chief?",
    category: accion,
    correct_answer: "Halo: Combat Evolved",
    incorrect_answers: [
      "Call of Duty: Modern Warfare",
      "Destiny",
      "Gears of War",
    ],
  },
  {
    id: 91,
    difficulty: "Fácil",
    question:
      "¿Cuál es el título del juego de acción en el que te conviertes en un cazador de monstruos profesional?",
    category: accion,
    correct_answer: "Monster Hunter: World",
    incorrect_answers: [
      "Dark Souls III",
      "Bloodborne",
      "The Witcher 3: Wild Hunt",
    ],
  },
  {
    id: 92,
    difficulty: "Fácil",
    question:
      "¿En qué videojuego de acción luchas contra los Combine, una raza alienígena opresora?",
    category: accion,
    correct_answer: "Half-Life 2",
    incorrect_answers: ["Bioshock Infinite", "Prey", "Crysis"],
  },
  {
    id: 93,
    difficulty: "Fácil",
    question:
      "¿Cuál es el juego de acción en tercera persona en el que controlas a un cazador de tesoros llamado Nathan Drake?",
    category: accion,
    correct_answer: "Uncharted 4: A Thief's End",
    incorrect_answers: [
      "Assassin's Creed: Black Flag",
      "The Last of Us",
      "Tomb Raider",
    ],
  },
  {
    id: 94,
    difficulty: "Fácil",
    question:
      "¿En qué videojuego de acción te enfrentas a demonios en un mundo infernal?",
    category: accion,
    correct_answer: "Doom (2016)",
    incorrect_answers: [
      "Dark Souls",
      "Dead Space",
      "Resident Evil 7: Biohazard",
    ],
  },
  {
    id: 95,
    difficulty: "Fácil",
    question:
      "¿Cuál es el título del juego de acción en el que asumes el papel de un agente secreto en un mundo abierto de espionaje?",
    category: accion,
    correct_answer: "Deus Ex: Human Revolution",
    incorrect_answers: [
      "Watch Dogs",
      "Hitman: Absolution",
      "Metal Gear Solid V: The Phantom Pain",
    ],
  },
  {
    id: 96,
    difficulty: "Fácil",
    question:
      "¿En qué juego de acción eres un asesino a sueldo llamado Agent 47?",
    category: accion,
    correct_answer: "Hitman 3",
    incorrect_answers: [
      "Assassin's Creed Valhalla",
      "Mafia: Definitive Edition",
      "Red Dead Redemption 2",
    ],
  },
  {
    id: 97,
    difficulty: "Fácil",
    question:
      "¿Cuál es el título del juego de acción en el que te conviertes en un ninja cibernético en un mundo futurista?",
    category: accion,
    correct_answer: "Cyberpunk 2077",
    incorrect_answers: [
      "Deus Ex: Mankind Divided",
      "Bioshock Infinite",
      "Dishonored 2",
    ],
  },
  {
    id: 98,
    difficulty: "Fácil",
    question:
      "¿En qué videojuego de acción te enfrentas a monstruos gigantes conocidos como Colosos para salvar a una princesa?",
    category: accion,
    correct_answer: "Shadow of the Colossus",
    incorrect_answers: [
      "The Legend of Zelda: Breath of the Wild",
      "Dark Souls III",
      "Bloodborne",
    ],
  },
  {
    id: 99,
    difficulty: "Fácil",
    question:
      "¿Cuál es el título del juego de acción en el que encarnas a un exmarine convertido en caza recompensas en un mundo postapocalíptico?",
    category: accion,
    correct_answer: "Mad Max",
    incorrect_answers: ["Fallout 4", "Rage 2", "The Last of Us Part II"],
  },
  {
    id: 100,
    difficulty: "Fácil",
    question:
      "¿En qué videojuego de acción exploras un mundo lleno de dragones y magia?",
    category: accion,
    correct_answer: "The Elder Scrolls V: Skyrim",
    incorrect_answers: [
      "Dragon Age: Inquisition",
      "Dark Souls",
      "The Witcher 3: Wild Hunt",
    ],
  },
];
