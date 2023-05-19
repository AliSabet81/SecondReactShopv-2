import { Link } from "react-router-dom";

interface IWeedDesc{
    name:string,
    desc:string,
    path:string
}
const WeedDescribeCard = (i:IWeedDesc) => {
    return ( 
        <div className="flex flex-col border rounded-xl border-F4F4F4 w-80 md:w-96 p-6 md:p-8 gap-8">
            <div className="flex h-60 justify-center rounded-lg items-center bg-F2F6F4"><img src="Weed.png" alt="" /></div>
            <div>
                <h2 className="text-3xl font-semibold">{i.name}</h2>
                <p className="text-sm mt-4 font-normal text-717378">{i.desc}</p>
            </div>
            <Link className="border-b w-fit text-base font-normal border-b-primary text-primary" to={i.path}>Shop <span>{i.name}</span></Link>
        </div>
     );
}
 
export default WeedDescribeCard;