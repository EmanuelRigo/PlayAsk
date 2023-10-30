import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { questions, imgs } from "../data";

const shuffleArray = array => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 5);
};

export const CategoryPage = () => {

    const { category } = useParams()

    

    const [imgCategory] = imgs.filter(
		img => img === `/src/assets/${category.toLowerCase()}.png`
	);



    const [questionsFiltered, setQuestionsFiltered] = useState(
		questions.filter(question => question.category === category)
	);

    const [indexQuestion, setIndexQuestion] = useState(0)
    const [activeQuiz, setActiveQuiz] = useState(false)

    useEffect(() => {
        const newQuestions = shuffleArray(questionsFiltered);
        setQuestionsFiltered(newQuestions);
    }, []);

    return (

        <div className="container flex flex-col items-center justify-center gap-10"
            style={{ height: ' calc(85vh - 5rem' }} >

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
                <div className='flex flex-col gap-5'>
                    <h1 className='text-3xl text-white text-center font-bold'>
                        {category}
                    </h1>

                    <div className='flex justify-center items-center'>
                        <img
                            src= {imgCategory}
                            alt={category}
                            className='w-72'
                        />
                    </div>
                </div>

                <button
                    className='bt-quiz bg-[rgba(10,8,8,0.48)] text-white  py-3 px-5 rounded-xl font-bold'
                    onClick={() => setActiveQuiz(true)}
                >
                    Iniciar Quiz
                </button>
              
            </>
            )}

        </div>
    )
}