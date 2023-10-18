import { Link } from "react-router-dom"
import { GiPunch } from "react-icons/gi";



export const CategoryCard = ({
    category,
    alt, 
    src, 
    gradientColor
}) =>

{console.log(src)
    return (
    <Link to={`/category/${category}` }
     className={`flex flex-col justify-between basis-1/4 bg-slate-500 rounded-2x1 overflow-hidden bg-gradient-to-r ${gradientColor} transition-all hover:scale-105`}>
    <div className='p-5 flex justify-center items-center'> 
    <i className="text-stone-100 text-red-500">{src} </i>
      {/*   <img src={src} 
        alt={alt} 
        className='w-36' /> */}
    </div>

    <h1 className='text-2x1 font-semibold text-stone-100 bg-stone-800 bg-opaciti-60 p-3 px-5'>
        {category}
    </h1>
</Link>
)
}

