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
     className={` tarjetas rounded-xl h-44 w-44 sm:h-36 sm:w-36 lg:h-44 lg:w-44 p-4 flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2x1 overflow-hidden   ${gradientColor} transition-all`}>
    <div className='p-5 flex justify-center items-center'> 
    <i className="svgimg text-stone-100 text-red-500">{src} </i>
     
    </div>

    <h1 className=' svgimg text-center font-rale text-2x1 font-semibold text-stone-100 bg-opaciti-60 p-3 px-5'>
        {category}
    </h1>
</Link>
)
}

// sm:w-40 sm:h-40 md:w-56 md:h-56  xl:h-80 xl:w-80