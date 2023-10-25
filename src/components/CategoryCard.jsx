import { Link } from "react-router-dom"
import { GiPunch } from "react-icons/gi";



export const CategoryCard = ({
    category,
    alt, 
    src, 
    gradientColor
}) =>

{
    return (
    <Link to={`/category/${category}` }
     className={`border border-black p-0 rounded-lg w-32 h-32 lg:h-56 lg:w-56 lg:p-4 flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2x1 overflow-hidden  ${gradientColor} transition-all hover:scale-105`}>
    <div className='p-5 flex justify-center items-center'> 
    <i className="text-stone-100 text-red-500">{src} </i>
     
    </div>

    <h1 className='text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opaciti-60 p-3 px-5'>
        {category}
    </h1>
</Link>
)
}

// sm:w-40 sm:h-40 md:w-56 md:h-56  xl:h-80 xl:w-80