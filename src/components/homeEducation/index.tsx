import { Link } from "react-router-dom";
import EducationCard from "../Cards/educationCard";

const HomeEducation = () => {
    return ( 
        <div className="bg-F4F4F4">
            <div className="container m-auto p-6 pb-72 md:p-32 md:pb-80 ">
                <div className="flex justify-between border-b pb-8 border-C8C9CB mb-16">
                    <h1 className="text-2xl md:text-3xl font-semibold">WEED EDUCATION</h1>
                    <Link className="border-b text-base p-0 font-normal border-b-primary text-primary" to={"/education"}>Show All</Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
                    <EducationCard img={"education1.png"} date={"January 24, 2023"} title={"12 Mistakes To Avoid When Buying Cannabis Online"} desc={"Buying cannabis online can be a great way to get your hands on the products you need without leaving the comfort of your home. But …"} path={"/ducation/1"}/>
                    <EducationCard img={"education2.png"} date={"January 20, 2023"} title={"How To Store Cannabis and Keep it Fresh and Potent?"} desc={"Cannabis packaging has advanced dramatically in recent years, whether your state has a medicinal marijuana programme, legal adult-use weed, or both. Most ..."} path={"/ducation/2"}/>
                    <EducationCard img={"education3.png"} date={"January 19, 2023"} title={"The Ultimate Guide to Checking the Quality of Cannabis – 10 Industry Leading Tips"} desc={"Quality cannabis is a term used to describe cannabis products that meet specific standards of excellence. It is essential to understand what quality cannabis means, …"} path={"/ducation/3"}/>
                </div>
            </div>
        </div>
     );
}
 
export default HomeEducation;