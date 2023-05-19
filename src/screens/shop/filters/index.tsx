import { Link } from "react-router-dom";
import { TChildren, menuRoutes } from "../../../Routes";

interface ISubFilter{
    name:String,
    path:string,
    children ?: TChildren[]
  }

const Filters = () => {
    return menuRoutes.filter((route)=>route.variant?.includes('navCategory')).map((i)=> i.children ? SubFilter(i) : <Link className="text-lg font-normal hover:text-primary text-46494F" key={i.path} to={i.path}>{i.name}</Link>)
}
const SubFilter = (i:ISubFilter)=>{
    return (
        <div className="flex gap-3 flex-col">
            <Link className="text-lg font-normal hover:text-primary text-46494F" key={i.path} to={i.path}>{i.name}</Link>
            <div className="border-l border-x-C3D2CC pl-4 gap-2 flex flex-col">
            {i.children?.map((e)=><Link className="text-base font-normal hover:text-primary text-46494F" key={e.path} to={e.path}>{e.name}</Link>)}
            </div>
        </div>
    )
}

const ShopCategoryFilters = () => {
    return ( 
        <div className="flex gap-2 flex-col">
            {Filters()}
        </div>
     );
}
 
export default ShopCategoryFilters;