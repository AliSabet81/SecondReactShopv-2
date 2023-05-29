// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "./index.css"
import ProductCard from '../../Cards/Product';
import { Products } from '../../../Routes/Product';
import { Reviews } from '../../../Routes/reviews';
import ReviewCard from '../../Cards/reviewCard';

const swiper = (i:string) =>{
  switch (i) {
    case "best":
          return Products.filter((product)=>product.score).map((i)=><SwiperSlide key={i.index}><ProductCard img={i.img} title={i.title} score={i.score} reviews={i.reviews} price={i.price} variant={i.variant} category={i.category}/></SwiperSlide>)
    case "bundle":
          return Products.filter((product)=>product.variant.includes("outOfStock")).map((i)=><SwiperSlide key={i.index}><ProductCard img={i.img} title={i.title} score={i.score} reviews={i.reviews} price={i.price} variant={i.variant} category={i.category}/></SwiperSlide>)
    case "sale":
          return Products.filter((product)=>product.variant.includes("discount")).map((i)=><SwiperSlide key={i.index}><ProductCard img={i.img} title={i.title} score={i.score} reviews={i.reviews} price={i.price} variant={i.variant} category={i.category}/></SwiperSlide>)
    case "review":
          return Reviews.map((i)=><SwiperSlide key={i.index}><ReviewCard img={i.img} id={i.id} review={i.review} date={i.date} score={i.score}></ReviewCard></SwiperSlide>)
    case "top":
      return Products.filter((product)=>product.score).map((i)=><SwiperSlide key={i.index}><ProductCard color="white" img={i.img} title={i.title} score={i.score} reviews={i.reviews} price={i.price} variant={i.variant} category={i.category}/></SwiperSlide>)
  }
}
export const SwiperComponent = ({variant}:{variant:string}) => {
  return (
    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={3}
      navigation
    >
      {swiper(variant)}
    </Swiper>
  );
};