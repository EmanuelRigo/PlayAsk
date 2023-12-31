import { Results } from './Results';
import React, { useEffect, useState } from 'react'


export const Question = ({
    filteredQuestion,
    questionsFiltered,
    indexQuestion,
    setIndexQuestion,
    setActiveQuiz,
}) => {
    const [score, setScore] = useState(0);
    const [selectAnswerIndex, setSelectAnswerIndex] = useState(null);
    const [answered, setAnswered] = useState(false);
    const [answersRandom, setAnswersRandom] = useState([]);
    const [activeResults, setActiveResults] = useState(false)


    useEffect(() => {
        const answers = [
            ...filteredQuestion.incorrect_answers,
            filteredQuestion.correct_answer,
        ];

        setAnswersRandom(answers.sort(() => Math.random() - 0.5));
    }, [filteredQuestion]);

    const checkAnswer = (answerText, index) => {
        if (answerText === filteredQuestion.correct_answer) {
            setScore(score + 1);
        }
        setSelectAnswerIndex(index)
        setAnswered(true)
    }

    const onNextQuestion = () => {
        setIndexQuestion(indexQuestion + 1);
        setSelectAnswerIndex(null);
        setAnswered(false);
    };

    const onReset = () => {
        setScore(0)
        setActiveQuiz(false)
        setIndexQuestion(0)
    }

    return (<>


        {activeResults ? (

            <Results
                questionsFiltered={questionsFiltered}
                score={score}
                onReset={onReset}
            />

        ) : (<div className='glass container flex flex-col justify-evenly px-5 py-3 shadow-xl rounded-lg gap-5  w-[330px] h-[480px] sm:w-[600px] sm:h-[500px] "'>
            <div className='flex justify-between'>
                <span className='text.xl text-white font-bold'>
                    {indexQuestion + 1} / {questionsFiltered.length}
                </span>
                <div>
                    <span className='font-semibold text-white'>
                        Dificultad:
                    </span>
                    <span className='font-bold text-white'>
                        {filteredQuestion.difficulty}
                    </span>
                </div>
            </div>
            <button className='border-black px-5 py-2 rounded-lg font-bold bg-gray-400 bg-yellow-300 text-black hover:scale-105 transition-all'
                onClick={onReset}>
                Reiniciar
            </button>
            <div>
                <h1 className='font-bold text-white'>{filteredQuestion.question}</h1>
            </div>
            <div className='grid grid-cols-2 gap-5'>
                {answersRandom.map((answer, index) => (
                    <button className={`border p-5 rounded-lg flex justify-center items-center hover:scale-105 transition-all
                ${selectAnswerIndex !== null && 
                    index === selectAnswerIndex 
                    ? answer === filteredQuestion.correct_answer 
                    ? 'verdadero' 
                    : 'falso' 
                    : ''
                        }`}
                        key={answer}
                        onClick={() => checkAnswer(answer, index)}
                        disabled={answered && selectAnswerIndex !== index}
                       >
                        <p className='font-medium text-white text-center text-sm'>
                            {answer}
                        </p>
                    </button>
                ))}

            </div>

            {indexQuestion + 1 === questionsFiltered.length ? (
                <button className='px-5 py-2 rounded-lg font-bold bg-gray-400 bg-yellow-300 text-black hover:scale-105 transition-all border-black'
                    onClick={() => {
                        setAnswered(false);
                        setActiveResults(true);
                    }}>
                    Finalizar </button>
            ) : (
                <button className='px-5 py-2 rounded-lg font-bold bg-gray-400 bg-yellow-300 text-black hover:scale-105 transition-all border-black'
                    onClick={onNextQuestion}>
                    Siguente pregunta</button>
            )}



        </div>)}




    </>
    )
}