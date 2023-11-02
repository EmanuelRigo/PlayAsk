import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';
////
import { GiPunch,GiAmericanFootballBall,GiOutbackHat,GiGameConsole,GiGhost,GiChessKnight,GiSwitchWeapon } from "react-icons/gi";
import { SiApplearcade } from "react-icons/si";

// const [
//     imgPelea,
//     imgDeportes,
//     imgAventura,
//     imgClasicos,
//     imgArcade,
//     imgTerror,
//     imgEstrategias,
//     imgAccion
// ] = imgs

export const CategoryList = () => {

    return (
        <div className='grid grid-cols-2 gap-5 sm:grid-cols-4 '>
              
            
            <CategoryCard className="sombra"
            

                category={categories.pelea}
            
                src={<GiPunch></GiPunch>}
                alt={` categoría ${categories.pelea}`}
                // gradientColor="bg-violet-600"
               
            />
             


           
            <CategoryCard
                category={categories.deportes}
                src={<GiAmericanFootballBall/>}
                alt={`categoría ${categories.deportes}`}
                // gradientColor="bg-yellow-400"
            />


          
            <CategoryCard
                category={categories.aventura}
                src={<GiOutbackHat/>}
                alt={`categoría ${categories.aventura}`}
                // gradientColor="bg-lime-600"
            />

            
            <CategoryCard
                category={categories.clasicos}
                src={<GiGameConsole/>}
                alt={`categoría ${categories.clasicos}`}
                // gradientColor="bg-blue-600"
            />

            
            <CategoryCard
                category={categories.arcade}
                src={<SiApplearcade/>}
                alt={`categoría ${categories.arcade}`}
                // gradientColor="bg-pink-500"
            />

            
            <CategoryCard
                category={categories.terror}
                src={<GiGhost/>}
                alt={`categoría ${categories.terror}`}
                // gradientColor="bg-orange-700"
            />

           
            <CategoryCard
                category={categories.estrategias}
                src={<GiChessKnight/>}
                alt={`categoría ${categories.estrategias}`}
                // gradientColor="bg-teal-600"
            />

            <CategoryCard
                category={categories.accion}
                src={<GiSwitchWeapon/>}
                alt={`categoría ${categories.accion}`}
                // gradientColor="bg-fuchsia-600"
            />
        </div>
    )
}; 