import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';
////
import { GiPunch,GiAmericanFootballBall,GiOutbackHat,GiGameConsole,GiGhost,GiChessKnight,GiSwitchWeapon } from "react-icons/gi";
import { SiApplearcade } from "react-icons/si";

const [
    imgPelea,
    imgDeportes,
    imgAventura,
    imgClasicos,
    imgArcade,
    imgTerror,
    imgEstrategias,
    imgAccion
] = imgs

export const CategoryList = () => {

    return (
        <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
             
            
            <CategoryCard
            

                category={categories.pelea}
            
                src={<GiPunch></GiPunch>}
                alt={`categoría ${categories.pelea}`}
                
                gradientColor="from-purple-500 to-pink-500"
            />


           
            <CategoryCard
                category={categories.deportes}
                src={<GiAmericanFootballBall/>}
                alt={`categoría ${categories.deportes}`}
                gradientColor="from-lime-400 to-teal-700"
            />


          
            <CategoryCard
                category={categories.aventura}
                src={<GiOutbackHat/>}
                alt={`categoría ${categories.aventura}`}
                gradientColor="from-red-400 to-zinc-400"
            />

            
            <CategoryCard
                category={categories.clasicos}
                src={<GiGameConsole/>}
                alt={`categoría ${categories.clasicos}`}
                gradientColor="from-cyan-200 to-lima-200"
            />

            
            <CategoryCard
                category={categories.arcade}
                src={<SiApplearcade/>}
                alt={`categoría ${categories.arcade}`}
                gradientColor="from-sky-300 to-indigo-900"
            />

            
            <CategoryCard
                category={categories.terror}
                src={<GiGhost/>}
                alt={`categoría ${categories.terror}`}
                gradientColor="from-amber-400 to-emerald-600"
            />

           
            <CategoryCard
                category={categories.estrategias}
                src={<GiChessKnight/>}
                alt={`categoría ${categories.estrategias}`}
                gradientColor="from-violet-900 to-rose-500"
            />

            <CategoryCard
                category={categories.accion}
                src={<GiSwitchWeapon/>}
                alt={`categoría ${categories.accion}`}
                gradientColor="from-yellow-500 to-violet-500"
            />
        </div>
    )
}; 