import AboutUsCards from "../../components/AboutUsCards";
import HomeBest from "../../components/HomeBest";
import HomeEducation from "../../components/homeEducation";
import HomeReviews from "../../components/HomeReviews";
import HowToOrderOnline from "../../components/howToOrderOnline";
import NumberOneDispensary from "../../components/numberOneDISPENSARY";
import BestSwiperProduct from "../../components/SwiperBest";
import WeedDescribe from "../../components/weedDescribe";

const HomeScreen = () => {
    return ( <div className="overflow-x-hidden">
        <HomeBest/>
        <AboutUsCards variant={"home"}/>
        <div className="">
        <BestSwiperProduct/>
        </div>
        <div>
            <HomeReviews/>
        </div>
        <HowToOrderOnline/>
        <NumberOneDispensary/>
        <WeedDescribe/>
        <HomeEducation/>
    </div> );
}
 
export default HomeScreen;