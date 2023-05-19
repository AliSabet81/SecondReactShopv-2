import { Link } from "react-router-dom";

interface IEducacion{
    img:string,
    date:string,
    title:string,
    desc:string,
    path:string
}

const EducationCard = (i:IEducacion) => {
    return ( 
        <div className="w-80 md:w-96">
            <img className="w-80 md:w-96 h-60" src={i.img} alt="" />
            <div className="flex flex-col gap-8 mt-6">
                <div className="flex flex-col gap-2">
                    <span className="text-sm font-light text-717378">{i.date}</span>
                    <h2 className="text-2xl font-medium">{i.title}</h2>
                    <p className="text-base font-normal text-717378">{i.desc}</p>
                </div>
                <Link className="border-b w-fit text-base font-normal border-b-primary text-primary" to={i.path}>Read More</Link>
            </div>
        </div>
     );
}
 
export default EducationCard;