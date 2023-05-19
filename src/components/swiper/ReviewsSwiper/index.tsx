// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import "./review.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Reviews } from '../../../Routes/reviews';
import ReviewCard from '../../Cards/reviewCard';

const ReviewsSwiper = () => {
    return (
      <div className='ReviewSwiper'>
        <Swiper
          // install Swiper modules
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={3}
          navigation
          >
          {Reviews.map((i)=><SwiperSlide><ReviewCard img={i.img} id={i.id} review={i.review} date={i.date} score={i.score}></ReviewCard></SwiperSlide>)}
        </Swiper>
      </div>
      );
}
 
export default ReviewsSwiper;