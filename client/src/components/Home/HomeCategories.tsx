import { Link } from "react-router-dom";
import { categoriesData } from "../../assets/assets";

const HomeCategories = () => {
    return (
        <section className="pb-16">
            <div className="max-w-7xl mx-auto">
                <div>
                    <h2 className="text-2xl font-semibold">Browse Categories</h2>
                    <p className="text-sm text-app-text-light mt-1">Find exactly what you need using</p>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 xl:gap-8 mt-8 w-full">
                    {categoriesData.map((cat) => (
                        <Link key={cat.slug} to={`/products?category=${cat.slug}`} onClick={() => window.scrollTo(0, 0)} className="group flex flex-col items-center gap-3 p-2 w-full">
                            <div className="w-full aspect-square p-4 rounded-2xl bg-orange-100/80 group-hover:ring-2 ring-orange-300 font-medium transition-all flex items-center justify-center">
                                <img src={cat.image} alt={cat.name} className="w-auto h-auto max-w-full max-h-full object-contain transition-all" />
                            </div>
                            <span className="text-xs sm:text-sm font-medium text-zinc-700 text-center leading-tight">{cat.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HomeCategories;
