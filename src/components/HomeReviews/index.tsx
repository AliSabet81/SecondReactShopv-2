import ReviewTitleCard from "../Cards/reviewTitleCard";
import ReviewsSwiper from "../swiper/ReviewsSwiper";

const HomeReviews = () => {
    return ( 
        <div className="container flex flex-col items-center m-auto p-6 md:p-28">
            <h1 className="text-6xl font-semibold mb-16">CUSTOMER TESTIMONIALS</h1>
            <div className="flex flex-col items-center md:flex-row gap-8">
                <ReviewTitleCard/>
                <div className="md:max-w-4xl"><ReviewsSwiper/></div>
            </div>
        </div>
     );
}
 
export default HomeReviews;