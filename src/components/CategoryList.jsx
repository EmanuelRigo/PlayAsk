import { Link } from 'react-router-dom';
import { imgs, categories } from '../data';
import { CategoryCard } from './CategoryCard';

const [
    imgCiencia,
    imgDeportes,
    imgFilosofia,
    imgGeografia,
    imgHistoria,
    imgLiteratura,
    imgTecnologia,
] = imgs

export const CategoryList = () => {

    return (
        <div className='flex flex-row flex-wrap justify-center gap-4 mt-10'>
            {/* /* link categoria ciencia */}
            <CategoryCard
                category={categories.ciencia}
                src={imgCiencia}
                alt={`categoría ${categories.ciencia}`}
                gradientColor="from-purple-500 to-pink-500"
            />


            {/* link categoria deportes */}
            <CategoryCard
                category={categories.deportes}
                src={imgDeportes}
                alt={`categoría ${categories.deportes}`}
                gradientColor="from-lime-400 to-teal-700"
            />


            {/* link categoria filosofia */}
            <CategoryCard
                category={categories.filosofia}
                src={imgFilosofia}
                alt={`categoría ${categories.filosofia}`}
                gradientColor="from-red-400 to-zinc-400"
            />

            {/* link categoria geografia */}
            <CategoryCard
                category={categories.geografia}
                src={imgGeografia}
                alt={`categoría ${categories.geografia}`}
                gradientColor="from-cyan-200 to-lima-200"
            />

            {/* link categoria historia */}
            <CategoryCard
                category={categories.historia}
                src={imgHistoria}
                alt={`categoría ${categories.historia}`}
                gradientColor="from-sky-300 to-indigo-900"
            />

            {/* link categoria literatura */}
            <CategoryCard
                category={categories.literatura}
                src={imgLiteratura}
                alt={`categoría ${categories.literatura}`}
                gradientColor="from-amber-400 to-emerald-600"
            />

            {/* link categoria tecnologia */}
            <CategoryCard
                category={categories.tecnologia}
                src={imgTecnologia}
                alt={`categoría ${categories.tecnologia}`}
                gradientColor="ffrom-violet-900 to-rose-500"
            />

        </div>
    )
}; 