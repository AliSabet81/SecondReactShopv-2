import { ReactElement } from "react";

interface INumberOne {
    svg:ReactElement,
    title:string,
    desc:string
}
const NumberOneDispensaryCard = (i:INumberOne) => {
    return ( 
        <div className="p-4 md:p-8 border w-80 md:w-96 rounded-xl border-F4F4F4">
            <div className="w-14 py-3">{i.svg}</div>
            <div>
                <h2 className="text-2xl mt-8 mb-4 font-medium">{i.title}</h2>
                <p className="text-sm font-normal text-717378">{i.desc}</p>
            </div>
        </div>
     );
}
 
export default NumberOneDispensaryCard;