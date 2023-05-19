import { Link } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import OffTimer from "./timer";
import SubMenu from "./submenu";
import { menuRoutes } from "../../Routes";
import TextField from "../../components/textField";
const Header = () => {
    const Filter = () => {
            return menuRoutes.filter((route)=>route.variant?.includes('nav')).map((i)=> i.children ? SubMenu(i) : <Link className="border-b transition duration-700 ease-in-out border-white hover:border-primary" key={i.path} to={i.path}>{i.name}</Link>)
        }
    return ( 
        <div className="shadow">
            <div className="bg-secondery h-9 flex gap-4 items-center justify-center text-sm font-normal text-white">
                <span className="opacity-70">LIMITED OFFER : 30% OFF. Use RABBIT30 at Checkout.</span>
                {OffTimer(86400)}
            </div>
            <div className="container m-auto">
                <div className="grid grid-cols-3 items-center py-3 px-16">
                    <Link to={"/"}><img src="Logo.png" alt="" /></Link>
                    <div className="justify-self-center"><TextField variant={"search"}/></div>
                    <div className="h-6 flex gap-6 items-center justify-self-end">
                        <button className="text-sm font-normal">Your Account</button>
                        <span className="border h-3 border-C8C9CB"></span>
                        <button><LocalMallIcon/></button>
                    </div>
                </div>
                <div className="px-44 flex gap-8 border-y justify-center items-center border-y-F4F4F4">
                    {Filter()}
                </div>
            </div>
        </div>
     );
}
 
export default Header;