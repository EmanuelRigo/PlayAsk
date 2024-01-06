import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { questions, imgs } from "../data";

import {
  GiPunch as Pelea,
  GiAmericanFootballBall as Deportes,
  GiOutbackHat as Aventura,
  GiGameConsole as Clasicos,
  GiGhost as Terror,
  GiChessKnight as Estrategias,
  GiSwitchWeapon as Accion,
} from "react-icons/gi";
import { SiApplearcade as Arcade } from "react-icons/si";

const shuffleArray = (array) => {
  const newArray = array.sort(() => Math.random() - 0.8);
  return newArray.slice(0, 5);
};

export const CategoryPage = () => {
  const { category } = useParams();

  console.log(category);

  ///////funcion switch
  let componente;

  switch (category) {
    case "Pelea":
      componente = <Pelea className="rojo"></Pelea>;
      break;
    case "Deportes":
      componente = <Deportes className="amarillo"></Deportes>;
      break;
    case "Aventura":
      componente = <Aventura className="naranja"></Aventura>;
      break;
    case "Clasicos":
      componente = <Clasicos className="aqua"></Clasicos>;
      break;
    case "Arcade":
      componente = <Arcade className="fucsia"></Arcade>;
      break;
    case "Terror":
      componente = <Terror className="naranja-oscuro"></Terror>;
      break;
    case "Estrategias":
      componente = <Estrategias className="lima"></Estrategias>;
      break;
    case "Accion":
      componente = <Accion className="violeta"></Accion>;
      break;
  }

  console.log(componente);

  ///////switch

  function CustomTag({ category }) {
    return <>{`<${category}>`}</>;
  }

  console.log(imgs);

  const [imgCategory] = imgs.filter(
    (img) => img === `/src/assets/${category.toLowerCase()}.png`
  );

  console.log(imgCategory);

  function capitalizarPrimeraLetra(cadena) {
    // Verificar si la cadena está vacía o es nula
    if (!cadena) return cadena;

    // Poner la primera letra en mayúscula y concatenar el resto de la cadena
    return cadena.charAt(0).toUpperCase() + cadena.slice(1);
  }

  const [questionsFiltered, setQuestionsFiltered] = useState(
    questions.filter((question) => question.category === category)
  );

  const [indexQuestion, setIndexQuestion] = useState(0);
  const [activeQuiz, setActiveQuiz] = useState(false);

  useEffect(() => {
    const newQuestions = shuffleArray(questionsFiltered);
    setQuestionsFiltered(newQuestions);
  }, []);

  return (
    <div
      className="container flex flex-col items-center justify-center gap-10"
      style={{ height: " calc(85vh - 5rem" }}
    >
      {activeQuiz ? (
        <Question
          filteredQuestion={questionsFiltered[indexQuestion]}
          setIndexQuestion={setIndexQuestion}
          indexQuestion={indexQuestion}
          questionsFiltered={questionsFiltered}
          setActiveQuiz={setActiveQuiz}
        />
      ) : (
        <>
          <div className="flex flex-col gap-5">
            <h1 className="text-3xl text-white text-center font-bold">
              {category}
            </h1>

            <div className="flex justify-center items-center ${gradientColor} "></div>

            <div className="icono">{componente}</div>
          </div>

          <button
            className="bt-quiz bg-[rgba(10,8,8,0.48)] text-white  py-3 px-5 rounded-xl font-bold"
            onClick={() => setActiveQuiz(true)}
          >
            Iniciar Quiz
          </button>
        </>
      )}
    </div>
  );
};
