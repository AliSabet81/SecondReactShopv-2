import HowTo from "./howTo";
import Refer from "./refer";
import "./index.css"
const HowToOrderOnline = () => {
    return ( 
        <div className="relative pb-28 mt-80 HowTo flex flex-col items-center">
            <Refer/>
            <HowTo/>
        </div>
     );
}
 
export default HowToOrderOnline;