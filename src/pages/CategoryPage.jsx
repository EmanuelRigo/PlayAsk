import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Question } from "../components/Question";
import { questions } from "../data";

const shuffleArray = array => {
    const newArray = array.sort(() => Math.random() - 0.5);
    return newArray.slice(0, 5);
};

export const CategoryPage = () => {

    const { category } = useParams()


    const [questionsFiltered, setQuestionsFiltered] = useState(
        questions.filter(question => question.category === category)

    );

    const [indexQuestion, setIndexQuestion] = useState(0)

    useEffect(() => {
        const newQuestions = shuffleArray(questionsFiltered);
        setQuestionsFiltered(newQuestions);
    }, []);

    return (

        <div className="container flex flex-col items-center justify-center gap-10"
            style={{ height: ' calc(100vh - 5rem' }} >


            <Question filteredQuestion={questionsFiltered[indexQuestion]} 
            setIndexQuestion={setIndexQuestion}
            indexQuestion={indexQuestion}
            questionsFiltered={questionsFiltered}/>
        </div>
    )
}