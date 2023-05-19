import { SwiperComponent } from "../swiper/homeBest";

const TopSelling = () => {
    return ( 
        <div className="p-1 md:p-8 rounded-2xl bg-F2F6F4">
            <h2 className="text-2xl font-medium">Top Selling</h2>
            <div className="max-w-4xl flex items-center justify-center mt-6">
                <SwiperComponent variant={"top"}/>
            </div>
        </div>
     );
}
 
export default TopSelling;