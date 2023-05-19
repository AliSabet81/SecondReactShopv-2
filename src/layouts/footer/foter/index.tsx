import { Link } from "react-router-dom";
import { menuRoutes } from "../../../Routes";
import "../index.css"
const Foter = () => {
    const QuickLinks = () =>{
        return menuRoutes.map((route)=> <Link key={route.path} to={route.path}>{route.name}</Link>)
    }
    return ( 
        <div className="foter flex flex-col gap-16">
                <div className="flex gap-8">
                    <div className="w-96">
                        <img src="FooterLogo.png" alt="" />
                        <p className="w-2/3 mt-6 text-base text-9D9EA2 font-normal">
                        #1 Canadian top rated online dispensary that meets the customers needs in every single medical marijuana aspect. The team here at TopShelfBC is heavily involved in the Canadian cannabis industry for over 15 years. We strive to provide the top quality products, service and care at the lowest prices you’ll ever find.
                        </p>
                    </div>
                    <div className="grow flex flex-col gap-10">
                        <div>
                            <h1 className="font-medium text-xl mb-6 text-white">QUICK LINK</h1>
                            <div className="grid grid-cols-2 gap-4 text-sm font-normal text-9D9EA2 justify-items-start">
                                {QuickLinks()}
                            </div>
                        </div>
                        <div>
                            <h1 className="font-medium text-xl mb-6 text-white">CONTACT US</h1>
                            <button className="text-sm font-normal text-9D9EA2">info@topshelfbc.cc</button>
                        </div>
                        <div>
                            <h1 className="font-medium text-xl mb-6 text-white">MORE</h1>
                            <div className="grid grid-cols-2 gap-4 text-sm font-normal text-9D9EA2 justify-items-start">
                                <button>1</button>
                                <button>1</button>
                                <button>1</button>
                                <button>1</button>
                                <button>1</button>
                                <button>1</button>
                                <button>1</button>
                                <button>1</button>
                                <button>1</button>
                                <button>1</button>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <button><img src="mastercard1.png" alt="" /></button>
                            <button><img src="mastercard2.png" alt="" /></button>
                            <button><img src="mastercard3.png" alt="" /></button>
                            <button><img src="mastercard4.png" alt="" /></button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-between pt-10 border-t border-46494F text-base font-normal text-717378">
                    <div>© 2022 Top Shelf BC. All Rights Reserved. </div>
                    <div className="flex gap-8">
                        <button>Out Of Stock</button>
                        <button>Privacy Policy</button>
                        <button>Terms & Conditions</button>
                    </div>
                </div>
        </div>
     );
}
 
export default Foter;