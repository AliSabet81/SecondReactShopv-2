import { ReactElement } from "react";

interface IAboutUsCard {
    title : string,
    desc ?: string,
    icone : ReactElement
}
const AboutUsCard = (props : IAboutUsCard) => {
    return ( 
        <div className="flex gap-6 flex-col max-md:items-center md:flex-row">
                <button className="w-24 h-24 flex justify-center items-center rounded-full bg-white">{props.icone}</button>
                <div className="flex flex-col gap-4 w-72 justify-center">
                    <h2 className="font-medium text-4xl">{props.title}</h2>
                    <p className="text-base font-normal text-717378">{props.desc}</p>
                </div>
            </div>
     );
}
 
export default AboutUsCard;
