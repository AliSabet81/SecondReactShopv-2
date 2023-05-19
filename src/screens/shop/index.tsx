import { Outlet } from "react-router-dom";
import AboutUsCards from "../../components/AboutUsCards";
import ShopCategoryFilters from "./filters";

const ShopAllScreen = () => {
    return ( 
        <div className="mb-80">
            <AboutUsCards variant={"shop"}/>
            <div className="container flex pt-10 px-3 md:px-16 m-auto">
                <div className="w-80 border-x-C3D2CC hidden md:flex flex-col gap-5 pr-8 border-r">
                    <h1 className="border-b py-5 border-b-C3D2CC text-2xl font-medium">Filters</h1>
                    <div>
                        <h2 className="text-xs font-light mb-5 text-717378">PRODUCT CATEGORY</h2>
                        <ShopCategoryFilters/>
                    </div>
                </div>
                 <div><Outlet/></div>
            </div>
        </div>
     );
}
 
export default ShopAllScreen;