import Facil from './assets/facil.jpg';
import Medio from './assets/medio.jpg';
import Dificil from './assets/dificil.jpeg';

export const imgs = [
    Facil,
    Medio,
    Dificil
]

export const niveles ={
    facil: 'Facil',
    medio: 'Medio',
    dificil: 'Dificil'

};

const {
    facil,
    medio,
    dificil
} = niveles

export const questions = [

    {
      "id": 1,
      "dificultad": "facil",
      "pregunta": "¿Cuál es el nombre del fontanero italiano creado por Nintendo?",
      "respuesta_correcta": "Mario",
      "respuestas_incorrectas": ["Luigi", "Yoshi", "Toad"]
    },
    {
      "id": 2,
      "dificultad": "medio",
      "pregunta": "¿Cuál es el título del primer juego de la serie 'The Elder Scrolls'?",
      "respuesta_correcta": "Arena",
      "respuestas_incorrectas": ["Daggerfall", "Morrowind", "Oblivion"]
    },
    {
      "id": 3,
      "dificultad": "dificil",
      "pregunta": "En el juego 'The Legend of Zelda: Ocarina of Time', ¿cuántas mazmorras principales hay?",
      "respuesta_correcta": "9",
      "respuestas_incorrectas": ["7", "8", "10"]
    },
    {
      "id": 4,
      "dificultad": "facil",
      "pregunta": "¿Cuál es el nombre del famoso juego de construcción de bloques desarrollado por Mojang?",
      "respuesta_correcta": "Minecraft",
      "respuestas_incorrectas": ["Terraria", "Fortnite", "Roblox"]
    },
    {
      "id": 5,
      "dificultad": "medio",
      "pregunta": "En 'Pokémon', ¿cuál es el nombre del personaje que se convierte en el Campeón de la Liga Pokémon en la región de Kanto?",
      "respuesta_correcta": "Blue",
      "respuestas_incorrectas": ["Red", "Green", "Yellow"]
    },
    {
      "id": 6,
      "dificultad": "dificil",
      "pregunta": "¿Cuál es el primer jefe que enfrentas en 'Dark Souls'?",
      "respuesta_correcta": "Asylum Demon",
      "respuestas_incorrectas": ["Taurus Demon", "Bell Gargoyle", "Moonlight Butterfly"]
    },
    {
      "id": 7,
      "dificultad": "facil",
      "pregunta": "En 'Super Mario Bros.', ¿cuál es el nombre del reino gobernado por la Princesa Peach?",
      "respuesta_correcta": "Reino Champiñón",
      "respuestas_incorrectas": ["Reino Fungus", "Reino Hongo", "Reino Cogumelo"]
    },
    {
      "id": 8,
      "dificultad": "medio",
      "pregunta": "¿Cuál es el nombre del virus mortal en 'Resident Evil'?",
      "respuesta_correcta": "T-Virus",
      "respuestas_incorrectas": ["G-Virus", "Umbrella Virus", "Z-Virus"]
    },
    {
      "id": 9,
      "dificultad": "dificil",
      "pregunta": "¿Cuál es el nombre del protagonista en 'Metal Gear Solid'?",
      "respuesta_correcta": "Solid Snake",
      "respuestas_incorrectas": ["Liquid Snake", "Big Boss", "Raiden"]
    },
    {
      "id": 10,
      "dificultad": "facil",
      "pregunta": "¿En qué juego de plataformas se controla a un marsupial llamado Crash?",
      "respuesta_correcta": "Crash Bandicoot",
      "respuestas_incorrectas": ["Spyro the Dragon", "Banjo-Kazooie", "Gex the Gecko"]
    },
    {
      "id": 11,
      "dificultad": "medio",
      "pregunta": "En 'The Witcher 3', ¿cuál es el nombre del protagonista?",
      "respuesta_correcta": "Geralt de Rivia",
      "respuestas_incorrectas": ["Ciri", "Yennefer", "Triss"]
    },
    {
      "id": 12,
      "dificultad": "dificil",
      "pregunta": "En 'Fallout 4', ¿cuál es el nombre del perro compañero del protagonista?",
      "respuesta_correcta": "Dogmeat",
      "respuestas_incorrectas": ["Rex", "Fido", "Buddy"]
    },
    {
      "id": 13,
      "dificultad": "facil",
      "pregunta": "¿Cuál es el nombre del hermano de Luigi en la serie 'Mario'?",
      "respuesta_correcta": "Luigi",
      "respuestas_incorrectas": ["Wario", "Yoshi", "Toad"]
    },
    {
      "id": 14,
      "dificultad": "medio",
      "pregunta": "¿En qué juego de rol asumes el papel de un Vault Dweller que busca un agua pura en un mundo post-apocalíptico?",
      "respuesta_correcta": "Fallout 3",
      "respuestas_incorrectas": ["The Elder Scrolls V: Skyrim", "Bioshock", "Mass Effect"]
    }
]