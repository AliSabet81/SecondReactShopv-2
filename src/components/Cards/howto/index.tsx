import { ReactElement } from "react";

interface IHowToCard {
    num : number ,
    icone : ReactElement,
    title : string,
    desc : string
}
const HowToCard = (props : IHowToCard) => {
    return ( 
        <div className="max-w-xl flex flex-col gap-6 items-center">
            <div className="relative">
                <span className="absolute bg-F2BC1B rounded-full w-10 h-10 flex justify-center items-center -left-1/3 text-base font-medium text-05422C">{props.num}</span>
                {props.icone}
            </div>
            <h2 className="text-2xl text-white font-medium">{props.title}</h2>
            <p className="text-9D9EA2 text-center text-base font-normal">{props.desc}</p>
        </div>
     );
}
 
export default HowToCard;