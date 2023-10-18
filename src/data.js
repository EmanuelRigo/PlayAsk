import Pelea from './assets/pelea.png'
import Deportes from './assets/deportes.png';
import Aventura from './assets/Aventura.png';
import Clasicos from './assets/Clasicos.png';
import Arcade from './assets/arcade.png';
import Terror from './assets/terror.png';
import Estrategias from './assets/estrategias.png';
import Accion from './assets/accion.png'

export const imgs = [
	Pelea,
	Deportes,
	Aventura,
	Clasicos,
	Arcade,
	Terror,
	Estrategias,
	Accion
];

export const categories = {
	arcade: 'Arcade', 
	terror: 'Terror',
	deportes: 'Deportes',
	pelea: 'Pelea',
	aventura: 'Aventura',
	estrategias: 'Estrategias',
	clasicos: 'Clasicos',
	accion: 'Accion'
};

const {
	arcade,
	estrategias,
	terror,
	deportes,
	pelea,
	aventura,
	clasicos,
	accion
} = categories;

export const questions = [
	{
		id: 1,
		difficulty: 'Fácil',
		question: '¿Qué evento inició la Primera Guerra Mundial?',
		category: arcade,
		correct_answer:
			'El asesinato del Archiduque Franz Ferdinand de Austria',
		incorrect_answers: [
			'El hundimiento del Titanic',
			'La invasión de Polonia por Alemania',
			'La Revolución Francesa',
		],
	},
	{
		id: 2,
		difficulty: 'Fácil',
		question: '¿Quién es el autor de "Cien años de soledad"?        ',
		category: terror,
		correct_answer: 'Gabriel García Márquez',
		incorrect_answers: [
			'Julio Cortázar',
			'Mario Vargas Llosa',
			'Pablo Neruda',
		],
	},
	{
		id: 3,
		difficulty: 'Fácil',
		question: '¿En qué deporte se utiliza un disco?',
		category: deportes,
		correct_answer: 'Hockey sobre hielo',
		incorrect_answers: ['Fútbol', 'Baloncesto', 'Béisbol'],
	},
	{
		id: 4,
		difficulty: 'Medio',
		question: "¿Cuál de estos personajes es conocido por su técnica de 'Shoryuken' en el juego 'Street Fighter'?",
		category: pelea,
		correct_answer: 'Ryu',
		incorrect_answers: ["Chun-Li", "Guile", "Blanka"],
	},
	
	{
		id: 5,
		difficulty: 'Difícil',
		question:
			'¿Quién es considerado el padre de la filosofía occidental?',
		category: aventura,
		correct_answer: 'Sócrates',
		incorrect_answers: ['Aristóteles', 'Platón', 'Nietzsche'],
	},
	{
		id: 6,
		difficulty: 'Medio',
		question: '¿En qué año fue fundada la compañía Apple?',
		category: estrategias,
		correct_answer: '1976',
		incorrect_answers: ['1984', '1991', '1967'],
	},
	{
		id: 7,
		difficulty: 'Fácil',
		question: '¿Cuál es el río más largo del mundo?',
		category: clasicos,
		correct_answer: 'El Río Amazonas',
		incorrect_answers: [
			'El Río Nilo',
			'El Río Yangtze',
			'El Río Misisipi',
		],
	},
	{
		id: 8,
		difficulty: 'Medio',
		question: '¿Cuál es el océano más grande del mundo?',
		category: clasicos,
		correct_answer: 'El Océano Pacífico',
		incorrect_answers: [
			'El Océano Atlántico',
			'El Océano Índico',
			'El Océano Ártico',
		],
	},
	{
		id: 9,
		difficulty: 'Difícil',
		question: '¿Cuál es la obra más famosa de William Shakespeare?',
		category: terror,
		correct_answer: 'Hamlet',
		incorrect_answers: ['Romeo y Julieta', 'Macbeth', 'El Rey Lear'],
	},
	{
		id: 10,
		difficulty: 'Medio',
		question: 'En la serie Mortal Kombat, ¿quién es el hechicero maestro del fuego?',
		category: pelea,
		correct_answer: 'Scorpion',
		incorrect_answers: [
			"Sub-Zero", "Raiden", "Liu Kang",
		],
	},
	{
		id: 11,
		difficulty: 'Fácil',
		question: '¿Qué país ganó el primer Mundial de Fútbol?',
		category: deportes,
		correct_answer: 'Uruguay',
		incorrect_answers: ['Brasil', 'Argentina', 'Alemania'],
	},
	{
		id: 12,
		difficulty: 'Medio',
		question: '¿Cuál de los siguientes personajes es el eterno rival de Ryu en Street Fighter?',
		category: pelea,
		correct_answer:
			'ken',
		incorrect_answers: [
			"Sagat", "Akuma", "Dan",
		],
	},
	{
		id: 13,
		difficulty: 'Medio',
		question:
			'¿En qué año se celebraron los primeros Juegos Olímpicos modernos?',
		category: deportes,
		correct_answer: '1896',
		incorrect_answers: ['1900', '1924', '1936'],
	},
	{
		id: 14,
		difficulty: 'Fácil',
		question: 'Cuál es el nombre del personaje principal en el juego Tekken?',
		category: pelea,
		correct_answer: 'JKazuya Mishima',
		incorrect_answers: ["Heihachi Mishima", "Jin Kazama", "Paul Phoenix"],
	},
	{
		id: 15,
		difficulty: 'Fácil',
		question: "¿Quién escribió la obra 'Don Quijote de la Mancha'?",
		category: terror,
		correct_answer: 'Miguel de Cervantes',
		incorrect_answers: [
			'Federico García Lorca',
			'Gabriel García Márquez',
			'Pablo Neruda',
		],
	},
	{
		id: 16,
		difficulty: 'Medio',
		question:
			'¿Cuál de estos personajes es un luchador de sumo en Street Fighter?',
		category: pelea,
		correct_answer: 'E. Honda',
		incorrect_answers: ["Balrog", "Vega", "Sagat"],
	},
	{
		id: 17,
		difficulty: 'Medio',
		question: '¿Cuál es el país más poblado del mundo?',
		category: clasicos,
		correct_answer: 'China',
		incorrect_answers: ['India', 'Estados Unidos', 'Brasil'],
	},
	{
		id: 18,
		difficulty: 'Medio',
		question:
			'¿Quién es considerado el padre de la filosofía occidental?',
		category: aventura,
		correct_answer: 'Sócrates',
		incorrect_answers: ['Platón', 'Aristóteles', 'Descartes'],
	},
	{
		id: 19,
		difficulty: 'Difícil',
		question: '¿En qué juego de pelea aparece el personaje Sub-Zero?',
		category: pelea,
		correct_answer: 'Mortal Kombat',
		incorrect_answers: [
			"Street Fighter", "Tekken", "Super Smash Bros."
		],
	},
	{
		id: 20,
		difficulty: 'Fácil',
		question: '¿Quién es el autor de la novela "El viejo y el mar"?',
		category: terror,
		correct_answer: 'Ernest Hemingway',
		incorrect_answers: [
			'William Shakespeare',
			'J.K. Rowling',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 21,
		difficulty: 'Fácil',
		question: '¿Cuál es el nombre del protagonista en el juego de lucha SoulCalibur?',
		category: pelea,
		correct_answer: 'Ivy Valentine',
		incorrect_answers: ["Siegfried Schtauffen", "Mitsurugi", "Voldo"],
	},
	{
		id: 22,
		difficulty: 'Medio',
		question: '¿Quién es el creador del sistema operativo Linux?',
		category: estrategias,
		correct_answer: 'Linus Torvalds',
		incorrect_answers: [
			'Steve Jobs',
			'Bill Gates',
			'Mark Zuckerberg',
		],
	},
	{
		id: 23,
		difficulty: 'Medio',
		question: '¿En qué año terminó la Segunda Guerra Mundial?',
		category: arcade,
		correct_answer: '1945',
		incorrect_answers: ['1939', '1941', '1943'],
	},
	{
		id: 24,
		difficulty: 'Fácil',
		question: '¿Quién es el luchador icónico que usa una venda en los ojos en Mortal Kombat?',
		category: pelea,
		correct_answer: 'Kenshi',
		incorrect_answers: ["Sub-Zero", "Scorpion", "Raiden"],
	},
	{
		id: 25,
		difficulty: 'Medio',
		question:
			"¿Qué escritor es conocido por haber escrito 'Cien años de soledad'?",
		category: terror,
		correct_answer: 'Gabriel García Márquez',
		incorrect_answers: [
			'Jorge Luis Borges',
			'Pablo Neruda',
			'Julio Cortázar',
		],
	},
	{
		id: 26,
		difficulty: 'Difícil',
		question:
			'¿Qué país es el más grande en términos de superficie terrestre?',
		category: clasicos,
		correct_answer: 'Rusia',
		incorrect_answers: ['Estados Unidos', 'China', 'Australia'],
	},
	{
		id: 27,
		difficulty: 'Medio',
		question: '¿Cuál es la capital de Canadá?',
		category: clasicos,
		correct_answer: 'Ottawa',
		incorrect_answers: ['Toronto', 'Montreal', 'Vancouver'],
	},
	{
		id: 28,
		difficulty: 'Fácil',
		question: '¿Cuál de los siguientes personajes usa una máscara de luchador mexicano en Guacamelee!?',
		category: pelea,
		correct_answer: 'Juan Aguacate',
		incorrect_answers: ["Tostada", "Carlos Calaca", "El Diablo"],
	},
	{
		id: 29,
		difficulty: 'Medio',
		question:
			'¿Qué jugador de fútbol ha ganado más Balones de Oro en la arcade?',
		category: deportes,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Johan Cruyff',
			'Diego Maradona',
		],
	},
	{
		id: 30,
		difficulty: 'Fácil',
		question: '¿En qué año ocurrió la Revolución Francesa?',
		category: arcade,
		correct_answer: '1789',
		incorrect_answers: ['1848', '1917', '1492'],
	},
	// -------------------
	{
		id: 31,
		difficulty: 'Fácil',
		category: estrategias,
		question: '¿Qué significa la sigla HTML?',
		correct_answer: 'HyperText Markup Language',
		incorrect_answers: [
			'Hyperlinks and Text Markup Language',
			'Home Tool Markup Language',
			'Hyperlinking Text Markup Language',
		],
	},
	{
		id: 32,
		difficulty: 'Fácil',
		category: estrategias,
		question: '¿Cuál es el navegador web más utilizado en el mundo?',
		correct_answer: 'Google Chrome',
		incorrect_answers: ['Safari', 'Firefox', 'Internet Explorer'],
	},
	{
		id: 33,
		difficulty: 'Fácil',
		category: estrategias,
		question:
			'¿Qué lenguaje de programación es más utilizado para el desarrollo web?',
		correct_answer: 'JavaScript',
		incorrect_answers: ['Python', 'Java', 'C++'],
	},
	{
		id: 34,
		difficulty: 'Medio',
		category: estrategias,
		question: '¿Qué es un servidor web?',
		correct_answer:
			'Un programa que recibe y procesa solicitudes HTTP',
		incorrect_answers: [
			'Un programa que envía correos electrónicos',
			'Un programa que protege la privacidad de los usuarios en línea',
			'Un programa que realiza operaciones matemáticas complejas',
		],
	},
	{
		id: 35,
		difficulty: 'Medio',
		category: estrategias,
		question: '¿Qué es un ataque de phishing?',
		correct_answer:
			'Un intento de obtener información confidencial a través de un correo electrónico falso',
		incorrect_answers: [
			'Un virus que daña los archivos del ordenador',
			'Un tipo de ataque DDoS',
			'Un intento de secuestrar el tráfico de internet',
		],
	},
	{
		id: 36,
		difficulty: 'Medio',
		category: estrategias,
		question: '¿Qué es un archivo CSV?',
		correct_answer:
			'Un archivo de texto con valores separados por comas',
		incorrect_answers: [
			'Un archivo de audio comprimido',
			'Un archivo de imagen en formato vectorial',
			'Un archivo de vídeo de alta definición',
		],
	},
	{
		id: 37,
		difficulty: 'Difícil',
		category: estrategias,
		question: '¿Qué es un algoritmo de cifrado asimétrico?',
		correct_answer:
			'Un método de cifrado que utiliza dos claves diferentes',
		incorrect_answers: [
			'Un método de cifrado que utiliza la misma clave para cifrar y descifrar',
			'Un método de cifrado que no utiliza claves',
			'Un método de cifrado que solo se utiliza en aplicaciones militares',
		],
	},
	{
		id: 38,
		difficulty: 'Difícil',
		category: estrategias,
		question: '¿Qué es una red privada virtual (VPN)?',
		correct_answer:
			'Una conexión segura a una red privada a través de internet',
		incorrect_answers: [
			'Una red de computadoras en una organización',
			'Una red de computadoras conectadas a internet',
			'Una red de computadoras que solo utiliza tecnología inalámbrica',
		],
	},
	{
		id: 39,
		difficulty: 'Difícil',
		question: '¿En qué año se produjo la Guerra de los Cien Años?',
		category: arcade,
		correct_answer: '1337',
		incorrect_answers: ['1066', '1415', '1642'],
	},
	{
		id: 40,
		difficulty: 'Fácil',
		question: '¿En qué año se produjo el ataque a Pearl Harbor?',
		category: arcade,
		correct_answer: '1941',
		incorrect_answers: ['1939', '1942', '1945'],
	},
	{
		id: 41,
		difficulty: 'Medio',
		question: '¿Qué tratado dio fin a la Primera Guerra Mundial?',
		category: arcade,
		correct_answer: 'Tratado de Versalles',
		incorrect_answers: [
			'Tratado de Tordesillas',
			'Tratado de Westfalia',
			'Tratado de Nankín',
		],
	},
	{
		id: 42,
		difficulty: 'Difícil',
		question:
			'¿Quién fue el último emperador de la Dinastía Qing en China?',
		category: arcade,
		correct_answer: 'Puyi',
		incorrect_answers: ['Hongwu', 'Wuzong', 'Kangxi'],
	},
	{
		id: 43,
		difficulty: 'Fácil',
		question:
			'¿Cuál fue el nombre de la primera expedición de Cristóbal Colón?',
		category: arcade,
		correct_answer: 'La Santa María',
		incorrect_answers: [
			'La Pinta',
			'La Niña',
			'La Santísima Trinidad',
		],
	},
	{
		id: 44,
		difficulty: 'Medio',
		question:
			'¿Cuál fue el primer país en enviar un objeto hecho por el hombre a la luna?',
		category: arcade,
		correct_answer: 'Estados Unidos',
		incorrect_answers: ['Unión Soviética', 'China', 'Japón'],
	},
	{
		id: 45,
		difficulty: 'Difícil',
		question:
			'¿Cuál fue la primera ciudad en el mundo en tener una población de más de un millón de habitantes?',
		category: arcade,
		correct_answer: 'Roma',
		incorrect_answers: ['Atenas', 'Babilonia', 'Nínive'],
	},
	{
		id: 46,
		difficulty: 'Fácil',
		question:
			'¿Quién fue el primer presidente de los Estados Unidos?',
		category: arcade,
		correct_answer: 'George Washington',
		incorrect_answers: [
			'Thomas Jefferson',
			'Abraham Lincoln',
			'Franklin D. Roosevelt',
		],
	},
	{
		id: 47,
		difficulty: 'Medio',
		question: '¿Cuál fue la primera dinastía en gobernar en China?',
		category: arcade,
		correct_answer: 'Xia',
		incorrect_answers: ['Han', 'Tang', 'Song'],
	},
	{
		id: 48,
		difficulty: 'Fácil',
		question: '¿Quién escribió la obra "Don Quijote de la Mancha"?',
		category: terror,
		correct_answer: 'Miguel de Cervantes',
		incorrect_answers: [
			'Gabriel García Márquez',
			'Jorge Luis Borges',
			'Pablo Neruda',
		],
	},
	{
		id: 49,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes novelas es escrita por Gabriel García Márquez?',
		category: terror,
		correct_answer: 'Cien años de soledad',
		incorrect_answers: [
			'Rayuela',
			'La ciudad y los perros',
			'La casa de los espíritus',
		],
	},
	{
		id: 50,
		difficulty: 'Difícil',
		question: '¿Quién escribió "La metamorfosis"?',
		category: terror,
		correct_answer: 'Franz Kafka',
		incorrect_answers: [
			'Virginia Woolf',
			'James Joyce',
			'F. Scott Fitzgerald',
		],
	},
	{
		id: 51,
		difficulty: 'Fácil',
		question: '¿Quién escribió "El retrato de Dorian Gray"?',
		category: terror,
		correct_answer: 'Oscar Wilde',
		incorrect_answers: [
			'Edgar Allan Poe',
			'Emily Bronte',
			'Charles Dickens',
		],
	},
	{
		id: 52,
		difficulty: 'Medio',
		question:
			'¿Cuál de las siguientes obras no fue escrita por William Shakespeare?',
		category: terror,
		correct_answer: 'Moby Dick',
		incorrect_answers: ['Hamlet', 'Macbeth', 'Otelo'],
	},
	{
		id: 53,
		difficulty: 'Difícil',
		question:
			'¿Cuál de las siguientes obras de José Saramago recibió el Premio Nobel de terror?',
		category: terror,
		correct_answer: 'Ensayo sobre la ceguera',
		incorrect_answers: [
			'La caverna',
			'El evangelio según Jesucristo',
			'Las intermitencias de la muerte',
		],
	},
	{
		id: 54,
		difficulty: 'Fácil',
		question:
			'¿Quién escribió la novela "El guardián entre el centeno"?',
		category: terror,
		correct_answer: 'J.D. Salinger',
		incorrect_answers: [
			'F. Scott Fitzgerald',
			'Ernest Hemingway',
			'Tennessee Williams',
		],
	},
	{
		id: 55,
		difficulty: 'Difícil',
		question: '¿Cuál es el país más grande de África?',
		category: clasicos,
		correct_answer: 'Argelia',
		incorrect_answers: [
			'Sudán',
			'Libia',
			'República Democrática del Congo',
		],
	},
	{
		id: 56,
		difficulty: 'Fácil',
		question: '¿Cuál es el país más grande del mundo?',
		category: clasicos,
		correct_answer: 'Rusia',
		incorrect_answers: ['China', 'Estados Unidos', 'Canadá'],
	},
	{
		id: 57,
		difficulty: 'Medio',
		question: '¿En qué continente se encuentra el lago Baikal?',
		category: clasicos,
		correct_answer: 'Asia',
		incorrect_answers: ['Europa', 'África', 'América del Sur'],
	},
	{
		id: 58,
		difficulty: 'Medio',
		question: '¿Cuál es el país más poblado del mundo?',
		category: clasicos,
		correct_answer: 'China',
		incorrect_answers: ['India', 'Estados Unidos', 'Indonesia'],
	},
	{
		id: 59,
		difficulty: 'Difícil',
		question: '¿Cuál es la montaña más alta del mundo?',
		category: clasicos,
		correct_answer: 'El Monte Everest',
		incorrect_answers: ['El K2', 'El Mont Blanc', 'El Aconcagua'],
	},
	{
		id: 60,
		difficulty: 'Difícil',
		question: '¿Cuál es el país más pequeño del mundo?',
		category: clasicos,
		correct_answer: 'El Vaticano',
		incorrect_answers: ['Mónaco', 'Nauru', 'Tuvalu'],
	},
	{
		id: 61,
		difficulty: 'Medio',
		question: '¿Cuál es el país más extenso de África?',
		category: clasicos,
		correct_answer: 'Argelia',
		incorrect_answers: ['Nigeria', 'Egipto', 'Sudáfrica'],
	},
	{
		id: 62,
		difficulty: 'Fácil',
		question: '¿Qué país ganó la Copa Mundial de la FIFA en 2018?',
		category: deportes,
		correct_answer: 'Francia',
		incorrect_answers: ['Alemania', 'Brasil', 'Argentina'],
	},
	{
		id: 63,
		difficulty: 'Fácil',
		question: '¿Qué deporte se juega en Wimbledon?',
		category: deportes,
		correct_answer: 'Tenis',
		incorrect_answers: ['Golf', 'Fútbol', 'Rugby'],
	},
	{
		id: 64,
		difficulty: 'Medio',
		question:
			'¿Cuántos puntos vale un touchdown en el fútbol americano?',
		category: deportes,
		correct_answer: '6',
		incorrect_answers: ['4', '7', '5'],
	},
	{
		id: 65,
		difficulty: 'Medio',
		question:
			'¿Cuál es el jugador de baloncesto con más anillos de campeonato en la NBA?',
		category: deportes,
		correct_answer: 'Bill Russell',
		incorrect_answers: [
			'Michael Jordan',
			'Kareem Abdul-Jabbar',
			'LeBron James',
		],
	},
	{
		id: 66,
		difficulty: 'Medio',
		question:
			'¿Cuál es el país de origen del futbolista Lionel Messi?',
		category: deportes,
		correct_answer: 'Argentina',
		incorrect_answers: ['Brasil', 'España', 'Portugal'],
	},
	{
		id: 67,
		difficulty: 'Difícil',
		question:
			'¿En qué año se celebraron los Juegos Olímpicos de Beijing?',
		category: deportes,
		correct_answer: '2008',
		incorrect_answers: ['2012', '2004', '2016'],
	},
	{
		id: 68,
		difficulty: 'Difícil',
		question:
			'¿Quién es el máximo goleador en la arcade de la Liga Española?',
		category: deportes,
		correct_answer: 'Lionel Messi',
		incorrect_answers: [
			'Cristiano Ronaldo',
			'Telmo Zarra',
			'Hugo Sánchez',
		],
	},
	{
		id: 69,
		difficulty: 'Difícil',
		question: '¿En qué deporte se utiliza el término "smash"?',
		category: deportes,
		correct_answer: 'Bádminton',
		incorrect_answers: ['Voleibol', 'Tenis', 'Squash'],
	},
	{
		id: 70,
		category: aventura,
		difficulty: 'Fácil',
		question: '¿Cuál es la obra más conocida de Platón?',
		correct_answer: 'La República',
		incorrect_answers: ['El Banquete', 'Timeo', 'Fedón'],
	},
	{
		id: 71,
		category: aventura,
		difficulty: 'Medio',
		question:
			'¿Cuál es el concepto central de la filosofía de Descartes?',
		correct_answer: 'El cogito ergo sum',
		incorrect_answers: [
			'El empirismo',
			'El materialismo',
			'La fenomenología',
		],
	},
	{
		id: 72,
		category: aventura,
		difficulty: 'Difícil',
		question: '¿Qué es la dialéctica en la filosofía de Hegel?',
		correct_answer:
			'El método para llegar a la verdad mediante la contradicción',
		incorrect_answers: [
			'La creación de un sistema filosófico',
			'La negación de la realidad',
			'El análisis de los procesos cognitivos',
		],
	},
	{
		id: 73,
		category: aventura,
		difficulty: 'Medio',
		question: '¿Qué es el nihilismo en la filosofía?',
		correct_answer: 'La negación de todos los valores y creencias',
		incorrect_answers: [
			'La afirmación de la existencia de un ser superior',
			'La creencia en la reencarnación',
			'La negación de la existencia del mundo externo',
		],
	},
	{
		id: 74,
		category: aventura,
		difficulty: 'Difícil',
		question:
			'¿Qué es la deconstrucción en la filosofía de Jacques Derrida?',
		correct_answer:
			'El análisis crítico de la relación entre los significados y los conceptos',
		incorrect_answers: [
			'La creación de nuevos conceptos a partir de la combinación de los antiguos',
			'La búsqueda de la verdad absoluta',
			'La negación de la existencia del lenguaje',
		],
	},
	{
		id: 75,
		category: aventura,
		difficulty: 'Fácil',
		question: '¿Qué es la ética?',
		correct_answer:
			'La rama de la filosofía que estudia la moral y la conducta humana',
		incorrect_answers: [
			'La rama de la filosofía que estudia la lógica',
			'La rama de la filosofía que estudia la mente',
			'La rama de la filosofía que estudia el conocimiento',
		],
	},
	{
		id: 76,
		category: aventura,
		difficulty: 'Medio',
		question:
			'¿Qué es el imperativo categórico en la filosofía de Kant?',
		correct_answer:
			'La regla moral que se debe seguir en cualquier situación',
		incorrect_answers: [
			'La creencia en la existencia de un Dios creador',
			'La negación de la libertad humana',
			'La afirmación de la existencia de una verdad absoluta',
		],
	},
	{
		id: 77,
		difficulty: 'Fácil',
		question: '¿Quién fue el autor de la obra "La República"?',
		category: aventura,
		correct_answer: 'Platón',
		incorrect_answers: ['Aristóteles', 'Sócrates', 'Nietzsche'],
	},
	{
		id: 78,
		difficulty: 'Medio',
		question:
			'¿Cuál es el término filosófico para referirse al estudio del conocimiento?',
		category: aventura,
		correct_answer: 'Epistemología',
		incorrect_answers: ['Ontología', 'Metafísica', 'Lógica'],
	},
	{
		id: 79,
		difficulty: 'Difícil',
		question:
			'¿Quién escribió el libro "El mundo como voluntad y representación"?',
		category: aventura,
		correct_answer: 'Arthur Schopenhauer',
		incorrect_answers: [
			'Friedrich Nietzsche',
			'Immanuel Kant',
			'Jean-Paul Sartre',
		],
	},
	{
		id: 80,
		difficulty: 'Facil',
		question: '¿En qué juego de pelea luchan los personajes del universo Dragon Ball?',
		category: pelea,
		correct_answer: 'Dragon Ball FighterZ',
		incorrect_answers: ["Mortal Kombat", "Super Smash Bros.", "Tekken"],
	},

	{
		id: 81,
		category: pelea,
		difficulty: 'Medio',
		question: '¿En la serie Tekken, ¿quién es el hijo de Heihachi Mishima?',
		correct_answer:
			'Jin Kazama',
		incorrect_answers: [
			"Kazuya Mishima", "Paul Phoenix", "Hwoarang",
		],
	},

	{
		id: 82,
		category: pelea,
		difficulty: 'Difícil',
		question: '¿Cuál de estos personajes tiene un guante que lanza lásers en Overwatch?',
		correct_answer:
			'UD.Va',
		incorrect_answers: [
			"Reinhardt", "Mercy", "Tracer",
		],
	},
	{
		id: 83,
		difficulty: 'Fácil',
		question: '¿Qué es el acrónimo "CPU" en inglés?',
		category: estrategias,
		correct_answer: 'Central Processing Unit',
		incorrect_answers: [
			'Computer Personal Unit',
			'Central Personal Unit',
			'Computer Processing Unit',
		],
	},
	{
		id: 84,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: estrategias,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
	///////////
	{
		id: 85,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: estrategias,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
	{
		id: 86,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: estrategias,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
	{
		id: 87,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: estrategias,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
	{
		id: 88,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: estrategias,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
	{
		id: 89,
		difficulty: 'Medio',
		question:
			'¿Cuál es el nombre de la primera computadora electrónica digital?',
		category: estrategias,
		correct_answer: 'ENIAC',
		incorrect_answers: ['UNIVAC', 'COLOSSUS', 'EDSAC'],
	},
];






