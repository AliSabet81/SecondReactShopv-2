import { ROUTES } from "../../Routes";
import WeedDescribeCard from "../Cards/weedDescribeCard";

const WeedDescribe = () => {
    return ( 
        <div className="container mx-auto">
            <div className=" border-t border-717378 mx-6 md:mx-28  my-32 grid grid-cols-1 md:grid-cols-3 gap-8 pt-16">
                <WeedDescribeCard name={"Indica"} desc={"This type of cannabis is commonly taken by those who want to sink into a state of total relaxation in every limb. This reduces stress overall and can take your worries and fatigue away. Because of its relaxing effects, it is suggested to use this type of cannabis at night. It is particularly recommended for people who have trouble sleeping, be it due to insomnia, pain or other associated sleep issues."} path={ROUTES.Indica}/>
                <WeedDescribeCard name={"Sativa"} desc={"Contrary to the deep all-body relaxation that comes with the use of indica strains, sativas are known for increasing the feeling of creativity, enhancing focus and lessening anxiety. This is more of a mind-centered high in terms of how and where you will feel the effects. Given its stimulating nature, it is recommended to use this during the day."} path={ROUTES.Sativa}/>
                <WeedDescribeCard name={"Hybrids"} desc={"Hybrid strains are just that – they combine the head-focused high effects of sativas with the bodily relaxation of indicas. This is ideal for people who really want to sooth any fatigue and worries while also clearing the mind ready to focus fresh on something new. Hybrids are expertly tailored to result in strains with specific effects. Useful strain vocabulary to familiarize yourself with when it comes to hybrids includes sativa-dominant (full, bodily relaxation), indica-dominant (boosting creativity, increasing mood and lessening anxiety) and balanced (the best of both worlds)."} path={ROUTES.Hybrid}/>
            </div>
        </div>
     );
}
 
export default WeedDescribe;