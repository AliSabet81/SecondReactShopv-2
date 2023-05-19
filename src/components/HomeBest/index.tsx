import { Button } from "@mui/material";
import "./index.css"
import { Link } from "react-router-dom";
import { ROUTES } from "../../Routes";
const HomeBest = () => {
    return ( 
        <div className="homeBest flex justify-center">
            <div className="container py-14 px-6 md:py-32 max-w-7xl flex flex-col md:flex-row">
                <div>
                    <h4 className="text-F2BC1B text-base font-normal">BEST SELLER</h4>
                    <h1 className="md:text-6xl text-3xl mt-4 max-w-2xl mb-6 font-semibold text-white">BEST DISPENSARY TO BUY WEED ONLINE </h1>
                    <h3 className="md:text-2xl text-base font-normal text-F4F4F4">Vitamins & Supplements</h3>
                    <p className="flex gap-8 mb-6 md:mb-10 mt-10 md:mt-28 items-center">
                        <span className="md:text-2xl text-lg text-white font-medium">Get 25% off</span>
                        <span className="border h-3 border-C8C9CB"></span>
                        <span className="md:text-2xl text-lg text-white font-medium">Free Shipping</span>
                    </p>
                    <Button variant="contained" color="success" className="py-5 px-14"><Link to={ROUTES.ShopAll}>Shop All</Link></Button>
                </div>
                <div className="h-full relative w-2/4">
                    <button><img className="absolute w-28 md:w-52 top-4 md:top-12 -right-11 md:right-40" src="product1.png" alt="" /></button>
                    <button><img className="absolute bottom-8 md:bottom-4 md:w-44 w-20 left-0 md:left-10" src="product2.png" alt="" /></button>
                    <button><img className="absolute bottom-12 md:bottom-8 md:w-44 w-24 -right-40 md:-right-4" src="product3.png" alt="" /></button>
                </div>
                
            </div>
        </div>
     );
}
 
export default HomeBest;