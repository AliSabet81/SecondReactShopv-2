import { Outlet } from "react-router-dom";

const AuthScreen = () => {
    return ( 
        <div className="container m-auto mb-56 mt-4">
            <div className="w-1/2 mx-auto bg-F4F4F4 rounded-lg px-28 py-20">
                <Outlet/>
            </div>
        </div>
     );
}
 
export default AuthScreen;