import { Products } from "../../Routes/Product";
import ProductCard from "../../components/Cards/Product";
import TopSelling from "../../components/topSelling";
interface ICategoryPage{
    name:string,
    desc:string
}
const CategoryPage = (e:ICategoryPage) => {
    return ( 
        <div className="max-w-sm pr-3 md:px-8 flex flex-col gap-8 md:max-w-5xl">
            <div className="pb-6 border-F4F4F4 border-b">
                <h1 className="text-2xl font-normal">Shop</h1>
            </div>
            <div>
                <h2 className="text-xl font-medium text-primary">{e.name}</h2>
                <p className="text-base font-normal max-w-4xl mt-4">{e.desc}</p>
            </div>
            <TopSelling/>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                {Products.filter((e)=>e.discount).map((i)=><ProductCard img={i.img} title={i.title} score={i.score} reviews={i.reviews} price={i.price} variant={i.variant} category={e.name}/>)}
            </div>
        </div>
     );
}
 
export default CategoryPage;