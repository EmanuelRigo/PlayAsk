import { Link } from "react-router-dom"
import { GiPunch } from "react-icons/gi";



export const CategoryCard = ({
    category,
    alt, 
    src, 
    gradientColor
}) =>


{
    console.log(src)
    return (
    <Link to={`/category/${category}` } 
     className={` tarjetas rounded-xl h-24 w-24 md:h-36 sm:w-36 md:h-40 md:w-40 p-4 flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2x1 overflow-hidden   ${gradientColor} transition-all`}>
    <div className='p-0 md:p-5 flex justify-center items-center'> 
    <i className="svgimg text-stone-100 text-red-500">{src} </i>
     
    </div>

    <h1 className=' svgimg text-center font-rale text-xs sm:text-lg mt-2 mx-auto font-semibold text-stone-100 bg-opaciti-60 p-0 px-0 '>
        {category}
    </h1>
</Link>
)
}

