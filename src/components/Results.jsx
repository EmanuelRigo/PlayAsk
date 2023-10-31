import React from "react";

export const Results = ({score, questionsFiltered, onReset}) => {
    return (
        
    
        <div className='glass container flex flex-col justify-evenly items-center shadow-xl rounded-lg w-[600px] h-[600px] gap-5'>
        <h1 className='text-4xl font-bold text-white'> Resultados</h1>
        <div className='flex flex-col gap-5 text-center text-lg font-bold text-white'>
            <span>Acertaste</span>
            <span className='font-black bg-gradient-to-r from-yellow-500 to-green-500 bg-clip-text text-transparent text-6xl animate-pulse'>
                {((score / questionsFiltered.length) * 100).toFixed(0)}%
            </span>
            de las preguntas ({score} de {questionsFiltered.length})
        </div>
            <button className='bt-quiz bg-[rgba(10,8,8,0.48)] text-white  py-3 px-5 rounded-xl font-bold'
            onClick={onReset}>
                Volver a empezar </button>  
    </div> 
    )
}